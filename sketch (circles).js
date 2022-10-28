let bubbles = [];
let score = 0;
let level = 1;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = 40;
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  noStroke()
  text("Score: " + score, 10, 40);
  textSize(30);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    
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
      this.col = color(0,0,0,0);
      score++;
      strokeWeight(4)
      stroke(0)
    }
  }

  show() {
    stroke(255);
    strokeWeight(4)
    fill(this.col, 60);
    ellipse(this.x, this.y, this.r * 2);
  }
}
