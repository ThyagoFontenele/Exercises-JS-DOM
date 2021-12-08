const tituloHora = document.querySelector('.horas');
const imagem = document.querySelector('.imagem');
const titulo = document.querySelector('.title');
const background = document.querySelector('body');

let horas = new Date().getHours();

if(horas < 10){
    horas = '0' + horas;
}

tituloHora.innerText = `Agora são ${horas} horas`;


if(horas >= 18 || horas < 5){
    titulo.innerText = 'Boa noite!'
    background.classList.add('noite');
    imagem.src = './assets/noite.jpg';
}
else if(horas >= 13 && horas < 18){
    titulo.innerText = 'Boa tarde!'
    background.classList.add('tarde');
    imagem.src = './assets/tarde.jpg';
}else{
    titulo.innerText = 'Bom dia!'
    background.classList.add('manha');
    imagem.src = './assets/manha.jpg';
}

