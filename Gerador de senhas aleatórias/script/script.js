function ClickButton(){
    let res = window.document.getElementById('resul')
    let num = window.document.getElementById('num').value

    if(!num.trim()){
        window.alert('Por favor, coloque um número para definir o tamanho da senha!')
    }
    else{
        let senha = ''
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123abcdefghijklmnopqrstuvwxyz456789!@#$%^&*()'
        let valor = parseInt(num)
        for(let i = 0; i <= valor; i++){
            let aleatorio = Math.floor(Math.random() * letras.length)
            senha += letras[aleatorio]
        }
        res.innerHTML = `Sua senha é: ${senha}`
        
    }
}