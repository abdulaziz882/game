let input = document.querySelector('.input'),
    btn   = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box'),
    score = 0,
    gameTime = 0,
    interval = 0;
    

    
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        clearInterval(interval)
        if(result) {
            result.remove()
        }
        score = 0
        start()
    }else {
        alert('Минимум 5 секунд')
    }
})


// делегирование событий
gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})



function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createBall()
}

function decrease () {
    if(gameTime == 1) {
        timeOut.innerHTML = 0
        end()
    }else {
        timeOut.innerHTML = --gameTime
    }
}

function end () {
    gameBox.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    
    let size = 40
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = 'red'
    
    let { width, height } = gameBox.getBoundingClientRect()
    
    let leftValue = random(0, width - size)
    let topValue = random(0, height - size)
    
    ball.style.top = topValue + 'px'
    ball.style.left = leftValue + 'px'
    
    gameBox.append(ball)
}


function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}