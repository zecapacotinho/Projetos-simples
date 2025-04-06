//Função para o tema escuro/claro
const check = window.document.getElementById('check')
check.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

//Função para o relógio
function Horario(){
    const horario = window.document.querySelector('.hora')
    const agora = new Date()
    let hora = agora.getHours()
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const segundos = agora.getSeconds().toString().padStart(2, '0')
    const chk = window.document.getElementById('chk')
    if(chk.checked){
        hora %= 12
        if(hora === 0){
            hora = 12
        }
    }
    else{
        hora %= 24
    }
    hora = hora.toString().padStart(2, '0')
    horario.innerHTML = `${hora}:${minutos}:${segundos}`
}
Horario()
setInterval(Horario, 1000)
