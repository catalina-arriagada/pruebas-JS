var temperature = parseFloat(prompt("¿Cuál es la temperatura en °C?"));

//convertir °C a °F:
var farenheitGrades = (temperature * 1.8)  + 32;

console.log ("La temperatura en grados °C es: " + temperature + ", y en grados Farenheit es de: " + farenheitGrades);
document.write ("La temperatura en grados Celsius es de: " + temperature + " grados, " + "y en grados Farenheit es de: " + farenheitGrades +" grados.");