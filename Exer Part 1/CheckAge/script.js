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

const verificaSexo = () => {
    const radioM = document.querySelector('#m');
    const radioF = document.querySelector('#f');
    if(radioM.checked === true) {
        return'Homem';
        
    }else if(radioF.checked === true) {
        return 'Mulher';
    }else{
        alert('[Erro] Marque o sexo!');
    }
}

const verificaIdade = () => {
    let anoAtual = new Date().getFullYear();
    const anoNascimento = document.querySelector('.ano');
    if(anoNascimento.value > 1900 && anoNascimento.value < anoAtual){
        return anoAtual - anoNascimento.value;
    }else{
        alert('[ERRO] Ano de Nascimento inválido ou vázio!')
    }
}

botao.addEventListener('click', function(){
    
    const img = document.querySelector('.img');
    const resultado = document.querySelector('.resultado');
    
    let idade = verificaIdade();
    let sexo = verificaSexo();

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
