function comprar(){

    let nombre = ""
    do{
        nombre = prompt("ingrese usuario")
    }while (nombre=="")
    
    alert("bienvenido " + nombre)

    let producto = "gorras"
    let precio = 15000
    alert("Elije tus productos (maximo 3 unidades)" + producto)
    let cantidad = 0
    do{
        cantidad= prompt("agregue cantidad de unidades de " + producto)
        console.log("la cantidad de gorras es " + cantidad)
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