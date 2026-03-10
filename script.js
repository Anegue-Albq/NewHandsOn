document.addEventListener("DOMContentLoaded", () => {

const globo = document.getElementById("globo")

/* pausa quando o mouse passa */

globo.addEventListener("mouseenter", () => {
globo.style.animationPlayState = "paused"
})

/* volta a girar */

globo.addEventListener("mouseleave", () => {
globo.style.animationPlayState = "running"
})

})