
const gameTotal = document.querySelector('#total');
console.log(gameTotal);
let playTo = "";
let playingToText = document.querySelector('.playingto');

gameTotal.addEventListener('change', function(e){
    playTo = `${e.target.value}`;
    playingToText.innerText = `This Game goes to: ${playTo}`;
    //parseInt(playToH3) == "" ? playToH3 += " " +playTo : playToH3.innerText = "This Game goes to:"
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
        
        let gameEndVal = parseInt(playerOneScore.innerText)
            playerOneScore.innerText = gameEndVal+=1;
            playerOneScore.classList.add('winner');
            playerTwoScore.classList.add('loser');
            playerOneBtn.classList.add('disabled');
            playerTwoBtn.classList.add('disabled');
    } else {
        playerOneScore.innerText ==  "" ? 
            playerOneScore.innerText = 1 :
            playerOneScore.innerText = (parseInt(playerOneScore.innerText)+1);
      }
}


function playTwo(){
    console.log('triggered playTwo')

    if(parseInt(playerTwoScore.innerText) == parseInt(playTo) -1){
        
        let gameEndVal = parseInt(playerTwoScore.innerText)
            playerTwoScore.innerText = gameEndVal+=1;
            playerTwoScore.classList.add('winner');
            playerOneScore.classList.add('loser');
            playerTwoBtn.classList.add('disabled');
            playerOneBtn.classList.add('disabled');
    } else {
        playerTwoScore.innerText ==  "" ? 
            playerTwoScore.innerText = 1 :
            playerTwoScore.innerText = (parseInt(playerTwoScore.innerText)+1);
      }
}

function resetIt(){
    console.log('Reset Button trigger');
    playTo= "";
    gameTotal.value="";
    playerOneScore.innerText = "";
    playerTwoScore.innerText = "";
    playerOneScore.classList.remove('winner','loser')
    playerTwoScore.classList.remove('winner','loser')
    playerOneBtn.classList.remove('disabled');
    playerTwoBtn.classList.remove('disabled');
    playingToText.innerText = `This Game goes to:`;
}
