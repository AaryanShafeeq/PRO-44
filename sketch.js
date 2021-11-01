const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let rocket, rocketImg;
let meteorImg, starImg;
let meteor, star;
let bg, bgImg;

let meteorGroup = new Group()

function preload() {
  rocketImg = loadImage("assets/rocket.png");
  meteorImg = loadImage("assets/meteor.png");
  starImg = loadImage("assets/star.png");
  bgImg = loadImage("assets/background.png");
}

function setup() {
  createCanvas(700, 800);
  engine = Engine.create();
  world = engine.world;

  bg = createSprite(width / 2, height / 2, 700, 800);
  bg.addImage("background", bgImg);
  bg.scale = 6.0;

  rocket = createSprite(width / 2, 600, 50, 50);
  rocket.addAnimation("rocket", rocketImg);
  rocket.scale = 0.2
}


function draw() {
  background(255);
  Engine.update(engine);

  bg.velocityY = 6;
  if (bg.y > height) {
    bg.y = height / 2;
  }

  if (keyDown("right_arrow")) {
    rocket.x += 5;
  }

  if (keyDown("left_arrow")) {
    rocket.x += -5;
  }

  drawSprites();
}
