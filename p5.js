let gameIsRunning = true;
let customFont;
let startButton;



function setup(){
    let canvas = createCanvas(innerWidth, innerHeight);
    canvas.style('cursor', 'auto');
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
        text(this.text, 0, this.height-20, this.width);
        pop();
    }
}

const buttonWidth = 200;
const buttonHeight = 60;
const buttonX = (innerWidth - buttonWidth) /2;
const myButton = new Button(buttonX, 500, 200, 60, "Start");

function mouseMoved() {
    if (
        mouseX >= myButton.x &&
        mouseX <= myButton.x + myButton.width &&
        mouseY >= myButton.y &&
        mouseY <= myButton.y + myButton.height
    ) {
        cursor('pointer');
    } else {
        cursor('auto');
    }
}

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

function maze(){
    push();
    fill(0);
    strokeWeight(10);
    //Maze Outline
    line(300, 150, 1600, 150); //north
    line(300, 150, 300, 1050); // west
    line(1600, 1050, 1600, 150); //east
    line(300, 1050, 1600, 1050); //south

    //Maze Center Outline
    line(875, 675, 925, 675); // south right
    line(975, 675, 1025, 675); // south left

    line(875, 675, 875, 625); //west south
    line(875, 525, 875, 575); //west north

    line(875, 525, 925, 525); //north left
    line(1025, 525, 975, 525); //north right

    line(1025, 675, 1025, 625); // east south
    line(1025, 525, 1025, 575); // east north
    pop();
}

function showGame() {
    background(255);
    maze();
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