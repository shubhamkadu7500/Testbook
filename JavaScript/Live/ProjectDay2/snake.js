document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scroreDisplay = document.querySelectorAll('span');
    const startBtn = document.querySelector('.start')

    const width = 10;
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2, 1, 0];
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0

    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        randomApple()
        direction = 1
        intervalTime = 1000;
        currentSnake = [2, 1, 0]
        currentIndex=0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        console.log('snake position', currentSnake);
        interval = setInterval(moves, intervalTime)
        console.log(interval);
    }
    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
            console.log('the apple position', appleIndex);
        } while (squares[appleIndex].classList.contains('snake')) {
            squares[appleIndex].classList.add('apple')
        }
    }
    function moves() {

        if(
             (currentSnake[0] + width >= (width * width) && direction === width) ||
            (currentSnake[0] - width < 0 && direction === -width) ||
            (currentSnake[0] % width === 0 && direction === -1) ||
            (currentSnake[0] % width === width-1 && direction === 1) ||
           squares[currentSnake[0]+direction].classList.contains('snake')
           )
        {
            const position = currentSnake[0];
            alert('Game Over')
            console.log('currentsanek head', position);
            return clearInterval(interval)
        }
        const tail = currentSnake.pop();
        // console.log('tail',tail);
        squares[tail].classList.remove('snake')
        currentSnake.unshift(currentSnake[0] + direction)
        // console.log('move method');
        console.log('currentSnake[0]', currentSnake[0]);
        // console.log('currentSnake[1]',currentSnake[1]);

        if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            clearInterval(interval)
            intervalTime=intervalTime*speed;
            interval=setInterval(moves,intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
    }

    function control(e){
        console.log('key is',e.keyCode);
        if(e.keyCode===40){
            direction= +width
        }
        else if(e.keyCode===38){
            direction= -width
        }

        else if(e.keyCode===37){
            direction=-1
        }
        else if(e.keyCode===39){
            direction=1
        }
    }

    document.addEventListener('keyup',control)
    startBtn.addEventListener('click', startGame)
})