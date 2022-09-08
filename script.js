window.onload = function(){
    const bola = document.getElementsByClassName('ball');
    const btn = document.querySelector('#reset-game');
    const rgb = document.querySelector('#rgb-color');
    const  paragrafo = document.querySelector('#answer');

    function randoColor(){
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() *101);
        
        return `rgb(${red}, ${green}, ${blue})`;
        }

        function backgroundBall() {
            for (let index = 0; index <bola.length; index += 1) {
                bola[index].style.backgroundColor = randoColor();
            }
        }
        
        backgroundBall();
        
        function randomElementClassBall() {
            const element = bola[Math.floor(Math.random() * bola.length)]
            const elementColor = [];
            elementColor.push(element.style.backgroundColor);
          
            return elementColor;
}
            rgb.innerText = randomElementClassBall();
            paragrafo.innerText = 'Escolha uma cor';

        function ifColorEqual(event) {
            if (event.target.style.backgroundColor == rgb.innerText) {
                paragrafo.innerText = 'Acertou!';
            } else {
                paragrafo.innerText = 'Errou! Tente novamente!';
            }
        }

        for(let index = 0; index < bola.length;index+=1){
            bola[index].addEventListener('click', ifColorEqual);
        }
        
        function resetGame() {
            pAnswer.innerText = 'Escolha uma cor';
            backgroundBall();
            rgb.innerText = randomElementClassBall();
          }
          
          buttonResetGame.addEventListener('click', resetGame);
}