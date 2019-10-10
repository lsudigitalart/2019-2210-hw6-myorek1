var imaaage;
var mooving;
var cnv;
var black1;
var back;
var guitar1;
var logo;
var guitarsolo;
var frankenstrat;
var x =50;
var y = 500;
var dance;
var ring;
var eddie2;
//let song = loadSound("file.mp3");


function preload(){
  //song = loadSound('jump.mp3')
 mooving = createImg("vanhalengif1.gif");
imaaage = loadImage("eddie_vanhalen.png");
logo = loadImage("Van-Halen-Deluxe-Cover_1504182152.png");
guitarsolo = loadImage("guitar_solo.png");
//guitar1 = createImg("guitar.gif");
back = createImg("blackw.gif")
frankenstrat = loadImage("frankenstrat.png");
dance = createImg("dance.gif")
ring = createImg("blackwno.gif")
eddie2 = loadImage("eruption.png");


}

function setup() {
    // Put things you want to run once in here. 

createCanvas(800,800);
//song.loop();

    strokeWeight(1)
    //background(0)

    //image(moving, 400,300);


  }
  
  function draw() {
    back.position(0,0)
    back.size(800,800)
    back.style("z-index", "-3");
    
    dance.position(210,40)
    dance.style("z-index", "-3");

    ring.position(0,0)
    ring.size(800,800);
    ring.style("z-index", "-1");
    
// drawing frankenstrat lines 


    // flying man 
     mooving.position(0,0);
     mooving.size(800,800);
    mooving.style("z-index", "-3");
    
    //rotate(30);
    //guitar1.position(470,600);
    //guitar1.size(200,200)
  
    image(imaaage,500,300);

   image(eddie2,560,0, eddie2.width/1.7,eddie2.height/1.7 );
   

    image(logo,120,300);

    image(guitarsolo, 0,0, guitarsolo.width/1.5 , guitarsolo.height/1.5);
    //image(frankenstrat,120,300,frankenstrat.width/2, frankenstrat.height/2 );

// createing a moving object // contorls for square 
if (keyIsPressed) {
  if (keyCode == LEFT_ARROW) {
  x-=3;
  }
  else if (keyCode == RIGHT_ARROW) {
  x+=3;
  }
  else if (keyCode == UP_ARROW){
    y-=3;
  }
  else if (keyCode == DOWN_ARROW){
    y+=3;
  }

}

image(frankenstrat,x,y,frankenstrat.width/3, frankenstrat.height/3 );
  }

 
  function mouseClicked(){
    // check to see if mouse is over picture
    let d = dist(mouseX, mouseY, 500,300 );
    if (d< 100){
      image(imaaage,500,300,imaaage.width*2);
    }
    else 
    image(imaaage,500,300);
  }
