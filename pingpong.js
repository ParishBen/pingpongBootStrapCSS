
const gameTotal = document.querySelector('#total');
console.log(gameTotal);
let playTo = "";

gameTotal.addEventListener('change', function(e){
    console.log("CHANNNNNGED!")
    playTo = `${e.target.value}`;
    console.log('playTo val '+playTo);
})

const playerOneScore = document.querySelector('.player1');
const playerTwoScore = document.querySelector('.player2');
const playerOneBtn= document.querySelector('#player1btn');
const playerTwoBtn = document.querySelector('#player2btn');
const resetter = document.querySelector("#reset");

playerOneBtn.addEventListener('click', playOne);
playerTwoBtn.addEventListener('click',playTwo);
resetter.addEventListener('click',resetIt);

console.log('PlayTo '+playTo);


function playOne(){
    console.log('triggered playOne')
    if(parseInt(playerOneScore.innerText) == parseInt(playTo) -1){
        console.log('about to have a winner...')
        let gameEndVal = parseInt(playerOneScore.innerText)
        playerOneScore.innerText = gameEndVal+=1;
        playerOneScore.classList.add('winner');
        playerTwoScore.classList.add('loser');
        playerOneBtn.classList.add('disabled');
        playerTwoBtn.classList.add('disabled');
    } else {
        if(playerOneScore.innerText ==  "" ){
            console.log('nothing yet playerOne');
            playerOneScore.innerText = 1; 
    }
      else if(playerOneScore.innerText !==  ""){
          let newVal = parseInt(playerOneScore.innerText);
          playerOneScore.innerText = (newVal+1);
          console.log('player1 has a score '+playerOneScore.innerText)
      }
    }
}

function playTwo(){
    console.log('triggered playTwo')

    if(parseInt(playerTwoScore.innerText) == parseInt(playTo) -1){
        console.log('about to have a winner...')
        let gameEndVal = parseInt(playerTwoScore.innerText)
        playerTwoScore.innerText = gameEndVal+=1;
        playerTwoScore.classList.add('winner');
        playerOneScore.classList.add('loser');
        playerTwoBtn.classList.add('disabled');
        playerOneBtn.classList.add('disabled');
    } else {
        if(playerTwoScore.innerText ==  "" ){
            console.log('nothing yet playerTwo');
            playerTwoScore.innerText = 1; 
    }
      else if(playerTwoScore.innerText !==  ""){
          let newVal = parseInt(playerTwoScore.innerText);
          playerTwoScore.innerText = (newVal+1);
          console.log('player2 has a score '+playerTwoScore.innerText)
      }
    }
}

function resetIt(){
    console.log('trigggged RESETttt!!!');
    playTo= "";
    gameTotal.value="";
    playerOneScore.innerText = "";
    playerTwoScore.innerText = "";
    playerOneBtn.classList.remove('winner','loser')
    playerTwoBtn.classList.remove('winner','loser')
    playerOneBtn.classList.remove('disabled');
    playerTwoBtn.classList.remove('disabled');
}
