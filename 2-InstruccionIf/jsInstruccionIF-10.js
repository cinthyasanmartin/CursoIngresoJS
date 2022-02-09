/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/




function mostrar()
{
	let notaRandom;
	notaRandom = Math.floor(Math.random() * (10 - 1 ) + 1);

	if (notaRandom>=9)
	{
		alert("EXCELENTE! " + "su nota es: " + notaRandom);
	}else if (notaRandom<4)
	{
		alert("Vamos, la proxima se puede. " + "su nota es: " + notaRandom);


	}else
	{
		alert("APROBÓ! " + "su nota es: " + notaRandom);
	}

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN