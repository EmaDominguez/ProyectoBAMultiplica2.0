// Muestra el año actual, para actualizarse atuomaticamente
var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


document.getElementById("myFooter").addEventListener("click", miFuncion);

function miFuncion() {
// Mensaje Emergente
  alert("Felicitaciones! Encontraste el panel secreto. Mencionando 'POROTOS QUEMADOS' obtendras un 20% de descuento en nuestros servicios, que lo disfrutes! ");
}
