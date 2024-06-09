
//pagina stickers
const btn = document.querySelector('#btn')
const cantidad = document.querySelector('#cantidad')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')

btn.addEventListener("click", ()=> {
    const resultado = Number(num1.value) + Number(num2.value) + Number(num3.value)
    if (resultado <= 10) {
        cantidad.innerHTML = resultado
    } else {
        cantidad.innerHTML = "demasiados"
    }
})
