/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio3=document.getElementById("txtIdPrecioTres").value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	resultado= precio1 + precio2 + precio3;

	alert("la suma de los precios es " + resultado);


}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio3=document.getElementById("txtIdPrecioTres").value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	promedio= (precio1 + precio2 + precio3) / 3;

	alert("el promedio es " + promedio);
	
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3; 
	var iva;
	var preciofinal;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio3=document.getElementById("txtIdPrecioTres").value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	iva = (precio1 + precio2 + precio3) * 0.21;

	preciofinal= (precio1 + precio2 + precio3) + iva;

	alert("el precio final es " + preciofinal); 

}