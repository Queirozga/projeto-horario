// minutos = ;

const corpo = document.body;
const horario = document.querySelector('#horario');
const periodo = document.querySelector('#periodo');
let tempo = '';
let fundo = '';

function mudar() {
    let hoje = new Date();
    let hora = hoje.getHours();
    let minutos = hoje.getMinutes();

if (hora >= 24 || hora < 6) {
    tempo = 'Madrugada';
    fundo = "url('images/noite.jpg')";
}
else if (hora >= 6 && hora < 8) {
    tempo = 'Amanhecer';
    fundo = "url('images/amanhecer.jpg')";
} else if (hora >= 8 && hora < 12) {
    tempo = 'Manhã';
    fundo = "url('images/manha.jpg')";
} else if (hora >=12 && hora < 13) {
    tempo = 'Meio-dia';
    fundo = "url('images/meiodia.jpg')";
} else if (hora >=13 && hora < 18) {
    tempo = 'Tarde';
    fundo = "url('images/tarde.jpg')";
} else if (hora >= 18 && hora < 19){
    tempo = 'Anoitecer';
    fundo = "url('images/anoitecer.jpg')";
} else if (hora >= 19 && hora < 24) {
    tempo = 'Noite';
    fundo = "url('images/noite.jpg')"
} else {
    alert('Hora inválida')
}

if (minutos < 10){
    horario.innerHTML = `${hora}:0${minutos}`;
} else {
    horario.innerHTML = `${hora}:${minutos}`;
}
periodo.innerHTML = `${tempo}`;
corpo.style.backgroundImage = fundo;
}
mudar();
window.setInterval(mudar, 1000);

