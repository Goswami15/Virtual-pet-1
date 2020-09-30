//Create variables here
var image;
var image2;
var foodS;
var foodStock;
var database;
var dog;
function preload()
{
  image=loadImage("images/dogImg.png");
image2=loadImage("images/dogImg1.png")
  
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,20,20);
  dog.addImage("image",image);

database=firebase.database();
foodStock=database.ref('Food').on("value",readStock,readError);



  
}


function draw() {  
background(46,139,87);

  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
}


function writeStock(x){
  if(x<=0){
    x=0
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readError(){
  console.log("db not working properly");
}

