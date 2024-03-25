let width = 800;
let heigth = 800;
let gameIsRunning = false;

function setup(){
    createCanvas(800, 800);
}

function startScreen(){
    background(0);
    push();
    fill(11, 218, 81); 
    textSize(60); 
    textAlign(CENTER);
    text("Start", width/2, 600);

    textSize(100); 
    textAlign(CENTER);
    text("Name", width/2, heigth/3);
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