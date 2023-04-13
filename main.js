let cuerpo = document.getElementById("links")
let button = document.getElementById("toggleMenu");

cuerpo.style.display="none"
function toggle() {
   let display = cuerpo.style.display
   if (display == "none") {
    cuerpo.style.display="block"
   }else{
    cuerpo.style.display="none"
   }
}




