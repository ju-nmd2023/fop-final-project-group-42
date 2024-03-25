let width = 800;
let heigth = 800;

function setup(){
    createCanvas(800, 800);
    background(255, 0, 0);
}

function startScreen(){
    background(255, 255, 255);
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

function draw (){
    startScreen();
}