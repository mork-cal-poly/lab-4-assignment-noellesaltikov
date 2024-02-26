function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let clicked = false


function draw() {
  push();
    translate (0,100);
    drawBackground();
  pop();
    
    // HIDDEN CREATURE CALLING FUNCTION
    drawFlower(250, 227, 0.49);
  
  push();
    translate(250,250);
    draw7ball();
    draw8ball();
    
    if (clicked == true){
      drawEye();
      // draw8ball(0.5)
    }
  pop();

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
  
  function drawEye(){
     //eye
    noStroke()
    fill('#033500')
    ellipse(-50,80,180,50)
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
    noStroke()
    ellipse(-12,-30,20);
  }
  
  function draw8ball(s){
     //8 ball code
    
    noStroke();
     fill('#033500');
    ellipse(-240,-9,180,50);
    stroke(8);
    fill('#17242F');
    ellipse(-200,-80,150);
    fill(255);
    ellipse(-200,-100,90);
    scale(s)
    //8 ball text
    noFill();
    strokeWeight(8);
    ellipse(-200,-90,30);
    ellipse(-200,-115,20);
    
  }
  
  function draw7ball(){
    //Ball
    strokeWeight(9);
    push();
    noStroke()
     fill('#033500');
    ellipse(-50,80,180,50);
    pop();
    fill('#800000');
    ellipse(0,0,180);
    fill('#F4F0FF');
    ellipse(0,0,80)
    
    //7 text
    line(10,-19,0,25)
    line(10,-19,-12,-19)
  }
  
  function mouseClicked(){
    if (mouseX < 340 && 
        mouseX > 160 && 
        mouseY < 340 && 
        mouseY > 160 )
        clicked= !clicked
      // if (mouseX < 0 && 
      //   mouseX > 150 && 
      //   mouseY < -50 && 
      //   mouseY > 150 )
      //   clicked= !clicked
  
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