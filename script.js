const botaoDesligar = document.getElementById('desligar');
const botaoLigar = document.getElementById('ligar');
const situacaoDaLampada = document.getElementById('situacaoDaLampada')

var situacao = 'desligada';

botaoLigar.addEventListener ('click', () => {
    situacao = 'ligado';
    situacaoDaLampada.innerText = ("A lâmpada foi ligada");
    document.querySelector('#lampada').src='lampOn.png';
    document.querySelector('#theme').href='light.css'
});

botaoDesligar.addEventListener ('click', () => {
    situacao = 'desligado';
    situacaoDaLampada.innerText = ("A lâmpada foi desligada")
    document.querySelector('#lampada').src='lampOff.png';
    document.querySelector('#theme').href='dark.css'
});

