//REFACTORING

const player1 = {
    name:'Player One',
    score: 0,
    button: document.querySelector('#player1Button'),
     display:document.querySelector('#player1Display'),
}

const player2 = {
    name:'Player Two',
    score: 0,
    button: document.querySelector('#player2Button'),
     display:document.querySelector('#player2Display'),
}


const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playto');   //this would indicate the number you want to play to instead of hardcoding the winning score.
const winMsg = document.querySelector('#winMsg');
let winningScore = 3;
let isGameOver = false;



function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++
        if ( player.score === winningScore) {
            isGameOver = true;
            winMsg.innerText = `${player.name} WINS!!`;
            player.display.classList = 'has-text-success';
            opponent.display.classList = 'has-text-danger';
            player.button.disabled = true;//disable button when there is game over
            opponent.button.disabled = true;
        }
          player.display.textContent = player.score; 
    }
}


player1.button.addEventListener('click', function () {
    updateScores(player1, player2);

})


player2.button.addEventListener('click', function () {
    updateScores(player2,player1)
   
    });
 

playToSelect.addEventListener('change', function(){
    winningScore= parseInt(this.value);
    reset();
})


resetButton.addEventListener('click',reset)


    function reset() {
        isGameOver = false;
        for (let player of [player1, player2]) {
            player.score = 0;
            player.display.textContent = 0;
            player.display.classList.remove('has-text-success', 'has-text-danger');
            player.button.disabled = false;     //when the reset button is clicked reset the p1 and p2 button. 
         winMsg.textContent = '';
        }
       
    }

    