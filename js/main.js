const botao = document.getElementById('botao')
const texto = document.getElementById('texto')
const input = document.getElementById('input');
const numRandom = Math.round(Math.random() * 100);
console.log(numRandom); 

botao.addEventListener('click', (evento) =>{
    evento.preventDefault();
    random()
})

function random(){
    randominputInt = parseInt(input.value)
    if (input.value < numRandom){
        texto.innerHTML = "O numero é maior";
    } else if (input.value > numRandom){
        texto.innerHTML = "O numero é menor";
    }

    if (randominputInt === numRandom){
        texto.innerHTML = `Parabéns! você acertou, o valor era ${numRandom}!`;
        console.log(typeof(input.value));
    }
}