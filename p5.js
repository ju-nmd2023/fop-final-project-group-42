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
    strokeWeight(4);

    let gridSize =500;
    let gridCenterX = width/2;
    let gridCenterY = 500;
    
    let grid = [];
    for (let i = 0; i < gridSize; i += 50) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j += 50) {
        grid[i][j] = 0; 
      }
    }
    
    
    grid[100][300] = 1; 
    grid[150][300] = 1;
    grid[200][300] = 1;
    grid[250][300] = 1;
    grid[300][300] = 1;
    grid[350][300] = 1;
    grid[400][300] = 1;
    grid[450][300] = 1;
    grid[500][300] = 1;
    grid[550][300] = 1;
    grid[600][300] = 1;
    grid[650][300] = 1;
    grid[700][300] = 1;
    
    grid[100][350] = 1;
    grid[150][350] = 1;
    grid[200][350] = 1;
    grid[250][350] = 1;
    grid[300][350] = 1;
    grid[350][350] = 1;
    grid[400][350] = 1;
    grid[450][350] = 1;
    grid[500][350] = 1;
    grid[550][350] = 1;
    grid[600][350] = 1;
    grid[650][350] = 1;
    grid[700][350] = 1;
    
    grid[100][400] = 1;
    grid[150][400] = 1;
    grid[200][400] = 1;
    grid[250][400] = 1;
    grid[300][400] = 1;
    grid[350][400] = 1;
    grid[400][400] = 1;
    grid[450][400] = 1;
    grid[500][400] = 1;
    grid[550][400] = 1;
    grid[600][400] = 1;
    grid[650][400] = 1;
    grid[700][400] = 1;
    
    for (let i = 0; i < gridSize; i += 50) {
        for (let j = 0; j < gridSize; j += 50) {
            if (grid[i][j] === 1) {
                if (i < gridSize - 50 && grid[i + 50][j] === 1) {
                    line(i + gridCenterX - gridSize / 2, j + gridCenterY - gridSize / 2, 
                         i + 50 + gridCenterX - gridSize / 2, j + gridCenterY - gridSize / 2);
                }
                if (j < gridSize - 50 && grid[i][j + 50] === 1) {
                    line(i + 50 + gridCenterX - gridSize / 2, j + gridCenterY - gridSize / 2, 
                         i + 50 + gridCenterX - gridSize / 2, j + 50 + gridCenterY - gridSize / 2);
                }
            }
        }
    }
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

//healthbar
// Function to update the health bar for a player
function updateHealthBar(playerId, health) {
    const healthBar = document.getElementById(playerId).querySelector('.health');
    healthBar.style.width = health + "%";
    
    // Change color based on health level
    if (health > 70) {
      healthBar.style.backgroundColor = "green";
    } else if (health > 30) {
      healthBar.style.backgroundColor = "orange";
    } else {
      healthBar.style.backgroundColor = "red";
    }
  }
  
  // Function to simulate damage for a player
  function takeDamage(playerId, amount) {
    const healthBar = document.getElementById(playerId).querySelector('.health');
    let playerHealth = parseInt(healthBar.style.width, 10) || 100;
    
    playerHealth -= amount;
    if (playerHealth < 0) {
      playerHealth = 0;
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
            console.log("1");
            takeDamage('healthBarOne', 10);
        },
        "2": function() {
            console.log("2");
        },
        "3": function() {
            const randomCreature = getRandomCreature();
            promptBoxOne(randomCreature);
        },
        "8": function() {
            console.log("4");
            takeDamage('healthBarTwo', 10);
        },
        "9": function() {
            console.log("5");
        },
        "0": function() {
            const randomCreature = getRandomCreature();
            promptBoxTwo(randomCreature);
        }
    };

    const action = keyActions[event.key];
    if (action) {
        action();
    }
});


window.onload = buttons;

