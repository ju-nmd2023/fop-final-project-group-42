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

function mazeOutline(){
    push();
    fill(0);
    strokeWeight(10);


    let leftMargin = innerWidth * 0.1;
    let rightMargin = innerWidth * 0.9;
    let topMargin = innerHeight * 0.12;
    let bottomMargin = innerHeight * 0.98;
    let centerHorizontal = (rightMargin + leftMargin) / 2;
    let centerVertical = (bottomMargin + topMargin) / 2;
    
    // Maze Outline
    line(leftMargin, topMargin, rightMargin, topMargin); //north
    line(leftMargin, topMargin, leftMargin, bottomMargin); // west
    line(rightMargin, bottomMargin, rightMargin, topMargin); //east
    line(leftMargin, bottomMargin, rightMargin, bottomMargin); //south

    // Maze Center Outline

    line(centerHorizontal + 50, centerVertical + 50, centerHorizontal + 100, centerVertical + 50); // south right
    line(centerHorizontal - 100, centerVertical + 50, centerHorizontal - 50, centerVertical + 50); // south left

    line(centerHorizontal - 100, centerVertical + 50, centerHorizontal - 100, centerVertical ); //west south
    line(centerHorizontal - 100, centerVertical - 50, centerHorizontal - 100, centerVertical -100); //west north



    line(centerHorizontal - 100, centerVertical - 100, centerHorizontal - 50, centerVertical - 100); //north left
    line(centerHorizontal + 100, centerVertical - 100, centerHorizontal + 50, centerVertical - 100); //north right

    line(centerHorizontal + 100, centerVertical + 50, centerHorizontal + 100, centerVertical); // east south
    line(centerHorizontal + 100, centerVertical - 50, centerHorizontal + 100, centerVertical -100); // east north

    //Maze Right

    line()

    pop();
}


function showGame() {
    background(255);
    mazeOutline();
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