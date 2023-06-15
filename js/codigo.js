// Condicionales
if (document.getElementById("myFooter")) {
}

// Variable
var currentYear = new Date().getFullYear();

// Funcion
function mostrarMensaje() {
  alert("Felicitaciones! Encontraste el panel secreto. Mencionando 'POROTOS QUEMADOS' obtendrás un 20% de descuento en nuestros servicios, que lo disfrutes!");
}

// Métodos
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("current-year").textContent = currentYear;
  document.getElementById("myFooter").addEventListener("click", mostrarMensaje);
});
