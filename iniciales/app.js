var name = prompt("Ingrese su nombre y apellido: ");

var firstInitial = name.charAt(0);
var secondInitial = name.charAt(" "+1);

var initials = firstInitial + secondInitial;


document.write("Sus iniciales son: "+ initials.toUpperCase());