function comprar(){

    let identificar = true
    let cantidad = 2
    let producto = gorras

}

    do{
        let cantidad = prompt("usted puede agregar hasta 2 unidades de " + producto)
        if(cantidad === null){
            break
        }
        if(cantidad== "2"){
            alert("productos ingresados con exito")
            identificar = false
            }else{
                alert("falta una unidad para completar el carrito")
                if(cantidad >2){
                    alert("Su carrito supera el limite de compra de este producto, elimine uno")
                    console.log("intente nuevamente")
                    break
            }
        }
    }while(identificar)

    comprar()
