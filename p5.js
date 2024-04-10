let gameIsRunning = true;
let customFont;
let startButton;

function setup() {
    let canvas = createCanvas(900, 900);
    canvas.parent('canvasContainer');
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
    strokeWeight(8);

    let gridSize = 700; // Adjust this value to change the size of the grid
    let gridCenterX = (width / 2) + 50;
    let gridCenterY = 540;

    let leftMargin = gridCenterX - gridSize / 2;
    let rightMargin = gridCenterX + gridSize / 2;
    let topMargin = gridCenterY - gridSize / 2;
    let bottomMargin = gridCenterY + gridSize / 2;
    
    // Maze Outline
    line(leftMargin, topMargin, rightMargin, topMargin); //north
    line(leftMargin, topMargin, leftMargin, bottomMargin); // west
    line(rightMargin, bottomMargin, rightMargin, topMargin); //east
    line(leftMargin, bottomMargin, rightMargin, bottomMargin); //south

    // Maze Center Outline
    let centerHorizontal = gridCenterX;
    let centerVertical = gridCenterY;

    line(centerHorizontal + 25, centerVertical + 25, centerHorizontal + 50, centerVertical + 25); // south right
    line(centerHorizontal - 50, centerVertical + 25, centerHorizontal - 25, centerVertical + 25); // south left

    line(centerHorizontal - 50, centerVertical + 25, centerHorizontal - 50, centerVertical ); //west south
    line(centerHorizontal - 50, centerVertical - 30, centerHorizontal - 50, centerVertical - 50); //west north

    line(centerHorizontal - 50, centerVertical - 50, centerHorizontal - 25, centerVertical - 50); //north left
    line(centerHorizontal + 50, centerVertical - 50, centerHorizontal + 25, centerVertical - 50); //north right

    line(centerHorizontal + 50, centerVertical + 25, centerHorizontal + 50, centerVertical); // east south
    line(centerHorizontal + 50, centerVertical - 25, centerHorizontal + 50, centerVertical - 50); // east north

    //Maze
    line(centerHorizontal -25, centerVertical + 25, centerHorizontal -25, 700);
    line(centerHorizontal + 25, centerVertical + 25, centerHorizontal + 25, 650);
    line(centerHorizontal -25, 700, centerHorizontal + 100, 700);
    line(centerHorizontal +25, 650, centerHorizontal + 150, 650);
    line(centerHorizontal + 100, 700, centerHorizontal + 100, 800);
    line(centerHorizontal + 100, 800, centerHorizontal - 100, 800);
    line(centerHorizontal + 150, 650, centerHorizontal + 150, 800);
    line(centerHorizontal + 150, 800, centerHorizontal + 300, 800);
    line(centerHorizontal + 350, 850, centerHorizontal - 150, 850);
    line(centerHorizontal - 100, 800, centerHorizontal -100, centerVertical);
    line(centerHorizontal - 150, 850, centerHorizontal -150, 700);
    line(centerHorizontal -150, 700, centerHorizontal -200, 700);
    line(centerHorizontal -200, 700, centerHorizontal-200, 850);
    line(centerHorizontal -200, 850, centerHorizontal - 350, 850);
    line(centerHorizontal -50, centerVertical, centerHorizontal -100, centerVertical);
    line(centerHorizontal -50, centerVertical -25 ,centerHorizontal -100, centerVertical - 25);
    line(centerHorizontal -100, centerVertical -25, centerHorizontal -100, 400);
    line(centerHorizontal -350, 800, centerHorizontal -250, 800);
    line(centerHorizontal -250, 800, centerHorizontal -250, 600);
    line(centerHorizontal- 250, 600, centerHorizontal -350, 600);
    line(centerHorizontal - 200, 650, centerHorizontal -150, 650);
    line(centerHorizontal - 150, 650, centerHorizontal-150, centerVertical - 100);
    line(centerHorizontal -200, 650, centerHorizontal-200, centerVertical -100);
    line(centerHorizontal -350, centerVertical, centerHorizontal-250, centerVertical);
    line(centerHorizontal-250, centerVertical, centerHorizontal -250, 400);
    line(centerHorizontal -150, centerVertical -100, centerHorizontal -200, centerVertical -100);
    line(centerHorizontal -250, 400, centerHorizontal - 150, 400);
    line(centerHorizontal - 150, 400, centerHorizontal- 150, 300);
    line(centerHorizontal -100, 400, centerHorizontal - 25, 400);
    line(centerHorizontal -25, 400, centerHorizontal -25, centerVertical -50);
    line(centerHorizontal +25, 400, centerHorizontal +25, centerVertical -50);
    line(centerHorizontal +25, 400, centerHorizontal + 100, 400);
    line(centerHorizontal + 100, 400, centerHorizontal +100, 350);
    line(centerHorizontal + 100, 350, centerHorizontal - 100, 350);
    line(centerHorizontal -150, 300, centerHorizontal -350, 300);
    line(centerHorizontal -100, 300, centerHorizontal +150, 300);
    line(centerHorizontal +150, 300, centerHorizontal +150, 400);
    line(centerHorizontal +100, 450, centerHorizontal +300, 450);
    line(centerHorizontal +350, 250, centerHorizontal -100, 250);
    line(centerHorizontal -100, 250, centerHorizontal -100, 300);
    line(centerHorizontal + 200, 300, centerHorizontal + 350, 300);
    line(centerHorizontal +200, 300, centerHorizontal +200, 400);
    line(centerHorizontal +200, 400, centerHorizontal +350, 400);
    line(centerHorizontal +300, 450, centerHorizontal +300, 700);
    line(centerHorizontal +300, 700, centerHorizontal +200, 700);
    line(centerHorizontal +300, 800, centerHorizontal +300, 750);
    line(centerHorizontal +300, 750, centerHorizontal +150, 750);
    line(centerHorizontal+ 200, 700, centerHorizontal +200, centerVertical -25);
    line(centerHorizontal +150, centerVertical, centerHorizontal +150, 650);
    line(centerHorizontal +150, centerVertical, centerHorizontal +50, centerVertical);
    line(centerHorizontal +50, centerVertical -25, centerHorizontal +200, centerVertical -25 );
 
    //riddle lines
    line(centerHorizontal -25, 400, centerHorizontal +50, 400);     //north
    line(centerHorizontal +25, 600, centerHorizontal -25, 600);     //south
    line(centerHorizontal + 150, centerVertical +50, centerHorizontal + 200, centerVertical +50);    // west
    line(centerHorizontal -100, centerVertical -50, centerHorizontal -150, centerVertical -50);     //east 1
    line(centerHorizontal -100 , 570, centerHorizontal -150, 570); //east 2

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


//Testing buttons, will remove later

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("button4").addEventListener("click", function() {
    console.log("4");
});
document.getElementById("button5").addEventListener("click", function() {
    console.log("5");
});
document.getElementById("button6").addEventListener("click", function() {
    console.log("6");
});
document.getElementById("button1").addEventListener("click", function() {
    console.log("1");
});
document.getElementById("button2").addEventListener("click", function() {
    console.log("2");
});
document.getElementById("button3").addEventListener("click", function() {
    console.log("3");
});
});