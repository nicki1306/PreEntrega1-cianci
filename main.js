function comprar(){

    let nombre = ""
    do{
        nombre = prompt("ingrese usuario")
    }while (nombre=="")
    
    alert("bienvenido " + nombre)

    let producto = "zapatillas"
    let precio = 15000
    alert("Elije tus productos (maximo 3 unidades)" + producto)
    let cantidad = 0
    do{
        cantidad= prompt("agregue cantidad de unidades de " + producto)
        console.log("la cantidad de zapatillas es " + cantidad)
        if (cantidad>=3) {
            alert("supera el limite maximo para este producto")
            
        }
        
    }while((cantidad>=3)|| (cantidad== ""))
console.log(cantidad)
    if(cantidad>=1){
        let total = 0
        total = precio * cantidad
        alert("el total a pagar es " + total)
        let pagar = ""
        do {
            pagar = prompt("seleccione medio de pago (visa, master o transferencia")
        } while (pagar=="");
        alert("pago existoso")
    }

}

comprar()

const Zapatillas = function (color,talles){
    this.color = color
    this.talles= talles

}


let zapatillas1 = new zapatillas1 ("rojo, 35,36,37,38,39,40")
let zapatillas2 = new zapatillas2 ("azul, 35,36,37,38,39,40")
let zapatillas3 = new zapatillas3 ("gris, 35,36,37,38,39,40")
let zapatillas4 = new zapatillas4 ("negro, 35,36,37,38,39,40")
let zapatillas5 = new zapatillas5 ("blanco, 35,36,37,38,39,40")
let zapatillas6 = new zapatillas6 ("amarillo, 35,36,37,38,39,40")

let lista [zapatillas1,zapatillas2,zapatillas3,zapatillas4,zapatillas5,zapatillas6]

function buscarzapatillas(){
    
}