
let x = 50
let clicked = false
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}


function draw() {
  push();
    translate (0,100);
    drawBackground();
  pop()

  draw8ball(x,250);
  draw7ball(250,250);
  x++
  if(x >= 250)
    drawEye(250,250)

    
    // HIDDEN CREATURE CALLING FUNCTION
    drawFlower(250, 227, 0.49);

  }
  
  function drawBackground(){
      background('#EAD6A1');
    //green felt
    fill('#0C7734')
    rect(0,0,400,300)
    strokeWeight(8)
    push();
    //shadow
    fill('#033500')
    noStroke()
    rect(0,0,400,120)
    pop()
    strokeWeight(8)
    //rail
    fill('#883D27')
    rect(0,0,400,75)
    //pool pocket
    fill('#17242F')
    strokeWeight(8)
    ellipse(400,82,250,170)
    fill(0)
    ellipse(400,82,200,120)
  }
  
  function drawEye(eyex,eyey){
   //eye
   push();
   translate(eyex,eyey)
   stroke(8)
   fill('#F4F0FF')
   ellipse(0,0,180);
   strokeWeight(8);
   //pupil
   fill('#800000');
   ellipse(0,-20,70);
   fill('#17242F');
   //highlight
   ellipse(0,-20,30);
   fill(255);
   push();
   noStroke()
   ellipse(-12,-30,20);
  
   pop();
  }
  
  function draw8ball(ballx,bally){
   //8 ball code
  push();
  translate(ballx,bally)
  strokeWeight(8);
  fill('#17242F');
  ellipse(0,-80,150);
  fill(255);
  ellipse(0,-100,90);
  //8 ball text
  noFill();
  ellipse(0,-90,30);
  ellipse(0,-115,20);
  pop();
  
  }
  
  function draw7ball(x,y){
    //Ball
  push();
  translate(x,y)
  strokeWeight(9);
  fill('#800000');
  ellipse(0,0,180);
  fill('#F4F0FF');
  ellipse(0,0,80)
  
  //7 text
  line(10,-19,0,25)
  line(10,-19,-12,-19)
  pop();
  }
  function mouseClicked(){
   if (x > 50)
   x = 50
    }
  }

  //---- HIDDEN SURPRISE FUNCTION!!!-----
  function drawFlower(flowerX, flowerY, flowerSC){
    push();
    translate(flowerX, flowerY);
    scale(flowerSC);
    //----- STEM -------
    push();
    fill(50, 100, 20);
    stroke(0, 150, 0);
    strokeWeight(2);
      quad(0, 150, 70, 125, 110, 150, 70, 175);
      quad(0, 150, -70, 125, -110, 150, -70, 175);
      rect(-15, 0, 30, 250, 10);
    pop();
    //----FLOWER----
    push();
     scale(0.8);
     fill(170, 220, 250);
     stroke(190, 240, 250);
     strokeWeight(3);
    // --- PETALS ---
     ellipse(-60, 70, 150, 160);
     ellipse(60, 70, 150, 160);
     ellipse(90, -35, 160);
     ellipse(-90, -35, 160);
      ellipse(0, -100, 150, 160);
    // --- CENTER OF FLOWER ---
     fill(250, 220, 180)
     stroke(250, 230, 230);
     ellipse(0, 0, 200, 120);
    pop();
    pop();
    // ---- EYE -----
     push();
    translate (flowerX, flowerY);
    scale(0.4);
    //--- EYELID ---
    fill(250, 220, 180);
    stroke(250, 230, 230);
    strokeWeight(2);
    ellipse(0, 0, 250, 150);
    push();
    //----EYE---
    fill(250);
    arc(0, 0, 247, 117, 0, PI);
    arc(0, 0, 247, 117, PI, 0);
    pop();
    //----PUPIL---
    noStroke();
    fill(0, 100, 230);
    ellipse(0, -5, 100);
    fill(0);
    ellipse(0, -5, 60);
    fill(250);
    ellipse(-10, -25, 15, 20);
   pop();
  }

