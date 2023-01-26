// console.log("Hello");
// let Engine = Matter.Engine,
// Render = Matter.Render,
// World = Matter.World,
// Bodies = Matter.Bodies;
//
// let engine, world;
// let ball, ground;
//
// let imgbox, img_ground, bg_img, tower;
//
// function preload(){
//     imgbox = loadImage(imgURL);
//     img_ground = loadImage(groundURL);
//     bg_img = loadImage(backgroundURL);
//     tower_img = loadImage(towerURL);
// }
//
//
// function setup(){
//
//     createCanvas(1000, 600);
//    engine = Engine.create();
//     world = engine.world;
//
//    ball = new Weapon(200,200,50);
//      ball = new Box(40, -120, 150, 120,color(0,255,0),false, imgbox);
//    ground = new Box(0,540, 1000, 120,color(0,255,0),true, img_ground);
//    tower = new Box(40, 120, 150, 120 , 'none', false, tower_img);
// }
//
// function draw(){
//
//     background(0);
//     Matter.Engine.update(engine);
//
//     ball.show();
//     ground.show();
//     tower.show();
//     //image(imgbox,0,0,100,100);
//
// }