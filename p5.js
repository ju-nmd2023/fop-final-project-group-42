let gameIsRunning = false;
let startButton;

function setup(){
    createCanvas(innerWidth, innerHeight);
}

class Button {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }

    draw (){
        push();
        translate(this.x, this.y);
        stroke("4d4d4d");
        strokeWeight(4);
        fill("#cccccc");
        rect(0, 0, this.width, this.height, this.height / 2);

        noStroke();
        fill("#4d4d4d");
        textSize(this.height / 2);
        textAlign(CENTER);
        text(this.text, 0, this.height / 4, this.width);
        pop();
    }
}

const myButton = new Button(innerWidth/2, 500, 200, 60, "Start game");



function keyPressed(){
    if (keyCode === 32){
        gameIsRunning = true;
    }
}


function showGame() {
    background(255);
    push();
    pop();
}

function startScreen() {
    background(0);
    push();
    fill(11, 218, 81); 
    textSize(65); 
    textAlign(CENTER);
    text("Maze Shadow", innerWidth/2, 300);
    text("Legends", innerWidth/2, 400);
    myButton.draw();

    pop();
}


function draw (){
    if (gameIsRunning === true) {
        showGame();
    } else if (gameIsRunning === false) {
        startScreen();
    }
}