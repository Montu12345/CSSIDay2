let dvdImage;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  masterVelocity = 3
  imageWidth = 200
  imageHeight = 150
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  x = 50;
  y = 50;
  background(220);
}

function draw(){
  
  if (x > (width - imageWidth)){
    xVelocity = -masterVelocity;
  }
  else if (x < 0) {
    xVelocity = masterVelocity;
  }
  
  if (y > (height - imageHeight)){
    yVelocity = -masterVelocity;
  }
  else if (y < 0) {
    yVelocity = masterVelocity;
  }
  
  x += xVelocity;
  y += yVelocity;
  
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, imageWidth, imageHeight);
  image(cakeImage, 400, 400, imageWidth, imageHeight)
}

/*
if (x>600 || y>(600-150)){
    xVelocity = -3;
    yVelocity = -3;
  }
  else if (x < 0 || y < 0) {
    xVelocity = 3;
    yVelocity = 3;
  }
  x += xVelocity;
  y += yVelocity;
*/