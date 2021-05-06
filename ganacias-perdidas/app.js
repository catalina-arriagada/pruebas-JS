var income = prompt ("Valor de ingresos: ");
var costs = prompt ("Valor de costos: ");
var taxes = prompt ("Porcentaje de impuestos: ");

var gain = income - costs;
gain = gain - ((gain*taxes)/100); 

document.write("El valor de los ingresos es de $" + income + ". El valor de los costos es de $" + costs + ". El porcentaje de impuestos es de " + taxes + "%. Por lo tanto, el valor de la ganancia total, asciende a $" + gain + ".");
