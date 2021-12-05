const botao = document.querySelector('.button');

const classificaPessoa = (idade) =>{
    if(idade > 1 && idade < 14){
        return 'criança';
    }
    else if(idade > 14 && idade < 18){
        return 'adolescente';
    }
    else if(idade >= 18 && idade < 65){
        return 'adulto(a)';
    }else{
        return 'idoso(a)';
    }
}
botao.addEventListener('click', function(){
    let anoAtual = new Date().getFullYear();
    const img = document.querySelector('.img');
    const anoNascimento = document.querySelector('.ano');
    const radioM = document.querySelector('#m');
    const radioF = document.querySelector('#f');
    const resultado = document.querySelector('.resultado');

    let idade;

    if(anoNascimento.value > 1900 && anoNascimento.value < anoAtual){
        idade = anoAtual - anoNascimento.value;
    }else{
        alert('[ERRO] Ano de Nascimento inválido ou vázio!')
    }
    
    let sexo;

    if(radioM.checked === true) {
        sexo = 'Homem';
        
    }else if(radioF.checked === true) {
        sexo = 'Mulher';
    }else{
        alert('[Erro] Marque o sexo!');
    }

    if(sexo != undefined && idade < 110 && idade > 0){


        const estado = classificaPessoa(idade);
        resultado.textContent = `${sexo} com ${idade} anos, ${estado}`;
        

        if(sexo === 'Homem'){
            img.src = "./assets/masculino.jpg"
        }else{
            img.src = "./assets/feminino.jpg"
        }
    }
    
});
