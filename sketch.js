//Create variables here
var dog,dogImg,dogImg1; 
var foodStock,foodS;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  dogImg1 = loadImage("images/dog1.png");
  bg = loadImage("images/kennel.jpg");

}

function setup() {
  database=firebase.database();
  createCanvas(1100, 800);
  dog= createSprite(800,600,150,150);
  dog.addImage(dogImg);

 
  foodStock = database.ref('food');
  foodStock.on("value",readStock)

}


function draw() {  
 
  background("green");


  


 
  if(keyWentDown("space")){
    console.log("hii")
    writeStock(foodS);
    dog.addImage(dogImg1);
  }


  drawSprites();
  //add styles here




  textSize(45);
  fill(255, 255, 255);
  textFont("Georgia");
  text("Virtual Pet",400,100);



}
function readStock(data){
  foodS =data.val();
  console.log(foodS);
}
function writeStock(x){
if(x<=0){
  x=0;
}
else{
x=x-1;
}

  database.ref('food').update({
    
    food:x
  })
}
