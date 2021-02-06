/* ------- Configuração do Jogo --------- */
const urlParams = new URLSearchParams(location.search)
var virus = []
var life = 3
var time = 61

//Tamanho da tela
const config = {
    height: window.innerHeight,
    width: window.innerWidth,
    difficulty: parseInt(urlParams.get('difficulty')),
    virusTime: 0
}

switch (config.difficulty){
    case 0:
        config.virusTime = 3000
        break
    case 1:
        config.virusTime = 1500
        break
    case 2:
        config.virusTime = 1000
        break
}

function customizeDisplay(){
    config.height = window.innerHeight
    config.width = window.innerWidth
    console.log(config)
}

function renderEnemies(){
    //Verificar existênia de inimigos
    removeVirus()

    //Gerando posição
    let posX = Math.round(Math.random() * config.width) - 90
    let posY = Math.round(Math.random() * config.height) - 90
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    //Gerando inimigo
    var enemyEl = document.createElement('img')
    enemyEl.src = './img/mosca.png'
    enemyEl.classList.add("enemy")
    enemyEl.classList.add("animate-diagonal")
    enemyEl.classList.add("virus")
    enemyEl.setAttribute('onclick', 'killVirus(event)')

    //Definindo posição
    enemyEl.style.left = posX + 'px'
    enemyEl.style.top = posY + 'px'

    //Definindo tamanho
    let tam = Math.round(Math.random() * 60) + 30
    console.log(tam)
    enemyEl.style.width = tam + 'px'
    enemyEl.style.height = tam + 'px'

    //Renderizando na tela
    document.querySelector('body').appendChild(enemyEl)
    virus.push(enemyEl)
    console.log(virus)
}

/* ------- Funcionanlidades do Jogo -------- */
function killVirus(event){
    virus.splice(virus.indexOf(event.currentTarget), 1)
    event.currentTarget.remove()
}

function removeVirus(){
    switch (config.difficulty){
        case 0:
            if(virus.length >= 5){
                //Retirar vida do jogador
                console.log('O coronga está mais perto de você!')

                //Reiniciar tela
                document.querySelector('body').classList.add('damage')
                setTimeout(document.querySelector('body').classList.remove('damage'), 1000)
                virus = []
                document.querySelectorAll('img.virus').forEach(item => item.remove())
                damageEvent()        
            }
            break
        case 1:
            if(virus.length >= 3){
                //Retirar vida do jogador
                console.log('O coronga está mais perto de você!')

                //Reiniciar tela
                document.querySelector('body').classList.add('damage')
                setTimeout(document.querySelector('body').classList.remove('damage'), 1000)
                virus = []
                document.querySelectorAll('img.virus').forEach(item => item.remove())
                damageEvent()    
            }
            break
        case 2:
            if(virus.length >= 2){
                //Retirar vida do jogador
                console.log('O coronga está mais perto de você!')

                //Reiniciar tela
                document.querySelector('body').classList.add('damage')
                setTimeout(function(){
                    document.querySelector('body').classList.remove('damage')
                }, 100)
                virus = []
                document.querySelectorAll('img.virus').forEach(item => item.remove())
                damageEvent()
            }
            break
    }
}

function damageEvent(){
    //Retirando vida
    life -= 1

    //Modificando imagem
    let lifePoints = document.querySelectorAll('img.lifePoint')
    lifePoints[life].src = './img/coracao_vazio.png'

    //Verificar condição de game over
    if(life == 0){
        window.location.href = 'gameover.html'
    }
}

function winCondition(){
    if(time <= 0 && life > 0){
        window.location.href = 'win.html'
    }
}

//Inicialização do Jogo
setInterval(function(){
    time -= 1
    document.querySelector('#time').innerHTML = time

    winCondition()
}, 1000)

setInterval(renderEnemies, config.virusTime)

console.log(config)