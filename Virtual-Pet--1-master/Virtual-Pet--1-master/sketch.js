//Create variables here
var dog, happyDog, database, foodS, foodStock,dog1;
function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  dog = createSprite(200,200,20,20);
  dog.addImage(dog1);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  dog.scale = 0.1
  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  text(foodS,200,300);

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}



