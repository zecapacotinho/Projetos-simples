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

        if(imc <= 18.5){
            res.innerHTML = `O imc de ${nome} é de ${imc.toFixed(2)}. Então você está abaixo do peso.`
        }
        else if(imc >= 18.5 && imc <= 25){
            res.innerHTML = `O imc de ${nome} é de ${imc.toFixed(2)}. Então você está no peso normal.`
        }
        else{
            res.innerHTML = `O imc de ${nome} é de ${imc.toFixed(2)}. Então você está acima do peso.`
        }
    }
}