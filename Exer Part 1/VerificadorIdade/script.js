const botao = document.querySelector('.button');
const resposta = botao.addEventListener('click', function(){
    let anoAtual = new Date().getFullYear();
    const img = document.querySelector('.img');
    const anoNascimento = document.querySelector('.ano');
    const radioM = document.querySelector('#m');
    const radioF = document.querySelector('#f');
    const resultado = document.querySelector('.resultado');
    let idade;
    if(anoNascimento.value > 1900){
        idade = anoAtual - anoNascimento.value;
    }else{
        alert('[ERRO] Ano de Nascimento inválido ou vázio!')
    }
    
    let sexo;

    if(radioM.checked === true && idade > 5) {
        sexo = 'Homem';
        img.src = "./assets/masculino.jpg"
    }else if(radioF.checked === true) {
        sexo = 'Mulher';
        img.src = "./assets/feminino.jpg"
    }else{
        alert('[Erro] Marque o sexo!');
    }

    if(sexo != undefined && idade > 5 && idade < 110){
        resultado.textContent = `${sexo} com ${idade} anos`;
    }
    console.log(`Detectamos ${sexo} com ${idade} anos`)
});
