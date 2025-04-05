//Função para o tema escuro/claro
const check = document.getElementById('check')
check.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    
})

//Função para mudar o tipo de hora

//Função para o relógio
function Horario(){
    const horario = window.document.querySelector('.hora')
    const agora = new Date()
    const hora = agora.getHours().toString().padStart(2, '0')
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const segundos = agora.getSeconds().toString().padStart(2, '0')
    horario.innerHTML = `${hora}:${minutos}:${segundos}`
    
}
Horario()
setInterval(Horario, 1000)
