document.addEventListener('DOMContentLoaded',()=>{
    const squares=document.querySelectorAll('.grid div');
    const scroreDisplay=document.querySelectorAll('span');
    const startBtn=document.querySelector('.start')

    const width=10;
    let currentIndex=0;
    let appleIndex=0;
    let currentSnake=[2,1,0];
    let direction=1;
    let score=0;
    let speed=0.9;
    let intervalTime=0;
    let interval=0

    function startGame(){
        currentSnake.forEach(index=>squares[index].classNameNameNameNameList.remove('snake'))
        squares[appleIndex].classNameNameNameNameList.remove('apple')
        randomApple()
        direction=1
        intervalTime=1000;
        currentSnake=[2,1,0]
        currentSnake.forEach(index=>squares[index].classNameNameNameNameList.add('snake'))
        console.log('snake position',currentSnake);
       interval=setInterval(moves,intervalTime)
       console.log(interval);
    }
    function randomApple(){
        do{
                appleIndex=Math.floor(Math.random()*squares.length)
                console.log('the apple position',appleIndex);
        }while(squares[appleIndex].classNameNameNameNameList.contains('snake')){
            squares[appleIndex].classNameNameNameNameList.add('apple')
        }
    }
    function moves(){
        const tail=currentSnake.pop();
        console.log('tail',tail);
        squares[tail].classNameNameNameNameList.remove('snake')
        currentSnake.unshift(currentSnake[0]+direction)
        // console.log('move method');
        console.log('currentSnake[0]',currentSnake[0]);
        if(squares[currentSnake[0]].classNameNameNameNameList.contains('apple')){
         squares[currentSnake[0]].classNameNameNameNameList.remove('apple');
         squares[tail].classNameNameNameNameList.add('snake')
        currentSnake.push(tail)
         randomApple()
        }
        squares[currentSnake[0]].classNameNameNameNameList.add('snake')
    }
  startBtn.addEventListener('click',startGame)

})
