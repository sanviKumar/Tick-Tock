var hr, min, sec
var hrAngle, minAngle, secAngle
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200)
  rotate(-90)
  hr = hour();
  hrAngle = map(hr%12, 0, 12, 0, 360);
  push(); 
  rotate(hrAngle); 
  stroke(0,0,255); 
  strokeWeight(7); 
  line(0,0,50,0); 
  pop()
  min = minute();
  minAngle = map(min, 0, 60, 0, 360);
  push(); 
  rotate(minAngle); 
  stroke(0,255,0); 
  strokeWeight(7); 
  line(0,0,75,0); 
  pop()
  sec = second();
  secAngle = map(sec, 0, 60, 0, 360);
  push(); 
  rotate(secAngle); 
  stroke(255,0,0); 
  strokeWeight(7); 
  line(0,0,100,0); 
  pop()
  drawSprites();
}