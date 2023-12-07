function comprar() {

    let nombre = ""
    do {
        nombre = prompt("ingrese usuario")
    } while (nombre == "")

    alert("bienvenido " + nombre)

    let producto = "zapatillas"
    let precio = 15000
    alert("Elije tus productos (maximo 3 unidades)" + producto)
    let cantidad = 0
    do {
        cantidad = prompt("agregue cantidad de unidades de " + producto)
        console.log("la cantidad de zapatillas es " + cantidad)
        if (cantidad >= 3) {
            alert("supera el limite maximo para este producto")

        }

    } while ((cantidad >= 3) || (cantidad == ""))
    console.log(cantidad)
    if (cantidad >= 1) {
        let total = 0
        total = precio * cantidad
        alert("el total a pagar es " + total)
        let pagar = ""
        do {
            pagar = prompt("seleccione medio de pago (visa, master o transferencia")
        } while (pagar == "");
        alert("pago existoso")
    }

}

//comprar()

const Zapatillas = function (nombre, color, talles, cantidad) {
    this.nombre = nombre
    this.color = color
    this.talles = talles
    this.cantidad = cantidad
}

const tallesGenerales = [35, 36, 37, 38, 39, 40]

let producto1 = new Zapatillas("vans", "rojo", tallesGenerales, 10)
let producto2 = new Zapatillas("adidas", "azul", tallesGenerales, 25)
let producto3 = new Zapatillas("nike", "gris", tallesGenerales, 32)
let producto4 = new Zapatillas("reebook", "negro", tallesGenerales, 12)
let producto5 = new Zapatillas("puma", "amarillo", tallesGenerales, 46)

let lista = [producto1, producto2, producto3, producto4, producto5]


const countZapatillas = (listacontar) => {
    let cantidad = 0
    listacontar.forEach(z => {
        cantidad += z.cantidad
    });
    return cantidad;
}
const filterZapatillas = (listaproductos) => {
    const palabraclave = document.getElementById("buscar").value
    filtrarP = listaproductos.filter((zapatillas) => zapatillas.nombre.includes(palabraclave))

    localStorage.setItem("resultado", JSON.stringify(filtrarP))
    listarender()
};

const listarender = () => {
    let resultado = JSON.parse(localStorage.getItem("resultado"))
    if (resultado.length > 0) {
        const container = document.createElement("div")
        container.classList.add("container")
        const mostrarlista = document.getElementById("mostrarlista")
        mostrarlista.appendChild(container)

        resultado.forEach(zapatilla => {
            const card = document.createElement("div")
            card.classList.add("card")
            const nombre = document.createElement("h3")
            nombre.textContent = zapatilla.nombre
            card.appendChild(nombre)
            const color = document.createElement("h4")
            color.textContent = zapatilla.color
            card.appendChild(color)
            const talle = document.createElement("h5")
            talle.textContent = zapatilla.talles
            card.appendChild(talle)

            container.appendChild(card)
        })
    }
}


const filtrarbtn = document.getElementById("agregar")
filtrarbtn.classList.add("button")
filtrarbtn.addEventListener("click", () => { filterZapatillas(lista) })


