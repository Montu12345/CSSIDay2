let dvdImage;

function setup(){
  createCanvas(800, 600);
  
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
 
  
  //setting the dimentions of the image
  imageWidth = 200
  imageHeight = 150
  
  //velocities of how fast the image moves around the screen
  masterVelocity = 3
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  
  x = 50;
  y = 50;
  background(220);
}

function draw(){
  
  //if the x-position of the image is outside of the canvas dimentions, make the image bounce back by changing the velocity
  if (x > (width - imageWidth)){
    xVelocity = -masterVelocity;
  }
  else if (x < 0) {
    xVelocity = masterVelocity;
  }
  x += xVelocity;
  
  //if the y-position of the image is outside of the canvas dimentions, make the image bounce back by changing the velocity
  if (y > (height - imageHeight)){
    yVelocity = -masterVelocity;
  }
  else if (y < 0) {
    yVelocity = masterVelocity;
  }
  y += yVelocity;
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, imageWidth, imageHeight);
  image(cakeImage, 400, 400, imageWidth, imageHeight)
}
