window.onload = function(){
    const bola = document.getElementsByClassName('ball');
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
}