let bubbles = [];
let score = 0;
let level = 0;
var song;
var check;

function preload() {
  song = loadSound("Wet Hands.mp3");
  check = loadSound("check mark sound effect.mp3");
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = 40;
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    song.play();
    check.setVolume(0.1);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
    bubbles[i].correct(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  noStroke()
  fill('orange');
  text("Score: " + score, 10, 40);
  text("Level: " +level, 10, 70)
  textSize(25);
    if (level == 0) {
      splash();
    }
  
    if((mouseIsPressed == true && level != 2) && (mouseIsPressed == true && level != 3)){
	  level = 1;
	}
  
    if (level == 1){
      level1();  
    }
  
    if (level == 2){
      level2();
    }
  
    if (level == 3){
      level3();
    }
  
}
    //var overlapping = false;
    //for (let i = 0; i < bubbles.length; i++) {
    //  var other = bubbles[i];
    //  var d = dist(circle.x, circle.y, other.x, other.y);
    //  if (d < circle.r + other.r) {
    //    overlapping = true;
    //  }
    //}
    //if (!overlapping){
    //}

function splash(){
	//appearance of game
	background(150, 230, 240); //sky blue
	
	//title
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    //instructions
    text('HOW TO PLAY:', 250, 100);
    text('Click circles to get score', 200, 150);
    text('CLICK THE SCREEN TO START', 170, 200);
	
}

function level1() {
  for (let i = 0; i < 5; i++) {
    bubbles[i].appear(); 
  }
}

function level2() {
  level = 2;
  for (let i = 0; i < 10; i++) {
    bubbles[i].appear(); 
  }
}

function level3() {
  level = 3;
  for (let i = 0; i < 20; i++) {
    bubbles[i].appear(); 
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(255,0,100);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      score++;
      this.col = color(0,0,0,0);
      strokeWeight(4)
      stroke(0)
      if ((level == 1) && (score == 5)) {
        level++;
        score = 0;
      }
      if ((level == 2) && (score == 5)) {
        level++;
        score = 0;
      }
    }
  }
  
  correct(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      check.play();
    }
  }

  appear() {
    stroke(255);
    strokeWeight(4)
    fill(this.col, 60);
    ellipse(this.x, this.y, this.r);
  }
}
