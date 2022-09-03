const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");

let player = "X";
let gameOver = false;
let refresh = false;
let winner;

function startGame() {
    playerText.textContent= `${player}'s Turn!`;

    blocks.forEach(block => block.addEventListener("click", ()=> chooseArea(block)));
}

function chooseArea(block){
    if(block.textContent === ""){
        block.textContent = player;
        turnPlayer();
    }else {
        window.alert("Hey! It's not empty");
        block.style.border = "3px solid red";
        setTimeout(()=>{
            block.style.border = "2px solid black"
        }, 1500)
    }
    
    checkWin();
    checkTie();

    if(gameOver){
        playerText.textContent = `Congratulations,  ${winner} Won!`;
        playerText.style.color = "green";
        blocks.forEach(block => block.style.pointerEvents = 'none');
        
    }

    if(refresh){
        var btn = document.createElement("button");
        btn.innerHTML = "New Game";
        document.body.appendChild(btn);
        btn.style.color = "green";
        btn.style.margin = "10px";
        btn.style.padding = "10px";
        btn.addEventListener("click", () => window.location.reload());
    }


    
}

function turnPlayer(){
    if(player === "X"){
        player = "O";
        playerText.textContent = `${player}'s Turn!`;
        playerText.style.color = "darkred";
        return;
    }

    else if(player === "O"){
        player = "X";
        playerText.textContent = `${player}'s Turn!`;
        playerText.style.color = "blue";
    }
}

function checkWin(){
   checkRows();
   checkColumns();
   checkDiagonals();
}

function checkTie(){
    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie !";
        refresh = true;
    }
}

function checkRows(){
   let row1 = blocks[0].textContent == blocks[1].textContent && blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== "";
   let row2 = blocks[3].textContent == blocks[4].textContent && blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== "";
   let row3 = blocks[6].textContent == blocks[7].textContent && blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== "";

   if(row1 || row2 || row3) {
      gameOver = true;
      refresh = true;
   }

   if(row1) return winner = blocks[0].textContent;
   if(row2) return winner = blocks[3].textContent;
   if(row3) return winner = blocks[6].textContent;
}

function checkColumns(){
    let col1 = blocks[0].textContent == blocks[3].textContent && blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== "";
    let col2 = blocks[1].textContent == blocks[4].textContent && blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== "";
    let col3 = blocks[2].textContent == blocks[5].textContent && blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== "";
 
    if(col1 || col2 || col3) {
       gameOver = true;
       refresh=true;
    }
 
    if(col1) return winner = blocks[0].textContent;
    if(col2) return winner = blocks[1].textContent;
    if(col3) return winner = blocks[2].textContent;
 }


function checkDiagonals(){
    let dia1 = blocks[0].textContent == blocks[4].textContent && blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== "";
    let dia2 = blocks[2].textContent == blocks[4].textContent && blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== "";
 
    if(dia1 || dia2) {
       gameOver = true;
       refresh = true;
       winner = blocks[0].textContent;

    }
 
   
    
 }

function restart(){
    location.reload();
    document.querySelectorAll('.blocks').values ="";
}

startGame();