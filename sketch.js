var song;
var playTime, loadTime
var es = 0                        //Ellispe height and width
var r = 0, g = 0, b = 0           //Square background color
var sr = 250, sg = 250, sb = 250  //Stroke color
var tx = 500, ty = 0              //Barrel Translate


function preload(){
  soundFormats('mp3', 'wav');
  song = loadSound("007.mp3");
}

function setup() {
  createCanvas(500, 500)
  background(0)

  setVolume = 100
  if(song.isLoaded()){
    loadTime = millis()
    //print(loadTime)
    song.play()
  }
}

function draw() {
  playTime = millis() - loadTime  //1 second = 1000 Millis
  //print(playTime)

//spotlight
  noStroke()
  fill(r, g, b)
  square(0, 0, 500)
  fill(250)
  ellipse(250, 250, es, es)
    if(playTime > 1500 && playTime < 2500){
      es = 50
    }
    if(playTime > 2500 && playTime < 5000){
       es += 7
       r += 2
       g += 2
       b += 2
    }

//Composiition
  if(playTime > 5000){
    translate(tx, ty)
    tx -= 1
    sr -= 1
    sg -= 1
    sb -= 1
      push()
      stroke(sr, sg, sb)
      strokeWeight(3)
      fill(250)
      ellipse(250, 250, 200, 200)
      line(250, 150, 0, 125)
      line(300, 163, 160, 0)
      line(350, 250, 375, 0)
      line(300, 337, 500, 160)
      line(250, 350, 500, 375)
      line(200, 337, 340, 500)
      line(150, 250, 125, 500)
      line(200, 163, 0, 340)
        line(0, 125, -500, 500)
        line(0, 340, -25, 500)
        line(500, 375, 1000, 0)
        line(500, 160, 525, 0)
      pop()
  }

}
