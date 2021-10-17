/* funcionalidad de pagos */

/* inputs */

var libro1 = document.getElementById("libro1").value;
libro1=parseInt(libro1);
var libro2 = document.getElementById("libro2").value;
libro2=parseInt(libro2);
var libro3 = document.getElementById("libro3").value;
libro3=parseInt(libro3);
var libro4 = document.getElementById("libro4").value;
libro4=parseInt(libro4);
/*boton de pago */
var btnPagar =document.getElementById("pagar");

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

btnPagar.addEventListener("click",pagar);


var total=0;
function pagar (){

    /* articulos.innerHTML=articulos.innerHTML + "Articulos del Carrito" */

    if(libro1>0){
        p1.innerHTML=p1.innerHTML+"Alexander Cane : Programación con Python";
        u1.innerHTML=u1.innerHTML+libro1;
        total+=(libro1*15);
    }
    if(libro2>0){
        p2.innerHTML=p2.innerHTML+"Alfredo Moreno Muñoz : Python para Principiantes";
        u2.innerHTML=u2.innerHTML+libro2;
        total+=(libro2*25);
        
    }
    if(libro3>0){
        p3.innerHTML=p3.innerHTML+"Alexander Cane : Programación para principiantes";
        u3.innerHTML=u3.innerHTML+libro3;
        total+=(libro3+25);
        
    }
    if(libro4>0){
        p4.innerHTML=p4.innerHTML+"Rafael Goméz Blanes : El libro negro del programador";
        u4.innerHTML=u4.innerHTML+libro4;
        total+=(libro4*25);
        
    }
    pago.innerHTML=pago.innerHTML+"$ "+total;

    alert(total);
}