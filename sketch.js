
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hexo,ground2,state;
var box = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","21","22","23","24","20"];
var ropes;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	state = 1;

	ground = new Ground(width/2,350,300,10);
	ground2 = new Ground(830,250,200,10)
	hexo = new Hex();

	ropes = new Chain(hexo.body,{x:100, y:300});

  // Stack1 
	// bottom
	box[0] = new Box(390,320);
    box[1] = new Box(425,320);
	box[2] = new Box(460,320);
	box[3] = new Box(495,320);
	box[4] = new Box(530,320);
    box[5] = new Box(565,320);
	box[6] = new Box(600,320);

	// level2
	box[7] = new Box(425,270);
	box[8] = new Box(460,270);
	box[9] = new Box(495,270);
	box[10] = new Box(530,270);
	box[11] = new Box(565,270);

	// level3
	box[12] = new Box(460,220);
	box[13] = new Box(495,220);
	box[14] = new Box(530,220);

	// top
	box[15] = new Box(495,170);


  //Stack 2
	// bottom
	box[16] = new Box(760,220);
 	box[17] = new Box(795,220);
	box[18] = new Box(830,220);
	box[19] = new Box(865,220);
	box[20] = new Box(900,220);

	// level2
	box[21] = new Box(795,170);
	box[22] = new Box(830,170);
	box[23] = new Box(865,170);

	// top
	box[24] = new Box(830,120);

	Engine.run(engine);
}


function draw() {
  background(rgb(56,44,44));

  imageMode(CENTER);

  ground.display();
  ground2.display();
  ropes.display();
  hexo.display();

  // Stack1

  // bottom
  box[0].display(rgb(134,205,233));
  box[2].display(rgb(134,205,233));
  box[1].display(rgb(134,205,233));
  box[3].display(rgb(134,205,233));
  box[4].display(rgb(134,205,233));
  box[5].display(rgb(134,205,233));
  box[6].display(rgb(134,205,233));

  // level2
  box[7].display(rgb(254,191,202));
  box[8].display(rgb(254,191,202));
  box[9].display(rgb(254,191,202));
  box[10].display(rgb(254,191,202));
  box[11].display(rgb(254,191,202));

  // level3
  box[12].display(rgb(62,223,207));
  box[13].display(rgb(62,223,207));
  box[14].display(rgb(62,223,207));

 // top
  box[15].display(127);

//Stack2
 // bottom
 box[16].display(rgb(134,205,233));
 box[17].display(rgb(134,205,233));
 box[18].display(rgb(134,205,233));
 box[19].display(rgb(134,205,233));
 box[20].display(rgb(134,205,233));

 // level2
 box[21].display(rgb(254,191,202));
 box[22].display(rgb(254,191,202));
 box[23].display(rgb(254,191,202));

 // top
 box[24].display(rgb(62,223,207));

if (state===2&&keyDown("space")){

	Matter.Body.setPosition(hexo.body, {x:100,y:300})
	ropes = new Chain(hexo.body,{x:100, y:300});
	state = 1
}
textSize(20);
text("Press Space To Get One More Chance",50,50);
}
function mouseDragged(){

    Matter.Body.setPosition(hexo.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    ropes.fly();
	state = 2;
}