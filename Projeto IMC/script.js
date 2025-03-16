function ClickButton(){
    let nome = window.document.getElementById('nome').value
    let altura = window.document.getElementById('altura').value
    let peso = window.document.getElementById('peso').value
    let res = window.document.getElementById('res')

    if(!nome.trim() || !altura.trim() || !peso.trim()){
        window.alert('Por favor, coloque um valor em cada caixa abaixo!')
    }
    else{
        let imc = peso/(altura * altura)

        res.innerHTML = `${nome} tem ${altura} e pesa ${peso}. Então o seu IMC vai ser ${imc}.`
    }
}