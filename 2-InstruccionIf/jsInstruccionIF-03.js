/*Al ingresar una edad debemos informar si 
la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >=18)
	{
		alert("eres mayor de edad ");
	}
	else
	{
		alert("usted es menor de edad ");
	}
	//tomo la edad  
}
//FIN DE LA FUNCIÓN