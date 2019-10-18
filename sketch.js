var song;
var playTime, loadTime;
var amp, level;
var es = 0                                    //Ellispe height and width
var r = 0, g = 0, b = 0, a = 255              //Square background color + Alpha
var sr = 250, sg = 250, sb = 255              //Stroke color
var sr2 = 255, sg2 = 250, sb2 = 250,  a2 = 0  //Figure Stroke color + Fill Alpha
var er = 250, eg = 250, eb = 250              //Crosshair ellipse Color
var tx = 500, ty = 0                          //Barrel Translate x-cords
var tx2 = -400
var tx3 = 130
var tx4 = 0

function preload(){
  soundFormats('mp3', 'wav');
  song = loadSound("007.mp3");
}

function setup() {
  createCanvas(500, 500)
  background(0)
  amp = new p5.Amplitude();
}

function mousePressed(){
  if(song.isLoaded()){
    loadTime = millis()
    song.play()
  }
}

function draw() {
  playTime = millis() - loadTime
  print(playTime)
  level = amp.getLevel();
  grad1 = lerpColor(color("black"), color("white"), level);
  grad2 = lerpColor(color("white"), color("black"), level);

//Spotlight
  noStroke()
  fill(grad1)
  square(0, 0, 500)
  fill(r, g, b, a)
  square(0, 0, 500)
  fill(250, 250, 250, a)
  ellipse(250, 250, es, es)

//Spotlight Appears
    if(playTime > 1500 && playTime < 2500){
      es = 50
    }

//Spotlight Grows and background color fades to match
    if(playTime > 2500 && playTime < 5000){
       es += 7
       r += 2
       g += 2
       b += 2
    }

//Background fades out to reveal Amp Grad
    if(playTime > 5000){
      r = 255
      g = 255
      b = 255
      a -= .15
    }

//Crosshair creation, First movement, and Stroke Fade in
  if(playTime > 5000 && playTime < 20000){
    push()
    translate(tx, ty)
    tx -= 1
    sr -= 1
    sg -= 1
    sb -= 1
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
  
//Second Crosshair movement
  if(playTime > 20000 && playTime < 29000){
    push()
    translate(tx2, ty)
    tx2 += 1
    sr = 0
    sg = 0
    sb = 0
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

//Final Crosshair movement and Stroke Color change
  if(playTime > 29000 && playTime < 31250){
    push()
    translate(tx3, ty)
    tx3 -= 1
    sr += 2
    sg += 2
    sb += 2
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

//Bond Fade in 
  if(playTime > 31250){
    push()
    translate(tx4, ty)
      stroke(grad2)
      strokeWeight(3)
      fill(er, eg, eb)
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

    push()
      stroke(sr2, sg2, sb2)
      strokeWeight(2)

      a2 += 1
      sr2 -= 1
      sg2 -= 1
      sb2 -= 1

      //Legs
      fill(0, 0, 0, a2)
      beginShape()
      vertex(235, 265)
      vertex(233, 330)
      vertex(227, 333)
      vertex(227, 339)
      vertex(241, 335)
      vertex(240, 330)
      vertex(250, 265)
      vertex(260, 300)
      vertex(260, 330)
      vertex(259, 335)
      vertex(274, 339)
      vertex(274, 333)
      vertex(267, 330)
      vertex(270, 300)
      vertex(267, 265)
      endShape(CLOSE)

      //Left Arm
      fill(225, 172, 150, a2)
      beginShape()
      vertex(270, 253)
      vertex(277, 253)
      vertex(278, 263)
      vertex(271, 263)
      endShape(CLOSE)

      //Body
      fill(0, 0, 0, a2)
      beginShape()
      vertex(250, 195)
      vertex(267, 202)
      vertex(273, 265)
      vertex(235, 265)
      vertex(240, 230)
      vertex(235, 202)
      endShape(CLOSE)
      
      //Suit Collar
      strokeWeight(0)
      fill(250, 250, 250, a2)
      beginShape()
      vertex(250, 195)
      vertex(255, 195)
      vertex(261, 210)
      vertex(262, 220)
      vertex(260, 230)
      vertex(258, 230)
      endShape(CLOSE)

      //Head
      strokeWeight(2)
      fill(225, 172, 150, a2)
      beginShape()
      vertex(247, 200)
      vertex(240, 195)
      vertex(240, 180)
      vertex(245, 175)
      vertex(255, 175)
      vertex(260, 180)
      vertex(260, 195)
      vertex(253, 200)
      endShape(CLOSE)

      //Hair
      fill(0, 0, 0, a2)
      beginShape()
      vertex(240, 189)
      vertex(240, 180)
      vertex(245, 175)
      vertex(255, 175)
      vertex(260, 180)
      vertex(260, 189)
      vertex(257, 184)
      vertex(250, 184)
      vertex(245, 180)
      vertex(243, 184)
      endShape(CLOSE)

      //Right Hand + Gun = Handgun
      fill(255, 225, 0, a2)
      rect(245, 190, 5, 5)
      fill(225, 172, 150, a2)
      rect(244, 196, 7, 10)
    pop()
  }

//Red Fade in
  if(playTime > 36000){
    eg -= .5
    eb -= .5
  }
}
