var numeroUno;
var numeroDos;
var numUser;

var numeroUno = prompt("introduzca el primer numero");
var numeroDos = prompt("introduzca el segundo numero");
var numUser = prompt("queres sumar, restar, multipicar o no hacer nada con estos numeros?");

switch(numUser) {
case "sumar":
    alert("El resultado de la suma es " + (numeroUno+numeroDos));
    break;
case "restar":
        alert("El resultado de la resta es " + (numeroUno-numeroDos));
        break;
case "multipicar":
    alert("El resultado de la multiplicaion es " + (numeroUno*numeroDos));
    break;
case "nada":
    alert ("Que haces aca bobo? andápallá")
    break;
default;
    alert("no bro esto no se puede hacer")
}
