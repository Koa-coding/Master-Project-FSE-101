


function setup() {
  createCanvas(600, 600);
  background(255);
var circ = [];
  
  var counter = 0;

  
  while (circ.length < 500) {
		var circle = {
			x: random(width),
			y: random(height),
			r: 20,
		}

    
    var overlapping = false;
    for (var j = 0; j < circ.length; j++) {
      var other = circ[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    
    if (!overlapping) {
      circ.push(circle);
    }

    
    counter++;
    if (counter > 6) {
      break;
    }
  }

  
  for (var i = 0; i < circ.length; i++) {
    // fill(255, 0, 175, 100);
    let  s="1";
    fill (random(255));
    fill(s, random(255), random(255), 100);
    noStroke();
    ellipse(circ[i].x, circ[i].y, circ[i].r * 2, circ[i].r * 2);
    
    
  }
}
