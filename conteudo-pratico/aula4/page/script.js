const botao = document.getElementById('button');
const titulo = document.getElementById('title');


botao.addEventListener('click', ()=> {
    titulo.textContent = 'JavaScript!'
    titulo.style.color = 'yellow'
});