/* funcionalidad de pagos */
document.getElementById("libro1").value=0;
document.getElementById("libro2").value=0;
document.getElementById("libro3").value=0;
document.getElementById("libro4").value=0;


/* impresión de articulos */
/* var articulos = document.getElementById("printArt"); */
var p1=document.getElementById("print1");
var p2=document.getElementById("print2");
var p3=document.getElementById("print3");
var p4=document.getElementById("print4");

/* impresion de unidades */

var u1 = document.getElementById("unidad1");
var u2 = document.getElementById("unidad2");
var u3 = document.getElementById("unidad3");
var u4 = document.getElementById("unidad4");

/* total a pagar */

var pago = document.getElementById("precio");
/*boton de pago */
var btnPagar =document.getElementById("pagar");
var Carrito =document.getElementById("btnCarrito");
var Carrito2 =document.getElementById("btnCarrito2")


/* btnPagar.addEventListener("click",pagar); */
var total=0;
Carrito.addEventListener("click",cargue);
Carrito2.addEventListener("click",cargue);

var validacion = false;

function cargue (){


    /* inputs */

        var libro1 = document.getElementById("libro1").value;
        libro1=parseInt(libro1);
        var libro2 = document.getElementById("libro2").value;
        libro2=parseInt(libro2);
        var libro3 = document.getElementById("libro3").value;
        libro3=parseInt(libro3);
        var libro4 = document.getElementById("libro4").value;
        libro4=parseInt(libro4);
    /* limpiar total */
    pago.innerHTML=pago.innerHTML+"";

    if(libro1>0){
        p1.innerHTML=p1.innerHTML+"Alexander Cane : Programación con Python";
        u1.innerHTML=u1.innerHTML+libro1;
        total+=(libro1*35000);
    }
    if(libro2>0){
        p2.innerHTML=p2.innerHTML+"Alfredo Moreno Muñoz : Python para Principiantes";
        u2.innerHTML=u2.innerHTML+libro2;
        total+=(libro2*66000);
        
    }
    if(libro3>0){
        p3.innerHTML=p3.innerHTML+"Alexander Cane : Programación para principiantes";
        u3.innerHTML=u3.innerHTML+libro3;
        total+=(libro3+98000);
        
    }
    if(libro4>0){
        p4.innerHTML=p4.innerHTML+"Rafael Goméz Blanes : El libro negro del programador";
        u4.innerHTML=u4.innerHTML+libro4;
        total+=(libro4*45000);
        
    }
    if(total>0){
        pago.innerHTML=pago.innerHTML+"$ "+total;
        document.getElementById("libro1").value=0;
        document.getElementById("libro2").value=0;
        document.getElementById("libro3").value=0;
        document.getElementById("libro4").value=0;
        validacion = true;
    }else{
        alert("No tiene articulos en el cariito, vaya al catalogo");
    }
    return total;
}

        btnPagar.addEventListener("click",transaccion)   

    function transaccion(){
        if(validacion){
                alert("LA TRANSACCIÓN HA SIDO EXITOSA!");
    
        } else{
            alert("EL CARRITO SE ENCUENTRA VACÍO");
        }   
    }

    