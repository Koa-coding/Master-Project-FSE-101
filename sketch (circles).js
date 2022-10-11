let x, y;
let r, g, b;
let radius = 50;

function setup() {
  createCanvas(710, 400);
  x = random(710);
  y = random(400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  fill(r, g, b)
  ellipse(x, y, radius*3, radius*3);
}

function circleappear() {
  
}
