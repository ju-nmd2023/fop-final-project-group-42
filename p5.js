let gameIsRunning = false;
let customFont;
let startButton;


function setup(){
    createCanvas(innerWidth, innerHeight);
    customFont = loadFont('dragonHunter.otf');
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
        text(this.text, 0, this.height / 2, this.width);
        pop();
    }
}

const buttonWidth = 200;
const buttonHeight = 60;
const buttonX = (innerWidth - buttonWidth) /2;
const myButton = new Button(buttonX, 500, 200, 60, "Start");



function keyPressed(){
    if (keyCode === 32){
        gameIsRunning = true;
    }
}
function mousePressed(){
    if (
    mouseX >= myButton.x &&
    mouseX <= myButton.x + myButton.width &&
    mouseY >= myButton.y &&
    mouseY <= myButton.y + myButton.height
    ) {
        gameIsRunning = true;
    }
}


function showGame() {
    background(255);
    push();
    pop();
}
function title() {
    fill(11, 218, 81); 
    textSize(65); 
    textAlign(CENTER);
    textFont(customFont);
    text("Maze Shadow", innerWidth/2, 300);
    text("Legends", innerWidth/2, 400);
}

function startScreen() {
    background(0);
    push();
    title();
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