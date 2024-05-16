let gameIsRunning = true;
let playerOneAlive = true;
let playerTwoAlive = true;

const gridSizeX = 202;
const gridSizeY = 202;


let grid = [];
let creatures = [];
let players = [];
let hearts = [];
let playerOneCorrect = [];
let playerTwoCorrect = [];
let playerOneHeart = [];
let playerTwoHeart = [];

function setup() {
    let canvas = createCanvas(1000,1000);
    canvas.parent('canvasContainer');
}

class Player {
    constructor(x, y, hp, id) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.id = id;
    }
}

// Create two individual players
let player1 = new Player(7, 27, 100, 1);
let player2 = new Player(10, 27, 100, 2);

players.push(new Player(7, 27, 100, 1));
players.push(new Player(10, 27, 100, 2));

class Trophy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let trophy = new Trophy(50, 50);

class Heart {
    constructor(x,y,hp,id) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.id = id;
    }
}

let heart1 = new Heart(27, 52, 10, 1);
let heart2 = new Heart(62, 22, 10, 2);
let heart3 = new Heart(22, 27, 10, 3);
let heart4 = new Heart(44, 82, 10, 4);
let heart5 = new Heart(77, 82, 10, 5);
let heart6 = new Heart(77, 55, 10, 6);
let heart7 = new Heart(7, 37, 10, 7);

hearts.push(new Heart(27, 52, 10, 1));
hearts.push(new Heart(62, 22, 10, 2));
hearts.push(new Heart(22, 27, 10, 3));
hearts.push(new Heart(44, 82, 10, 4));
hearts.push(new Heart(77, 82, 10, 5));
hearts.push(new Heart(77, 55, 10, 6));
hearts.push(new Heart(7, 37, 10, 7));


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

    for (let y = 30; y >= 15; y--) {
        grid[90][y] = 1;
    }
    for (let y = 30; y >= 15; y--) {
        grid[95][y] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][15] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][30] = 1;
    }

    for (let x = 95; x >= 90; x--) {
        grid[x][10] = 1;
    }

    for (let y = 10; y >= 5; y--) {
        grid[90][y] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][5] = 1;
    }

    for (let y = 10; y >= 5; y--) {
        grid[85][y] = 1;
    }

    for (let y = 20; y >= 15; y--) {
        grid[85][y] = 1;
    }

    for (let y = 30; y >= 25; y--) {
        grid[85][y] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][10] = 1;
    }

    for (let y = 10; y >= 5; y--) {
        grid[75][y] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][15] = 1;
    }

    for (let x = 85; x >= 80; x--) {
        grid[x][25] = 1;
    }

    for (let y = 25; y >= 20; y--) {
        grid[80][y] = 1;
    }

    for (let x = 80; x >= 75; x--) {
        grid[x][20] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][30] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[75][y] = 1;
    }

    for (let x = 90; x >= 75; x--) {
        grid[x][90] = 1;
    }

    for (let y = 100; y >= 90; y--) {
        grid[75][y] = 1;
    }

    for (let x = 70; x >= 60; x--) {
        grid[x][95] = 1;
    }

    for (let x = 90; x >= 75; x--) {
        grid[x][85] = 1;
    }

    for (let y = 85; y >= 70; y--) {
        grid[95][y] = 1;
    }

    for (let y = 80; y >= 70; y--) {
        grid[90][y] = 1;
    }

    for (let x = 90; x >= 75; x--) {
        grid[x][70] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][80] = 1;
    }

    for (let y = 85; y >= 75; y--) {
        grid[75][y] = 1;
    }

    for (let x = 85; x >= 75; x--) {
        grid[x][75] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[85][y] = 1;
    }

    for (let x = 70; x >= 60; x--) {
        grid[x][90] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[70][y] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[60][y] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][70] = 1;
    }
    for (let y = 70; y >= 65; y--) {
        grid[70][y] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[75][y] = 1;
    }
    for (let y = 70; y >= 65; y--) {
        grid[90][y] = 1;
    }

    for (let x = 90; x >= 75; x--) {
        grid[x][65] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][47] = 1;
    }

    for (let x = 100; x >= 95; x--) {
        grid[x][53] = 1;
    }

    for (let y = 53; y >= 47; y--) {
        grid[95][y] = 1;
    }

    for (let y = 42; y >= 35; y--) {
        grid[95][y] = 1;
    }

    for (let y = 65; y >= 58; y--) {
        grid[95][y] = 1;
    }

    for (let y = 42; y >= 35; y--) {
        grid[90][y] = 1;
    }

    for (let x = 95; x >= 90; x--) {
        grid[x][42] = 1;
    }

    for (let x = 95; x >= 90; x--) {
        grid[x][35] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][60] = 1;
    }

    for (let y = 75; y >= 65; y--) {
        grid[60][y] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[65][y] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][65] = 1;
    }

    for (let x = 60; x >= 53; x--) {
        grid[x][65] = 1;
    }

    for (let x = 53; x >= 47; x--) {
        grid[x][70] = 1;
    }

    for (let x = 47; x >= 40; x--) {
        grid[x][65] = 1;
    }
    for (let y = 75; y >= 65; y--) {
        grid[40][y] = 1;
    }

    for (let y = 75; y >= 70; y--) {
        grid[47][y] = 1;
    }

    for (let y = 75; y >= 70; y--) {
        grid[53][y] = 1;
    }

    for (let x = 53; x >= 47; x--) {
        grid[x][75] = 1;
    }

    for (let y = 75; y >= 65; y--) {
        grid[42][y] = 1;
    }

    for (let y = 75; y >= 65; y--) {
        grid[58][y] = 1;
    }

    for (let x = 60; x >= 58; x--) {
        grid[x][75] = 1;
    }

    for (let x = 42; x >= 40; x--) {
        grid[x][75] = 1;
    }


    for (let y = 35; y >= 30; y--) {
        grid[15][y] = 1;
    }

    for (let x = 90; x >= 80; x--) {
        grid[x][58] = 1;
    }

    for (let x = 90; x >= 80; x--) {
        grid[x][60] = 1;
    }

    for (let y = 60; y >= 58; y--) {
        grid[90][y] = 1;
    }
    for (let y = 60; y >= 58; y--) {
        grid[80][y] = 1;
    }

    for (let x = 90; x >= 80; x--) {
        grid[x][53] = 1;
    }

    for (let x = 90; x >= 80; x--) {
        grid[x][47] = 1;
    }

    for (let y = 53; y >= 47; y--) {
        grid[90][y] = 1;
    }

    for (let y = 53; y >= 47; y--) {
        grid[80][y] = 1;
    }

    for (let x = 85; x >= 70; x--) {
        grid[x][35] = 1;
    }

    for (let x = 85; x >= 70; x--) {
        grid[x][40] = 1;
    }

    for (let x = 85; x >= 70; x--) {
        grid[x][42] = 1;
    }

    for (let y = 42; y >= 40; y--) {
        grid[70][y] = 1;
    }

    for (let y = 42; y >= 40; y--) {
        grid[85][y] = 1;
    }

    for (let y = 60; y >= 47; y--) {
        grid[75][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[53][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[55][y] = 1;
    }

    for (let x = 53; x >= 47; x--) {
        grid[x][25] = 1;
    }

    for (let x = 55; x >= 53; x--) {
        grid[x][30] = 1;
    }

    for (let x = 55; x >= 53; x--) {
        grid[x][20] = 1;
    }

    for (let x = 60; x >= 53; x--) {
        grid[x][35] = 1;
    }

    for (let y = 35; y >= 20; y--) {
        grid[60][y] = 1;
    }
    
    for (let y = 15; y >= 5; y--) {
        grid[40][y] = 1;
    }
    for (let x = 50; x >= 40; x--) {
        grid[x][5] = 1;
    }

    for (let x = 50; x >= 45; x--) {
        grid[x][10] = 1;
    }

    for (let x = 50; x >= 45; x--) {
        grid[x][15] = 1;
    }

    for (let y = 15; y >= 10; y--) {
        grid[50][y] = 1;
    }
    for (let y = 15; y >= 10; y--) {
        grid[45][y] = 1;
    }

    for (let y = 10; y >= 0; y--) {
        grid[70][y] = 1;
    }

    for (let y = 15; y >= 5; y--) {
        grid[65][y] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][15] = 1;
    }

    for (let x = 60; x >= 55; x--) {
        grid[x][5] = 1;
    }

    for (let x = 60; x >= 55; x--) {
        grid[x][15] = 1;
    }

    for (let y = 15; y >= 5; y--) {
        grid[60][y] = 1;
    }

    for (let y = 15; y >= 5; y--) {
        grid[55][y] = 1;
    }

    for (let y = 35; y >= 25; y--) {
        grid[65][y] = 1;
    }

    for (let y = 20; y >= 15; y--) {
        grid[65][y] = 1;
    }

    for (let y = 30; y >= 20; y--) {
        grid[70][y] = 1;
    }

    for (let x = 65; x >= 60; x--) {
        grid[x][35] = 1;
    }

    for (let x = 65; x >= 60; x--) {
        grid[x][25] = 1;
    }

    for (let y = 55; y >= 40; y--) {
        grid[65][y] = 1;
    }

    for (let y = 55; y >= 47; y--) {
        grid[70][y] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][55] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][47] = 1;
    }

    for (let x = 70; x >= 60; x--) {
        grid[x][85] = 1;
    }

    for (let y = 85; y >= 75; y--) {
        grid[70][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[65][y] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[60][y] = 1;
    }

    for (let x = 65; x >= 60; x--) {
        grid[x][80] = 1;
    }

    for (let x = 70; x >= 65; x--) {
        grid[x][75] = 1;
    }

    for (let y = 95; y >= 85; y--) {
        grid[10][y] = 1;
    }

    for (let x = 10; x >= 5; x--) {
        grid[x][90] = 1;
    }

    for (let y = 85; y >= 70; y--) {
        grid[5][y] = 1;
    }

    for (let x = 15; x >= 10; x--) {
        grid[x][90] = 1;
    }

    for (let y = 100; y >= 85; y--) {
        grid[20][y] = 1;
    }

    for (let x = 20; x >= 15; x--) {
        grid[x][85] = 1;
    }

    for (let x = 10; x >= 5; x--) {
        grid[x][80] = 1;
    }

    for (let x = 10; x >= 5; x--) {
        grid[x][75] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[10][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[10][y] = 1;
    }

    for (let y = 100; y >= 95; y--) {
        grid[15][y] = 1;
    }

    for (let x = 20; x >= 15; x--) {
        grid[x][95] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[20][y] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[20][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[35][y] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[35][y] = 1;
    }

    for (let x = 25; x >= 20; x--) {
        grid[x][80] = 1;
    }

    for (let x = 35; x >= 30; x--) {
        grid[x][80] = 1;
    }

    for (let x = 25; x >= 20; x--) {
        grid[x][65] = 1;
    }

    for (let x = 35; x >= 30; x--) {
        grid[x][65] = 1;
    }

    for (let x = 35; x >= 30; x--) {
        grid[x][70] = 1;
    }

    for (let x = 35; x >= 30; x--) {
        grid[x][75] = 1;
    }

    for (let x = 25; x >= 20; x--) {
        grid[x][70] = 1;
    }

    for (let x = 25; x >= 20; x--) {
        grid[x][75] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[30][y] = 1;
    }

    for (let y = 70; y >= 65; y--) {
        grid[25][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[30][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[25][y] = 1;
    }

    for (let y = 80; y >= 75; y--) {
        grid[15][y] = 1;
    }

    for (let x = 15; x >= 10; x--) {
        grid[x][70] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[25][y] = 1;
    }

    for (let y = 100; y >= 90; y--) {
        grid[40][y] = 1;
    }

    for (let x = 30; x >= 25; x--) {
        grid[x][90] = 1;
    }

    for (let x = 40; x >= 35; x--) {
        grid[x][90] = 1;
    }

    for (let x = 35; x >= 30; x--) {
        grid[x][85] = 1;
    }

    for (let y = 90; y >= 85; y--) {
        grid[35][y] = 1;
    }

    for (let y = 90; y >= 85; y--) {
        grid[30][y] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[25][y] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[40][y] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[42][y] = 1;
    }

    for (let y = 90; y >= 85; y--) {
        grid[47][y] = 1;
    }

    for (let x = 42; x >= 40; x--) {
        grid[x][85] = 1;
    }
    for (let x = 42; x >= 40; x--) {
        grid[x][80] = 1;
    }

    for (let x = 47; x >= 40; x--) {
        grid[x][80] = 1;
    }

    for (let x = 47; x >= 40; x--) {
        grid[x][90] = 1;
    }

    for (let y = 100; y >= 95; y--) {
        grid[47][y] = 1;
    }

    for (let x = 47; x >= 40; x--) {
        grid[x][95] = 1;
    }

    for (let x = 55; x >= 40; x--) {
        grid[x][90] = 1;
    }

    for (let x = 55; x >= 52; x--) {
        grid[x][80] = 1;
    }
    for (let x = 55; x >= 52; x--) {
        grid[x][85] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[52][y] = 1;
    }

    for (let y = 85; y >= 80; y--) {
        grid[55][y] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[55][y] = 1;
    }

    for (let y = 95; y >= 90; y--) {
        grid[52][y] = 1;
    }

    for (let x = 55; x >= 52; x--) {
        grid[x][95] = 1;
    }

    for (let y = 100; y >= 95; y--) {
        grid[30][y] = 1;
    }

    for (let x = 30; x >= 25; x--) {
        grid[x][95] = 1;
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


    //
    for (let y = 29; y >= 16; y--) {
        grid[96][y] = 2;
    }
    for (let y = 29; y >= 16; y--) {
        grid[97][y] = 2;
    }
    for (let y = 29; y >= 16; y--) {
        grid[98][y] = 2;
    }
    for (let y = 29; y >= 16; y--) {
        grid[99][y] = 2;
    }


    //
    for (let y = 9; y >= 6; y--) {
        grid[94][y] = 2;
    }
    for (let y = 9; y >= 6; y--) {
        grid[93][y] = 2;
    }
    for (let y = 9; y >= 6; y--) {
        grid[92][y] = 2;
    }
    for (let y = 9; y >= 6; y--) {
        grid[91][y] = 2;
    }


    //
    for (let y = 29; y >= 26; y--) {
        grid[84][y] = 2;
    }
    for (let y = 29; y >= 26; y--) {
        grid[83][y] = 2;
    }
    for (let y = 29; y >= 26; y--) {
        grid[82][y] = 2;
    }
    for (let y = 29; y >= 26; y--) {
        grid[81][y] = 2;
    }
    for (let y = 29; y >= 26; y--) {
        grid[80][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[79][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[78][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[77][y] = 2;
    }
    for (let y = 29; y >= 21; y--) {
        grid[76][y] = 2;
    }


    //
    for (let x = 84; x >= 76; x--) {
        grid[x][6] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][7] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][8] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][9] = 2;
    }


    //
    for (let x = 84; x >= 76; x--) {
        grid[x][76] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][77] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][78] = 2;
    }
    for (let x = 84; x >= 76; x--) {
        grid[x][79] = 2;
    }


    //
    for (let x = 89; x >= 76; x--) {
        grid[x][91] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][92] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][93] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][94] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][95] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][96] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][97] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][98] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][99] = 2;
    }


    //
    for (let x = 69; x >= 61; x--) {
        grid[x][94] = 2;
    }
    for (let x = 69; x >= 61; x--) {
        grid[x][93] = 2;
    }
    for (let x = 69; x >= 61; x--) {
        grid[x][92] = 2;
    }
    for (let x = 69; x >= 61; x--) {
        grid[x][91] = 2;
    }


    //
    for (let x = 89; x >= 76; x--) {
        grid[x][69] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][68] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][67] = 2;
    }
    for (let x = 89; x >= 76; x--) {
        grid[x][66] = 2;
    }


    //
    for (let y = 52; y >= 48; y--) {
        grid[99][y] = 2;
    }
    for (let y = 52; y >= 48; y--) {
        grid[98][y] = 2;
    }
    for (let y = 52; y >= 48; y--) {
        grid[97][y] = 2;
    }
    for (let y = 52; y >= 48; y--) {
        grid[96][y] = 2;
    }


    //
    for (let y = 41; y >= 36; y--) {
        grid[94][y] = 2;
    }
    for (let y = 41; y >= 36; y--) {
        grid[93][y] = 2;
    }
    for (let y = 41; y >= 36; y--) {
        grid[92][y] = 2;
    }
    for (let y = 41; y >= 36; y--) {
        grid[91][y] = 2;
    }


    //
    for (let y = 74; y >= 66; y--) {
        grid[59][y] = 2;
    }

    //
    for (let y = 74; y >= 66; y--) {
        grid[41][y] = 2;
    }


    //
    for (let y = 29; y >= 21; y--) {
        grid[54][y] = 2;
    }

    //
    for (let y = 69; y >= 66; y--) {
        grid[69][y] = 2;
    }
    for (let y = 69; y >= 66; y--) {
        grid[68][y] = 2;
    }
    for (let y = 69; y >= 66; y--) {
        grid[67][y] = 2;
    }
    for (let y = 69; y >= 66; y--) {
        grid[66][y] = 2;
    }


    //
    for (let x = 52; x >= 48; x--) {
        grid[x][74] = 2;
    }
    for (let x = 52; x >= 48; x--) {
        grid[x][73] = 2;
    }
    for (let x = 52; x >= 48; x--) {
        grid[x][72] = 2;
    }
    for (let x = 52; x >= 48; x--) {
        grid[x][71] = 2;
    }


    //
    for (let x = 14; x >= 6; x--) {
        grid[x][31] = 2;
    }
    for (let x = 14; x >= 6; x--) {
        grid[x][32] = 2;
    }
    for (let x = 14; x >= 6; x--) {
        grid[x][33] = 2;
    }
    for (let x = 14; x >= 6; x--) {
        grid[x][34] = 2;
    }


    //
    for (let x = 84; x >= 71; x--) {
        grid[x][41] = 2;
    }


    //
    for (let x = 89; x >= 81; x--) {
        grid[x][59] = 2;
    }


    //
    for (let x = 89; x >= 81; x--) {
        grid[x][52] = 2;
    }
    for (let x = 89; x >= 81; x--) {
        grid[x][51] = 2;
    }
    for (let x = 89; x >= 81; x--) {
        grid[x][50] = 2;
    }
    for (let x = 89; x >= 81; x--) {
        grid[x][49] = 2;
    }
    for (let x = 89; x >= 81; x--) {
        grid[x][48] = 2;
    }


    //
    for (let y = 14; y >= 6; y--) {
        grid[56][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[57][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[58][y] = 2;
    }
    for (let y = 14; y >= 6; y--) {
        grid[59][y] = 2;
    }


    //
    for (let y = 14; y >= 11; y--) {
        grid[46][y] = 2;
    }
    for (let y = 14; y >= 11; y--) {
        grid[47][y] = 2;
    }
    for (let y = 14; y >= 11; y--) {
        grid[48][y] = 2;
    }
    for (let y = 14; y >= 11; y--) {
        grid[49][y] = 2;
    }


    //
    for (let y = 34; y >= 26; y--) {
        grid[61][y] = 2;
    }
    for (let y = 34; y >= 26; y--) {
        grid[62][y] = 2;
    }
    for (let y = 34; y >= 26; y--) {
        grid[63][y] = 2;
    }
    for (let y = 34; y >= 26; y--) {
        grid[64][y] = 2;
    }


    //
    for (let y = 54; y >= 48; y--) {
        grid[66][y] = 2;
    }
    for (let y = 54; y >= 48; y--) {
        grid[67][y] = 2;
    }
    for (let y = 54; y >= 48; y--) {
        grid[68][y] = 2;
    }
    for (let y = 54; y >= 48; y--) {
        grid[69][y] = 2;
    }


    //
    for (let y = 84; y >= 76; y--) {
        grid[69][y] = 2;
    }
    for (let y = 84; y >= 76; y--) {
        grid[68][y] = 2;
    }
    for (let y = 84; y >= 76; y--) {
        grid[67][y] = 2;
    }
    for (let y = 84; y >= 76; y--) {
        grid[66][y] = 2;
    }
    for (let x = 65; x >= 61; x--) {
        grid[x][84] = 2;
    }
    for (let x = 65; x >= 61; x--) {
        grid[x][83] = 2;
    }
    for (let x = 65; x >= 61; x--) {
        grid[x][82] = 2;
    }
    for (let x = 65; x >= 61; x--) {
        grid[x][81] = 2;
    }


    //
    for (let x = 9; x >= 6; x--) {
        grid[x][94] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][93] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][92] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][91] = 2;
    }


    //
    for (let x = 9; x >= 6; x--) {
        grid[x][76] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][77] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][78] = 2;
    }
    for (let x = 9; x >= 6; x--) {
        grid[x][79] = 2;
    }


    //
    for (let x = 19; x >= 16; x--) {
        grid[x][96] = 2;
    }
    for (let x = 19; x >= 16; x--) {
        grid[x][97] = 2;
    }
    for (let x = 19; x >= 16; x--) {
        grid[x][98] = 2;
    }
    for (let x = 19; x >= 16; x--) {
        grid[x][99] = 2;
    }
    

    //
    for (let x = 24; x >= 21; x--) {
        grid[x][79] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][78] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][77] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][76] = 2;
    }


    //
    for (let x = 24; x >= 21; x--) {
        grid[x][66] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][67] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][68] = 2;
    }
    for (let x = 24; x >= 21; x--) {
        grid[x][69] = 2;
    }


    //
    for (let x = 34; x >= 31; x--) {
        grid[x][66] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][67] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][68] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][69] = 2;
    }


    //
    for (let x = 34; x >= 31; x--) {
        grid[x][76] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][77] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][78] = 2;
    }
    for (let x = 34; x >= 31; x--) {
        grid[x][79] = 2;
    }


    //
    for (let y = 94; y >= 91; y--) {
        grid[26][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[27][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[28][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[29][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[30][y] = 2;
    }

    for (let y = 99; y >= 91; y--) {
        grid[35][y] = 2;
    }
    for (let y = 99; y >= 91; y--) {
        grid[36][y] = 2;
    }
    for (let y = 99; y >= 91; y--) {
        grid[37][y] = 2;
    }
    for (let y = 99; y >= 91; y--) {
        grid[38][y] = 2;
    }
    for (let y = 99; y >= 91; y--) {
        grid[39][y] = 2;
    }

    for (let y = 99; y >= 86; y--) {
        grid[31][y] = 2;
    }
    for (let y = 99; y >= 86; y--) {
        grid[32][y] = 2;
    }
    for (let y = 99; y >= 86; y--) {
        grid[33][y] = 2;
    }
    for (let y = 99; y >= 86; y--) {
        grid[34][y] = 2;
    }
    for (let y = 99; y >= 96; y--) {
        grid[40][y] = 2;
    }


    //
    for (let y = 84; y >= 81; y--) {
        grid[41][y] = 2;
    }

    //
    for (let y = 84; y >= 81; y--) {
        grid[53][y] = 2;
    }
    for (let y = 84; y >= 81; y--) {
        grid[54][y] = 2;
    }


    //
    for (let y = 94; y >= 91; y--) {
        grid[54][y] = 2;
    }
    for (let y = 94; y >= 91; y--) {
        grid[53][y] = 2;
    }


    //
    for (let x = 46; x >= 41; x--) {
        grid[x][99] = 2;
    }
    for (let x = 46; x >= 41; x--) {
        grid[x][98] = 2;
    }
    for (let x = 46; x >= 41; x--) {
        grid[x][97] = 2;
    }
    for (let x = 46; x >= 41; x--) {
        grid[x][96] = 2;
    }

    //Trophy
    for (let x = 51; x >= 49; x--) {
        grid[x][50] = 3;
    }
    for (let y = 51; y >= 49; y--) {
        grid[50][y] = 3;
    }
    for (let x = 50; x >= 50; x--) {
        grid[x][50] = 4;
    }
}
// Initialize the grid with empty spaces (0)
initializeGrid(0);

// Function to draw the grid on the canvas
function drawGrid() {
    const cellWidth = canvas.width / gridSizeX;
    const cellHeight = canvas.height / gridSizeY;

    noStroke();

    for (let x = 0; x < gridSizeX; x++) {
        for (let y = 0; y < gridSizeY; y++) {
            if (grid[x][y] === 1) {
                // Draw wall
                fill(0);
            } else if (grid[x][y] === 2) {
                // Draw green space
                fill(2, 100, 30);
            } else if (grid[x][y] === 3) {
                // Draw green space
                fill(184,216,231);
            } else if (grid[x][y] === 4) {
                // Draw green space
                fill(154,197,219);
            } else {
                // Draw pathway
                fill(149, 116, 51);
            }
            rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight); //added one to overlap a bit to hide the white border around the boxes
        }
                // Draw Creatures
                fill(0, 255, 255)
                rect(malvarTheMalevolent.x * cellWidth, malvarTheMalevolent.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(vorinTheVile.x * cellWidth, vorinTheVile.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(mordredTheMaleficent.x * cellWidth, mordredTheMaleficent.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(sylviaTheSinister.x * cellWidth, sylviaTheSinister.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(xantharTheExile.x * cellWidth, xantharTheExile.y * cellHeight, cellWidth * 2, cellHeight * 2);

                // Draw players
                fill(0, 0, 255); // Player color
                rect(player1.x * cellWidth, player1.y * cellHeight, cellWidth * 2, cellHeight * 2);
                fill(255, 0, 0); // Player color
                rect(player2.x * cellWidth, player2.y * cellHeight, cellWidth * 2, cellHeight * 2);
                
                // Draw Hearts
                fill(255, 192, 203);
                rect(heart1.x * cellWidth, heart1.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart2.x * cellWidth, heart2.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart3.x * cellWidth, heart3.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart4.x * cellWidth, heart4.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart5.x * cellWidth, heart5.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart6.x * cellWidth, heart6.y * cellHeight, cellWidth * 2, cellHeight * 2);
                rect(heart7.x * cellWidth, heart7.y * cellHeight, cellWidth * 2, cellHeight * 2);
    }
}

function showGame() {
    drawGrid();
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


// Constructors
class Creature {
    constructor(firstName, lastName, riddle, answers, correctAnswerIndex, x, y, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.riddle = riddle;
        this.answerArray = answers;
        this.correctAnswerIndex = correctAnswerIndex;
        this.x = x;
        this.y = y;
        this.id = id;
    }
}

//Riddles

const malvarTheMalevolentRiddle = "I suck the joy and hope from your soul, leaving only despair in my wake. What am I?";
const vorinTheVileRiddle = "I weave a web of deceit and death, lurking in the shadows of the forest. What am I?";
const mordredTheMaleficentRiddle = "I am a puppet of darkness, animated by the darkest magic. What am I?";
const sylviaTheSinisterRiddle = "I slither through the depths, my gaze bringing death to those who meet it. What am I?";
const xantharTheExileRiddle = "I am the embodiment of suppressed magic, unleashed in a torrent of destruction. What am I?";

//Answers

const malvarTheMalevolentArray = ["Dementor", "Boggart", "Lethifold"]; // Dementor
const vorinTheVileArray = ["Banshee", "Lycanthrope", "Acromantula"]; // Acromatula
const mordredTheMaleficentArray = ["Obscurial", "Inferius", "Poltergeist"]; // Inferius
const sylviaTheSinisterArray = ["Basilisk", "Mermish", "Kelpie"]; // Basilisk
const xantharTheExileArray = ["Horcrux", "Obscurus", "Dementor"]; // Obscurus


//Wizards

let malvarTheMalevolent = new Creature("Malvar", "Malevolent", malvarTheMalevolentRiddle, malvarTheMalevolentArray, 0, 2, 70, 1);
let vorinTheVile = new Creature("Vorin", "Vile", vorinTheVileRiddle, vorinTheVileArray, 2, 2, 30, 2);
let mordredTheMaleficent = new Creature("Mordred", "Maleficent", mordredTheMaleficentRiddle, mordredTheMaleficentArray, 1, 2, 40, 3);
let sylviaTheSinister = new Creature("Sylvia", "Sinister", sylviaTheSinisterRiddle, sylviaTheSinisterArray, 0, 2, 50, 4);
let xantharTheExile = new Creature("Xanthar", "Exile", xantharTheExileRiddle, xantharTheExileArray, 1, 2, 60, 5);

creatures.push(new Creature("Malvar", "Malevolent", malvarTheMalevolentRiddle, malvarTheMalevolentArray, 0, 2, 70, 1));
creatures.push(new Creature("Vorin", "Vile", vorinTheVileRiddle, vorinTheVileArray, 2, 2, 30, 2));
creatures.push(new Creature("Mordred", "Maleficent", mordredTheMaleficentRiddle, mordredTheMaleficentArray, 1, 2, 40, 3));
creatures.push(new Creature("Sylvia", "Sinister", sylviaTheSinisterRiddle, sylviaTheSinisterArray, 0, 2, 50, 4));
creatures.push(new Creature("Xanthar", "Exile", xantharTheExileRiddle, xantharTheExileArray, 1, 2, 60, 5));

// Function to check player-creature collision
function checkPlayerCreatureCollision(player, playerId) {
    for (let i = 0; i < creatures.length; i++) {
        const creature = creatures[i];
        if (isAtSamePosition(player, creature)) {
            // Update HTML elements based on player ID
            const creatureName = document.getElementById('name' + playerId);
            const creaturePrompt = document.getElementById('prompt' + playerId);
            const answerList = document.getElementById('answerList' + playerId);
    
            creatureName.innerText = creature.firstName + " " + creature.lastName;
            creaturePrompt.innerText = creature.riddle;
            


            // Clear previous answers
            answerList.innerHTML = ''; 

            // Add answers
            creature.answerArray.forEach((answer, index) => {
                const listItem = document.createElement('li');
                listItem.innerText = (index + 1) + ". " + answer;
                answerList.appendChild(listItem);
            });

            // Update currentCreatureIndex
            currentCreatureIndex = i;

            break; // Exit the loop since we found a collision
        }
    }
}

//function canMove and isValidPosition were created through help from chatGPT (problem was that I forgot that our player models were 2x2, not 1x1, so some parts would glitch halfway through certain walls before detecting collissions)
//https://chat.openai.com/share/6cdea05b-5c3b-4956-9deb-f73937126bb9

// Function to check if the player can move to a certain position without glitching into walls
function canMove(x, y) {
    // Check if all four corners of the player are valid positions
    return (
        isValidPosition(x, y) &&             // Check if the current position is valid
        isValidPosition(x + 1, y) &&         // Check if the position to the right is valid
        isValidPosition(x, y + 1) &&         // Check if the position below is valid
        isValidPosition(x + 1, y + 1)        // Check if the position diagonally below and to the right is valid
    );
}

// Function to check if a single position is valid within the grid
function isValidPosition(x, y) {
    // Check if the position is within the grid bounds and not a wall with grid value 1
    return (
        x >= 0 && x < grid.length && // Check if x-coordinate is within the grid bounds
        y >= 0 && y < grid[0].length && // Check if y-coordinate is within the grid bounds
        (grid[x][y] === 0 || grid[x][y] === 3 || grid[x][y] === 4)  // Check if the grid value is 0, 3, 4(valid positions)
    );
}

function isAtSamePosition(player, creature) {
    return player.x === creature.x && player.y === creature.y;
}

//healthbar
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

function clearText(playerId) {
    const creatureName = document.getElementById('name' + playerId);
    const creaturePrompt = document.getElementById('prompt' + playerId);
    const answerList = document.getElementById('answerList' + playerId);
    
    creatureName.innerHTML = '';
    creaturePrompt.innerHTML = '';
    answerList.innerHTML = '';
}


function checkAnswers(player) {
    let correctAnswers;
    if (player === player1) {
        correctAnswers = playerOneCorrect;
    } else if (player === player2) {
        correctAnswers = playerTwoCorrect;
    }

    const expectedAnswers = [1, 2, 3, 4, 5];

    // Sort both arrays before comparing
    correctAnswers.sort((a, b) => a - b);
    expectedAnswers.sort((a, b) => a - b);
    
    // Check if the sorted correct answers match the sorted expected answers
    const correct = correctAnswers.length === expectedAnswers.length &&
                    correctAnswers.every((answer, index) => answer === expectedAnswers[index]);
    
    if (correct) {
        console.log("Correct answers match the expected answers!");
    } else {
        console.log("Incorrect answers!");
    }
}

function trophyCollision(player1, player2, trophy) {
    if (player1.x === trophy.x && player1.y === trophy.y) {
        checkAnswers(player1);
    } else if (player2.x === trophy.x && player2.y === trophy.y) {
        checkAnswers(player2);
    }
}

function detectCollision(player1, player2, hearts) {
    for (let i = 0; i < hearts.length; i++) {
        let heart = hearts[i];
        // If player and heart have the same coordinates, it's a collision
        if (player1.x === heart.x && player1.y === heart.y) {
            heartCollision(player1);
        } else if (player2.x === heart.x && player2.y === heart.y) {
            heartCollision(player2);
    }
}
}

function heartCollision(player) {
    // Perform actions accordingly
    console.log("Player " + player.id + " heart");
    // Additional actions specific to your game logic can go here
}


//Buttons
document.addEventListener("keydown", function(event) {
    const keyActions = {
        "w": function() {
            if (playerOneAlive && canMove(player1.x, player1.y - 1)) {
                player1.y -= 1; // Move player 1 up (decrease y coordinate)
                checkPlayerCreatureCollision(player1, "One");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "a": function() {
            if (playerOneAlive && canMove(player1.x - 1, player1.y)) {
                player1.x -= 1; // Move player 1 left (decrease x coordinate)
                checkPlayerCreatureCollision(player1, "One");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "s": function() {
            if (playerOneAlive && canMove(player1.x, player1.y + 1)) {
                player1.y += 1; // Move player 1 down (increase y coordinate)
                checkPlayerCreatureCollision(player1, "One");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "d": function() {
            if (playerOneAlive && canMove(player1.x + 1, player1.y)) {
                player1.x += 1; // Move player 1 right (increase x coordinate)
                checkPlayerCreatureCollision(player1, "One");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "ArrowUp": function() {
            if (playerTwoAlive && canMove(player2.x, player2.y - 1)) {
                player2.y -= 1; // Move player 2 up (decrease y coordinate)
                checkPlayerCreatureCollision(player2, "Two");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "ArrowLeft": function() {
            if (playerTwoAlive && canMove(player2.x - 1, player2.y)) {
                player2.x -= 1; // Move player 2 left (decrease x coordinate)
                checkPlayerCreatureCollision(player2, "Two");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "ArrowDown": function() {
            if (playerTwoAlive && canMove(player2.x, player2.y + 1)) {
                player2.y += 1; // Move player 2 down (increase y coordinate)
                checkPlayerCreatureCollision(player2, "Two");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "ArrowRight": function() {
            if (playerTwoAlive && canMove(player2.x + 1, player2.y)) {
                player2.x += 1; // Move player 2 right (increase x coordinate)
                checkPlayerCreatureCollision(player2, "Two");
                trophyCollision(player1, player2, trophy);
                detectCollision(player1, player2, hearts);
            }
        },
        "1": function() {
            if (playerOneAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 0) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerOneCorrect.includes(creatureId)) {
                        playerOneCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
                    }
                    clearText("One");
                } else {
                    takeDamage("healthBarOne", 10);
                }
            }
        },        
        "2": function() {
            if (playerOneAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 1) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerOneCorrect.includes(creatureId)) {
                        playerOneCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
                    }
                    clearText("One");
                } else {
                    takeDamage("healthBarOne", 10);
                }
            }
        },        
        "3": function() {
            if (playerOneAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 2) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerOneCorrect.includes(creatureId)) {
                        playerOneCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
            
                    }
                    clearText("One");
                } else {
                    takeDamage("healthBarOne", 10);
                }
            }
        },
        "8": function() {
            if (playerTwoAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 0) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerTwoCorrect.includes(creatureId)) {
                        playerTwoCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
                    }
                    clearText("Two");
                } else {
                    takeDamage("healthBarTwo", 10);
                }
            }
        },
        "9": function() {
            if (playerTwoAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 1) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerTwoCorrect.includes(creatureId)) {
                        playerTwoCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
                    }
                    clearText("Two");
                } else {
                    takeDamage("healthBarTwo", 10);
                }
            }
        },
        "0": function() {
            if (playerTwoAlive && currentCreatureIndex !== -1) {
                const correctAnswerIndex = creatures[currentCreatureIndex].correctAnswerIndex;
                const creatureId = creatures[currentCreatureIndex].id;
                if (correctAnswerIndex === 2) {
                    console.log("Player Two chose the correct answer!");
                    if (!playerTwoCorrect.includes(creatureId)) {
                        playerTwoCorrect.push(creatureId); // Push the ID of the correct creature into playerTwoCorrect array if it's not already present
                    }
                    clearText("Two");
                } else {
                    takeDamage("healthBarTwo", 10);
                }
            }
        }
    };

    const action = keyActions[event.key];
    if (action) {
        action();
    }
});


function load(){
    updateHealthBar('healthBarOne', player1.hp);
    updateHealthBar('healthBarTwo', player2.hp);
}


window.onload = load;