//capturar kos datos ingresados en el formulario

// function captura(){

//     let nombre=document.getElementById("nom").value;
//     let apellido=document.getElementById("ape").value;
//     let mail=document.getElementById("mail").value;
//     let cantidad=document.getElementById("cant").value 
//     alert(nom.value +"  "+ ape.value + " "+ mail + " " + (cant.value * 200)); 
// }

function calulcarPrecio(){
    var categoria = document.getElementById("cate").value;
    var cantidad = document.getElementById("cant").value;
    var precio = 200;
    var descuento = 0;
    var totalPago = 0;
    var valor = 0;
    var pagar = 0;
    var compra = 0;

    compra = precio * cantidad;

    if(categoria == 1){
        descuento = compra*0.80;
    }else if(categoria == 2){
        descuento = compra*0.50;
    }else if(categoria == 3){
        descuento = compra*0.15;
    }
     
     pagar = compra - descuento;
     document.getElementById('total_pagar').innerHTML = 'Total a Pagar: $'+pagar;
}


// Borrar:
function dhc(total_pagar) { 
    document.getElementById('total_pagar').innerHTML = "";
    
    
}



    





