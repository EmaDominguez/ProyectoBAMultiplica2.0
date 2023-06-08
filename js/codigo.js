// Muestra el año actual, para actualizarse atuomaticamente
var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


document.getElementById("myFooter").addEventListener("click", miFuncion);

function miFuncion() {
// Mensaje Emergente
  alert("Hiciste click en el pie de la pagina, claramente no te muestra nada mas que esta ventana =)");
}
