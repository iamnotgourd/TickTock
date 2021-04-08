var hours,minutes,seconds;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black");
  translate(200,200)
  rotate(-90)
  hours = hour()
  minutes = minute()
  seconds = second() 
  secondsAngle = map(seconds,0,60,0,360)
  minutesAngle = map(minutes,0,60,0,360)
  hoursAngle = map(hours%12,0,12,0,360)
  push()
  rotate(secondsAngle)
  stroke("red")
  strokeWeight(3)
  line(0,0,100,0)
  pop()
  push()
  rotate(minutesAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,120,0)
  pop()
  push()
  rotate(hoursAngle)
  stroke("blue")
  strokeWeight(6)
  line(0,0,80,0)
  pop()
  strokeWeight(10)
  noFill()
  stroke("red")
  arc(0,0,300,300,0,secondsAngle)
  stroke("green")
  arc(0,0,280,280,0,minutesAngle)
  stroke("blue")
  arc(0,0,260,260,0,hoursAngle)
  drawSprites();
}