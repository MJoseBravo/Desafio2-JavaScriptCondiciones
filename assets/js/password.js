//pagina password
const digito1 = document.querySelector('#digito1')
const digito2 = document.querySelector('#digito2')
const digito3 = document.querySelector('#digito3')
const boton = document.querySelector('#boton')
const pass = document.querySelector('#pass')

boton.addEventListener("click", ()=> {
     let numero = Number(digito1.value) * 100 + Number(digito2.value) * 10 + Number(digito3.value)
     if (numero == 911) {
        pass.innerHTML = "password 1 correcto" 
     } else if (numero == 714) {
        pass.innerHTML = "password 2 correcto" 
     } else {
        pass.innerHTML = "password incorrecto"
     }
})