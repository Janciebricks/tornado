function setup() {
  createCanvas(800, 800)
  background(100)
}
function draw() {
  fill(0)
  rect(0,0,width,height)
  translate(width/2, 0)
  stroke(255)
  noFill()
  for(var i=0; i<height; i+=3){
    strokeWeight(random(2))
   let nn = noise(i/10, frameCount/100)*20+(height-i)/9
	//let nn = random(i/10, frameCount/100)*20+(height-i)/9
		//let nn = (i/10, frameCount/100)*20+(height-i)/9
    ellipse(0, i-100, nn*8, nn*3)
  }
}