let gameIsRunning = true;
let customFont;
let startButton;
let playerOneAlive = true;
let playerTwoAlive = true;

function setup() {
    let canvas = createCanvas(1000,1000);
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



function keyPressed(){
    if (keyCode === 32){ //spacebar
        gameIsRunning = true;
    }
}


function grid(){
// Define the size of the grid
const gridSizeX = 202;
const gridSizeY = 202; 


// Create the grid array
let grid = [];

// Function to initialize the grid with a given value (0 or 1)
function initializeGrid(value) {
    for (let x = 0; x < gridSizeX; x++) {
        // Initialize the inner array
        grid[x] = [];
        for (let y = 0; y < gridSizeY; y++) {
            // Initialize each cell with the given value
            grid[x][y] = value;
        }
    }
    // Set line from (0, 0) to (100, 0)
    for (let x = 0; x <= 100; x++) {
        grid[x][100] = 1;
    }
    // Set line from (100, 0) to (100, 100)
    for (let y = 0; y <= 100; y++) {
        grid[100][y] = 1;
    }
  
  for (let x = 100; x >= 0; x--) {
        grid[x][0] = 1;
    }  
  
      for (let y = 100; y >= 0; y--) {
        grid[0][y] = 1;
    }
  
    for (let y = 5; y >= 0; y--) {
        grid[5][y] = 1;
    }

    for (let x = 10; x >= 5; x--) {
        grid[x][5] = 1;
    }  

    for (let x = 10; x >= 0; x--) {
        grid[x][10] = 1;
    }  

    for (let y = 5; y >= 0; y--) {
        grid[10][y] = 1;
    }

    for (let y = 25; y >= 10; y--) {
        grid[10][y] = 1;
    }

    for (let x = 10; x >= 0; x--) {
        grid[x][25] = 1;
    }  

    for (let y = 35; y >= 30; y--) {
        grid[5][y] = 1;
    }

    for (let x = 15; x >= 5; x--) {
        grid[x][30] = 1;
    }  

    for (let y = 30; y >= 20; y--) {
        grid[15][y] = 1;
    }

    for (let y = 15; y >= 5; y--) {
        grid[15][y] = 1;
    }

    for (let x = 25; x >= 15; x--) {
        grid[x][20] = 1;
    }  

    for (let x = 25; x >= 15; x--) {
        grid[x][15] = 1;
    }  

    for (let x = 30; x >= 15; x--) {
        grid[x][5] = 1;
    }  

    for (let y = 30; y >= 20; y--) {
        grid[25][y] = 1;
    }

    for (let x = 40; x >= 30; x--) {
        grid[x][20] = 1;
    }  

    for (let y = 15; y >= 5; y--) {
        grid[35][y] = 1;
    }

    for (let y = 30; y >= 25; y--) {
        grid[20][y] = 1;
    }

    for (let y = 40; y >= 35; y--) {
        grid[20][y] = 1;
    }

    for (let x = 15; x >=5; x--) {
        grid[x][35] = 1;
    }  

    for (let x = 35; x >=20; x--) {
        grid[x][35] = 1;
    }  

    for (let y = 40; y >= 35; y--) {
        grid[35][y] = 1;
    }

    for (let y = 45; y >= 40; y--) {
        grid[47][y] = 1;
    }

    for (let x = 47; x >=40; x--) {
        grid[x][40] =1;
    }  

    for (let x = 25; x >=20; x--) {
        grid[x][30] = 1;
    }  

    for (let y = 15; y >= 5; y--) {
        grid[25][y] = 1;
    }

    for (let y = 15; y >= 5; y--) {
        grid[30][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[30][y] = 1;
    }

    for (let y = 5; y >= 0; y--) {
        grid[35][y] = 1;
    }

    for (let x = 55; x >= 53; x--) {
        grid[x][45] = 1;
    }

    for (let x = 47; x >= 45; x--) {
        grid[x][45] = 1;
    }

    for (let x = 55; x >= 53; x--) {
        grid[x][55] = 1;
    }

    for (let x = 47; x >= 45; x--) {
        grid[x][55] = 1;
    }

    for (let y = 47; y >= 45; y--) {
        grid[45][y] = 1;
    }

    for (let y = 55; y >= 53; y--) {
        grid[45][y] = 1;
    }

    for (let y = 47; y >= 45; y--) {
        grid[55][y] = 1;
    }

    for (let y = 55; y >= 53; y--) {
        grid[55][y] = 1;
    }

    for (let x = 45; x >= 40; x--) {
        grid[x][53] = 1;
    }

    for (let x = 45; x >= 40; x--) {
        grid[x][47] = 1;
    }

    for (let y = 54; y >= 46; y--) {
        grid[35][y] = 1;
    }

    for (let y = 47; y >= 41; y--) {
        grid[40][y] = 1;
    }

    for (let x = 35; x >= 20; x--) {
        grid[x][45] = 1;
    }

    for (let x = 35; x >= 20; x--) {
        grid[x][40] = 1;
    }

    for (let x = 60; x >= 55; x--) {
        grid[x][47] = 1;
    }

    for (let x = 60; x >= 55; x--) {
        grid[x][53] = 1;
    }

    for (let y = 45; y >= 40; y--) {
        grid[53][y] = 1;
    }

    for (let y = 60; y >= 55; y--) {
        grid[53][y] = 1;
    }

    for (let y = 60; y >= 55; y--) {
        grid[47][y] = 1;
    }

    for (let y = 60; y >= 53; y--) {
        grid[40][y] = 1;
    }

    for (let y = 60; y >= 53; y--) {
        grid[60][y] = 1;
    }

    for (let x = 60; x >= 53; x--) {
        grid[x][60] = 1;
    }

    for (let x = 47; x >= 40; x--) {
        grid[x][60] = 1;
    }

    for (let x = 60; x >= 53; x--) {
        grid[x][40] = 1;
    }

    for (let y = 47; y >= 40; y--) {
        grid[60][y] = 1;
    }

    for (let x = 40; x >= 30; x--) {
        grid[x][30] = 1;
    }

    for (let y = 35; y >= 20; y--) {
        grid[40][y] = 1;
    }
    
    for (let x = 47; x >= 40; x--) {
        grid[x][35] = 1;
    }

    for (let x = 95; x >= 90; x--) {
        grid[x][5] = 1;
    }

    for (let y = 10; y >= 5; y--) {
        grid[95][y] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[95][y] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][95] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][90] = 1;
    }

    for (let y = 100; y >= 90; y--) {
        grid[90][y] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[5][y] = 1;
    }

    for (let x = 10; x >= 5; x--) {
        grid[x][95] = 1;
    }

    for (let y = 60; y >= 55; y--) {
        grid[35][y] = 1;
    }

    for (let x = 35; x >= 20; x--) {
        grid[x][60] = 1;
    }

    for (let y = 60; y >= 55; y--) {
        grid[20][y] = 1;
    }

    for (let y = 50; y >= 45; y--) {
        grid[20][y] = 1;
    }

    for (let x = 30; x >= 20; x--) {
        grid[x][50] = 1;
    }

    for (let x = 30; x >= 20; x--) {
        grid[x][55] = 1;
    }

    for (let y = 55; y >= 50; y--) {
        grid[30][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[45][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[47][y] = 1;
    }

    for (let x = 47; x >= 45; x--) {
        grid[x][30] = 1;
    }

    for (let x = 47; x >= 45; x--) {
        grid[x][20] = 1;
    }

    for (let y = 50; y >= 40; y--) {
        grid[10][y] = 1;
    }
    for (let y = 50; y >= 40; y--) {
        grid[5][y] = 1;
    }
    for (let x = 10; x >= 5; x--) {
        grid[x][50] = 1;
    }
    for (let x = 10; x >= 5; x--) {
        grid[x][40] = 1;
    }

    for (let y = 50; y >= 35; y--) {
        grid[15][y] = 1;
    }

    for (let y = 65; y >= 55; y--) {
        grid[15][y] = 1;
    }

    for (let y = 65; y >= 55; y--) {
        grid[10][y] = 1;
    }
    for (let y = 65; y >= 55; y--) {
        grid[5][y] = 1;
    }
    for (let x = 10; x >= 5; x--) {
        grid[x][65] = 1;
    }
    for (let x = 10; x >= 5; x--) {
        grid[x][55] = 1;
    }




    //Green
    for (let y = 4; y >= 1; y--) {
        grid[6][y] = 2;
    }
    for (let y = 4; y >= 1; y--) {
        grid[7][y] = 2;
    }
    for (let y = 4; y >= 1; y--) {
        grid[8][y] = 2;
    }
    for (let y = 4; y >= 1; y--) {
        grid[9][y] = 2;
    }


    //
    for (let y = 24; y >= 11; y--) {
        grid[1][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[2][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[3][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[4][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[5][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[6][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[7][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[8][y] = 2;
    }
    for (let y = 24; y >= 11; y--) {
        grid[9][y] = 2;
    }


    //
    for (let y = 14; y >= 6; y--) {
        grid[16][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[17][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[18][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[19][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[20][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[21][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[22][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[23][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[24][y] = 2;
    }


    //
    for (let y = 29; y >= 21; y--) {
        grid[31][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[32][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[33][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[34][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[35][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[36][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[37][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[38][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[39][y] = 2;
    }


    //
    for (let x = 34; x >= 21; x--) {
        grid[x][36] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][37] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][38] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][39] = 2;
    }


    //
    for (let x = 34; x >= 21; x--) {
        grid[x][46] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][47] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][48] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][49] = 2;
    }


    for (let y = 55; y >= 50; y--) {
        grid[31][y] = 2;
    }
    for (let y = 55; y >= 50; y--) {
        grid[32][y] = 2;
    }
    for (let y = 55; y >= 50; y--) {
        grid[33][y] = 2;
    }
    for (let y = 55; y >= 50; y--) {
        grid[34][y] = 2;
    }


    for (let x = 34; x >= 21; x--) {
        grid[x][56] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][57] = 2;
    }
    for (let x = 34; x >= 21; x--) {
        grid[x][58] = 2;
    }
        for (let x = 34; x >= 21; x--) {
        grid[x][59] = 2;
    }


    //
    for (let y = 59; y >= 54; y--) {
        grid[41][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[42][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[43][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[44][y] = 2;
    }
    for (let y = 59; y >= 56; y--) {
        grid[45][y] = 2;
    }
    for (let y = 59; y >= 56; y--) {
        grid[46][y] = 2;
    }


    //
    for (let y = 59; y >= 54; y--) {
        grid[56][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[57][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[58][y] = 2;
    }
    for (let y = 59; y >= 54; y--) {
        grid[59][y] = 2;
    }
    for (let y = 59; y >= 56; y--) {
        grid[55][y] = 2;
    }
    for (let y = 59; y >= 56; y--) {
        grid[54][y] = 2;
    }


    //
    for (let y = 46; y >= 41; y--) {
        grid[56][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[57][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[58][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[59][y] = 2;
    }
    for (let y = 44; y >= 41; y--) {
        grid[55][y] = 2;
    }
    for (let y = 44; y >= 41; y--) {
        grid[54][y] = 2;
    }


    //
    for (let y = 46; y >= 41; y--) {
        grid[41][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[42][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[43][y] = 2;
    }
    for (let y = 46; y >= 41; y--) {
        grid[44][y] = 2;
    }
    for (let y = 44; y >= 41; y--) {
        grid[45][y] = 2;
    }
    for (let y = 44; y >= 41; y--) {
        grid[46][y] = 2;
    }


    //
    for (let y = 94; y >= 91; y--) {
        grid[96][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[97][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[98][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[99][y] = 2;
    }


    //
    for (let y = 29; y >= 21; y--) {
        grid[46][y] = 2;
    }


    //
    for (let y = 49; y >= 41; y--) {
        grid[6][y] = 2;
    }
    for (let y = 49; y >= 41; y--) {
        grid[7][y] = 2;
    }
    for (let y = 49; y >= 41; y--) {
        grid[8][y] = 2;
    }
    for (let y = 49; y >= 41; y--) {
        grid[9][y] = 2;
    }


    //
    for (let y = 64; y >= 56; y--) {
        grid[6][y] = 2;
    }
    for (let y = 64; y >= 56; y--) {
        grid[7][y] = 2;
    }
    for (let y = 64; y >= 56; y--) {
        grid[8][y] = 2;
    }
    for (let y = 64; y >= 56; y--) {
        grid[9][y] = 2;
    }
}

// Initialize the grid with empty spaces (0)
initializeGrid(0);

// Function to draw the grid on the canvas
function drawGrid() {
    const cellWidth = canvas.width / gridSizeX;
    const cellHeight = canvas.height / gridSizeY;

    //noStroke();
    rect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < gridSizeX; x++) {
        for (let y = 0; y < gridSizeY; y++) {
            if (grid[x][y] === 1) {
                // Draw wall
                fill(0);
            } else if (grid[x][y] === 2) {
                // Draw with custom color
                fill(2, 100, 30);
            }else {
                // Draw empty space
                fill(255);
            }
            rect(x * cellWidth, y * cellHeight, cellWidth + 1, cellHeight + 1); //added one to overlap a bit to hide the white border around the boxes
        }
    }
}

// Initial drawing of the grid
drawGrid();
}


function showGame() {
    grid();
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

function dead(playerId) {
    if (playerId === 'healthBarOne') {
        playerOneAlive = false;
    } else if (playerId === 'healthBarTwo') {
        playerTwoAlive = false;
    }
}

//healthbar
// Function to update the health bar for a player
function updateHealthBar(playerId, health) {
    const healthBar = document.getElementById(playerId).querySelector('.health');
    const currentHealth = document.getElementById(playerId).querySelector('.currentHealth');
  
    healthBar.style.width = health + "%";
    currentHealth.textContent = "Health: " + health;
    currentHealth.style.fontSize = "1.5rem"; 
    
    // Change color based on health level
    if (health > 70) {
      healthBar.style.backgroundColor = "green";
      currentHealth.style.color = "green";
    } else if (health > 30) {
      healthBar.style.backgroundColor = "darkorange";
      currentHealth.style.color = "darkorange";
    } else {
      healthBar.style.backgroundColor = "red";
      currentHealth.style.color = "red";
    }
  }
  
  // Function to simulate damage for a player
  function takeDamage(playerId, amount) {
    if (playerId === 'healthBarOne' && !playerOneAlive) {
        return; // Player is dead, exit function
    } else if (playerId === 'healthBarTwo' && !playerTwoAlive) {
        return; // Player is dead, exit function
    }

    const healthBar = document.getElementById(playerId).querySelector('.health');
    let playerHealth = parseInt(healthBar.style.width, 10) || 100;

    playerHealth -= amount;
    if (playerHealth === 0) {
        dead(playerId); // Call dead function if player health reaches zero
    }

    updateHealthBar(playerId, playerHealth);
}


// Constructors
class Creature {
    constructor(firstName, lastName, riddle, answers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.riddle = riddle;
        this.answers = answers;
    }

    mobName() {
        return this.firstName + " " + "the" + " " + this.lastName;
    }

    mobRiddle() {
        return this.riddle;
    }

    mobAnswer() {
        return this.answers;
    }
}

//Riddles

const malvarTheMalevolentRiddle = "I suck the joy and hope from your soul, leaving only despair in my wake. What am I?";
const vorinTheVileRiddle = "I weave a web of deceit and death, lurking in the shadows of the forest. What am I?";
const mordredTheMaleficentRiddle = "I am a puppet of darkness, animated by the darkest magic. What am I?";
const sylviaTheSinisterRiddle = "I slither through the depths, my gaze bringing death to those who meet it. What am I?";
const xantharTheExileRiddle = "I am the embodiment of suppressed magic, unleashed in a torrent of destruction. What am I?";

//Answers

const malvarTheMalevolentArray = ["1. Dementor", "2. Boggart", "3. Lethifold"]; // Dementor
const vorinTheVileArray = ["1. Banshee", "2. Lycanthrope", "3. Acromantula"]; // Acromatula
const mordredTheMaleficentArray = ["1. Obscurial", "2. Inferius", "3. Poltergeist"]; // Inferius
const sylviaTheSinisterArray = ["1. Basilisk", "2. Mermish", "3. Kelpie"]; // Basilisk
const xantharTheExileArray = ["1. Horcrux", "2. Obscurus", "3. Dementor"]; // Obscurus


//Wizards

let malvarTheMalevolent = new Creature("Malvar", "Malevolent", malvarTheMalevolentRiddle, malvarTheMalevolentArray);
let vorinTheVile = new Creature("Vorin", "Vile", vorinTheVileRiddle, vorinTheVileArray);
let mordredTheMaleficent = new Creature("Mordred", "Maleficent", mordredTheMaleficentRiddle, mordredTheMaleficentArray);
let sylviaTheSinister = new Creature("Sylvia", "Sinister", sylviaTheSinisterRiddle, sylviaTheSinisterArray);
let xantharTheExile = new Creature("Xanthar", "Exile", xantharTheExileRiddle, xantharTheExileArray);


const mobName = [malvarTheMalevolent, vorinTheVile, mordredTheMaleficent, sylviaTheSinister, xantharTheExile];

const getRandomCreature = () => {
    const randomCreature = Math.floor(Math.random() * mobName.length);
    return mobName[randomCreature];
};

function promptBoxOne(randomCreature) {
    document.getElementById("nameOne").innerHTML = randomCreature.mobName();
    document.getElementById("promptOne").innerHTML = randomCreature.mobRiddle();
    document.getElementById("answerListOne").innerHTML = randomCreature.mobAnswer();

    let answerListOne = document.getElementById("answerListOne");
    answerListOne.innerHTML = "";
    
    randomCreature.mobAnswer().forEach(function(answer) {
        let li = document.createElement("li");
        li.textContent = answer;
        answerListOne.appendChild(li);
    });
}

function promptBoxTwo(randomCreature) {
    document.getElementById("nameTwo").innerHTML = randomCreature.mobName();
    document.getElementById("promptTwo").innerHTML = randomCreature.mobRiddle();
    document.getElementById("answerListTwo").innerHTML = randomCreature.mobAnswer();

    let answerListTwo = document.getElementById("answerListTwo");
    answerListTwo.innerHTML = "";
    
    randomCreature.mobAnswer().forEach(function(answer) {
        let li = document.createElement("li");
        li.textContent = answer;
        answerListTwo.appendChild(li);
    });
}

//Buttons

document.addEventListener("keydown", function(event) {
    const keyActions = {
        "1": function() {
            if (playerOneAlive) {
                console.log("1");
                takeDamage('healthBarOne', 10);
            }
        },
        "2": function() {
            if (playerOneAlive) {
                console.log("2");
            }
        },
        "3": function() {
            if (playerOneAlive) {
                const randomCreature = getRandomCreature();
                promptBoxOne(randomCreature);
            }
        },
        "8": function() {
            if (playerTwoAlive) {
                console.log("4");
                takeDamage('healthBarTwo', 10);
            }
        },
        "9": function() {
            if (playerTwoAlive) {
                console.log("5");
            }
        },
        "0": function() {
            if (playerTwoAlive) {
                const randomCreature = getRandomCreature();
                promptBoxTwo(randomCreature);
            }
        }
    };

    const action = keyActions[event.key];
    if (action) {
        action();
    }
});


function load(){
    updateHealthBar('healthBarOne', 100);
    updateHealthBar('healthBarTwo', 100);
}


window.onload = load;