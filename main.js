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

let colorusuario
let talle

colorusuario = prompt("ingrese color")
talle = prompt("ingrese talle")

const tallesGenerales = [35, 36, 37, 38, 39, 40]

const Zapatillas = function (color, talles, cantidad) {
    this.color = color
    this.talles = talles
    this.cantidad = cantidad

}


let Zapatillas1 = new Zapatillas("rojo", tallesGenerales, 10)
let Zapatillas2 = new Zapatillas("azul", tallesGenerales, 25)
let Zapatillas3 = new Zapatillas("gris", tallesGenerales, 32)
let Zapatillas4 = new Zapatillas("negro", tallesGenerales, 12)
let Zapatillas5 = new Zapatillas("blanco", tallesGenerales, 18)
let Zapatillas6 = new Zapatillas("amarillo", tallesGenerales, 46)

let lista = [Zapatillas1, Zapatillas1, Zapatillas2, Zapatillas3, Zapatillas4, Zapatillas5, Zapatillas6]

const countZapatillas = (listacontar) => {
    let cantidad = 0
    listacontar.forEach(z => {
        cantidad += z.cantidad
    });
    return cantidad;
}
//recibe color y talle y la lista de zapatillas
//devuelve el valor del array disponible junto con el total para este color
const filterZapatillas = (color, talle, listazapatillas) => {
    let resultado = listazapatillas.filter(zapatilla => {
        console.log(color, zapatilla.color)
        const found = zapatilla.talles.find((t) => t == talle);
        return ((color === zapatilla.color) && (typeof found !== "undefined"))
    })
    console.log("esta disponible", resultado)
    let total = countZapatillas(resultado)
    console.log("la cantidad de zapatillas para el color " + color + "es " + total)
}

//filterZapatillas(colorusuario, talle, lista)

if(localStorage.getItem(lista)){
    lista = JSON.parse(localStorage.getItem(Zapatillas))
}else{
    lista = lista
}

