var polarBear,polarBearImg;
var bg;
var boy;
var p1, p1Img, p2, p2Img, p3, p3Img, p4, p4Img, p5, p5Img;
var level;
var game, player, form;
var gameState = 0;
var point; 
var answer;
var optionA, optionB, optionC; 
var optionA1, optionB1, optionC1; 
var optionA2, optionB2, optionC2;
var optionA3, optionB3, optionC3;
var  optionA4, optionB4, optionC4;
var optionA5, optionB5, optionC5;
var answerA, answerB, answerC,
var answerA1, answerB1, answerC1;
var answerA2, answerB2, answerC2;
var answerA3, answerB3, answerC3;
var answerA4, answerB4, answerC4;
var answerA5, answerB5, answerC5;
var question1, question2, question3, question4, question5;

function preload(){
polarBearImg = loadImage("images/PolarBear.png");

p1Img = loadImage("images/p1.png");
p2Img = loadImage("images/p2.png");
p3Img = loadImage("images/p3.png");
p4Img = loadImage("images/p4.png");
p5Img = loadImage("images/p5.png");
}

function setup(){
    createCanvas(displayWidth-15,displayHeight-120);
   
    point = createSprite(200, 200, 10 , 10);
    point.visible = false ;
    gameState = 0;

    optionA = createSprite(300, 150, 10, 10);
    optionA.shapeColor = "red";

    optionB = createSprite(300, 170, 10, 10);
    optionB.shapeColor= "blue";
    
    optionA = createSprite(300, 190, 10, 10);
    optionA.shapeColor = "yellow";

    answerA = "New York and Texas";
    answerB = "Portugal and France";
    answerC = "India and Australia";

    question1 = "Name 2 states in America ";

    question2 = "";

    if(gameState === 0){
        //game = new Game();
        //game.start();
    }

    console.log("Hello");
}

function draw(){
    point.x = mouseX;
    point.y = mouseY;

    if(gameState === 1){
        //game.play();
    }

    text(question1, 100, 100);
    text(answerA, 100, 150);
    text(answerB, 100,170);
    text(answerC, 100, 190);

    console.log("Hi");

    drawSprites();
}

