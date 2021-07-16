playerPlay()
let score = 0


function playerPlay(){ //start the game with user click and handle the player play
    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissors = document.getElementById("scissors")
    let player = ""

    rock.addEventListener('click', ()=>{
        player = "rock"
        gameLogic(player)
    })
    paper.addEventListener('click', ()=>{
        player = "paper"
        gameLogic(player)
    })
    scissors.addEventListener('click', ()=>{
        player = "scissors"
        gameLogic(player)
    })

}

function iaPlay(){ // start ia move
    min = Math.ceil(1);
    max = Math.floor(4);
    let ia = Math.floor(Math.random() * (max - min)) + min;

    if(ia == 1){
        return "rock"
    }if (ia == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function gameLogic(player){ //logic to see who win
    let ia = iaPlay()
    let result = ""
    

    
    if ((player == "rock" && ia == "scissors") || (player == "paper" && ia == "rock") || (player == "scissors" && ia == "paper")){
        result = "YOU WIN"
        score = score + 1
    }else if(player == ia) {
        result = "DRAW"
    } else {
        result = "YOU LOST"
    }
    showDisplay(player, ia , result, score)
}

function showDisplay(player, ia, result, score){ //display who won ih html    
    let youPicked = document.getElementById("youPicked")
    let housePicked = document.getElementById("housePicked")
    let resultDisplay = document.getElementById("resultDisplay")
    let scoreNumber = document.getElementById("scoreNumber")
    scoreNumber.innerText = score.toString()

    youPicked.innerHTML = `<h1>YOU PICKED</h1><button id="${player}" class="rounded-circle p-4 m-4"><img src="./images/icon-${player}.svg" alt=""></button>`
    housePicked.innerHTML = `<h1>HOUSE PICKED</h1><button id="${ia}" class="rounded-circle p-4 m-4"><img src="./images/icon-${ia}.svg" alt=""></button>`
    resultDisplay.innerHTML = `<h2 id="result" class="">${result}</h2><button id="playAgain" class="rounded m-auto p-2">PLAY AGAIN</button>`

    showResult()
    playAgain()
}

function playAgain(){
    let playAgain = document.getElementById('playAgain')
    let selection = document.getElementById("selection")
    let endgame = document.getElementById("endGame")

    playAgain.addEventListener('click',()=>{
        endgame.classList.add("d-none")
        selection.classList.remove("d-none")
        endgame.classList.remove("d-flex")
    })
}


function showResult(){
    let selection = document.getElementById("selection")
    let endgame = document.getElementById("endGame")

    selection.classList.add("d-none")
    endgame.classList.remove("d-none")
    endgame.classList.add("d-flex")
}