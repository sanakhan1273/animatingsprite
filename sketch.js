let img
let imgs = []
let imgCounter = 0
function preload() {
  img = loadImage ('her.png')
}

function setup() {
  createCanvas(800, 600)
  frameRate(4)
  for (let i = 0; i < 4; i ++){
    imgs[i] = img.get( i * 540 + 10, 400, 512, 2048)
  }
}

function draw(){
  background(255)
  //image(imgs[0], 0, 0, 100, 100)
  //textSize(30)
  //text('hi this is really nice', 200, 70)
  image(imgs[imgCounter], 0, 100, 200, 800)

  if(imgCounter < imgs.length -1 ){
    imgCounter++
  }else{
    imgCounter = 0
  }
}