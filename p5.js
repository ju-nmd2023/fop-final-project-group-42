let gameIsRunning = false;


function setup(){
    createCanvas(innerWidth, innerHeight);
}

function keyPressed(){
    if (keyCode === 32){
        gameIsRunning = true;
    }
}

function startScreen(){
    background(0);
    push();
    fill(11, 218, 81); 
    textSize(65); 
    textAlign(CENTER);
    text("Maze Shadow Legends", width/2, 300);

    textSize(65); 
    textAlign(CENTER);
    text("Start", width/2, 600);
    pop();
}


function showGame() {
    background(255);
}

function draw (){
    if (gameIsRunning === false) {
        startScreen();
    } else if (gameIsRunning === true) {
        showGame();
    }
}