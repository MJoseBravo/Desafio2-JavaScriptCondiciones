//pagina borde
const image = document.querySelector('#image')
image.classList.add('border')
let borderActivated = true

image.addEventListener("click", ()=> {

    if (borderActivated) {
        image.classList.remove('border')
        borderActivated = false
    } else {
        image.classList.add('border')
        borderActivated = true
    }
})