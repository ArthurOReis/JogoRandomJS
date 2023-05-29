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

    if (randominputInt < 0 || randominputInt > 100){
        texto.innerHTML = `Insira um valor entre 1 e 100`;
    }

    if(isNaN(randominputInt)){
        texto.innerHTML = `Insira um valor numérico válido`;
    }

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