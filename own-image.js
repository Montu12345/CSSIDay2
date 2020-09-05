let gUpperImageX

  function setup() {
  createCanvas(800, 600);
  // load in the images
  gUpperImage= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2FbigG.png?v=1594166469326");
  o1Image= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2FredO.png?v=1594166470059");
  o2Image= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2FyellowO.png?v=1594166480081");
  gLowerImage= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2FlowerG%202.png?v=1594166489357");
  lImage= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2Fl.png?v=1594166490024");
  eImage= loadImage("https://cdn.glitch.com/2fa96652-1fec-47f6-a2a7-568ba1599edf%2Fe.png?v=1594166492578");
  
  //setting dimentions of the image
  imageWidth = 50;
  imageHeight = 50;
  
  //setting master velocity
  masterVelocity = 3;
  
  //placing the images at random locations on the canvas; gUpper = G, o1 = o, o2 = o, gLower = g, l = l, e = e
  gUpperImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  gUpperImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  gUpperImageXVelocity = masterVelocity;
  gUpperImageYVelocity = masterVelocity;
  
  o1ImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  o1ImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  o1ImageXVelocity = masterVelocity; 
  o1ImageYVelocity = masterVelocity;
    
  o2ImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  o2ImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  o2ImageXVelocity = masterVelocity;
  o2ImageYVelocity = masterVelocity;
  
  gLowerImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  gLowerImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  gLowerImageXVelocity = masterVelocity;
  gLowerImageYVelocity = masterVelocity;
  
  lImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  lImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  lImageXVelocity = masterVelocity;
  lImageYVelocity = masterVelocity;
  
  eImageX = Math.floor((Math.random() * (width - imageWidth) + 1));
  eImageY = Math.floor((Math.random() * (height - imageHeight) + 1));
  eImageXVelocity = masterVelocity;
  eImageYVelocity = masterVelocity;
      
}

// checks if the images collide with each other
 function rectIntersect(x1TopLeftCoord, y1TopLeftCoord, w1, h1, x2TopLeftCoord, y2TopLeftCoord, w2, h2) {
    if (x2TopLeftCoord > w1 + x1TopLeftCoord || x1TopLeftCoord > w2 + x2TopLeftCoord || y2TopLeftCoord > h1 + y1TopLeftCoord || y1TopLeftCoord > h2 + y2TopLeftCoord){
        return false;
    }
    return true;
}

 function draw(){
   background(220);
   
   //if the x/y-position of the gUpper is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(gUpperImageX < 0){
     gUpperImageXVelocity = masterVelocity;
   }
   else if (gUpperImageX > (width - imageWidth)){
     gUpperImageXVelocity = -masterVelocity;
   }
   if(gUpperImageY < 0){
     gUpperImageYVelocity = masterVelocity;
   }
   else if (gUpperImageY > (height - imageHeight)){
     gUpperImageYVelocity = -masterVelocity;
   }
   
   gUpperImageX += gUpperImageXVelocity;
   gUpperImageY += gUpperImageYVelocity;
   
   //if the x/y-position of the o1 is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(o1ImageX < 0){
     o1ImageXVelocity = masterVelocity;
   }
   else if (o1ImageX > (width - imageWidth)){
     o1ImageXVelocity = -masterVelocity;
   }
   if(o1ImageY < 0){
     o1ImageYVelocity = masterVelocity;
   }
   else if (o1ImageY > (height - imageHeight)){
     o1ImageYVelocity = -masterVelocity;
   }
   
   o1ImageX += o1ImageXVelocity*1.5;
   o1ImageY += o1ImageYVelocity;
   
   
   //if the x/y-position of the o2 is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(o2ImageX < 0){
     o2ImageXVelocity = masterVelocity;
   }
   else if (o2ImageX > (width - imageWidth)){
     o2ImageXVelocity = -masterVelocity;
   }
   if(o2ImageY < 0){
     o2ImageYVelocity = masterVelocity;
   }
   else if (o2ImageY > (height - imageHeight)){
     o2ImageYVelocity = -masterVelocity;
   }
   
   o2ImageX += o2ImageXVelocity;
   o2ImageY += o2ImageYVelocity*0.5;
   
   //if the x/y-position of the gLower is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(gLowerImageX < 0){
     gLowerImageXVelocity = masterVelocity;
   }
   else if (gLowerImageX > (width - imageWidth)){
     gLowerImageXVelocity = -masterVelocity;
   }
   if(gLowerImageY < 0){
     gLowerImageYVelocity = masterVelocity;
   }
   else if (gLowerImageY > (height - imageHeight)){
     gLowerImageYVelocity = -masterVelocity;
   }
   
   gLowerImageX += gLowerImageXVelocity*2;
   gLowerImageY += gLowerImageYVelocity*0.75;
   
   //if the x/y-position of the l is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(lImageX < 0){
     lImageXVelocity = masterVelocity;
   }
   else if (lImageX > (width - imageWidth)){
     lImageXVelocity = -masterVelocity;
   }
   if(lImageY < 0){
     lImageYVelocity = masterVelocity;
   }
   else if (lImageY > (height - imageHeight)){
     lImageYVelocity = -masterVelocity;
   }
   
   lImageX += lImageXVelocity*3;
   lImageY += lImageYVelocity*0.9;
   
   //if the x/y-position of the e is outside of the canvas dimentions, make the image bounce back by changing the velocity
   if(eImageX < 0){
     eImageXVelocity = masterVelocity;
   }
   else if (eImageX > (width - imageWidth)){
     eImageXVelocity = -masterVelocity;
   }
   if(eImageY < 0){
     eImageYVelocity = masterVelocity;
   }
   else if (eImageY > (height - imageHeight)){
     eImageYVelocity = -masterVelocity;
   }
   
   eImageX += eImageXVelocity*1.2;
   eImageY += eImageYVelocity; 
   
   //showing the image
   image(gUpperImage, gUpperImageX, gUpperImageY, imageWidth, imageHeight);
   image(o1Image, o1ImageX, o1ImageY, imageWidth, imageHeight);
   image(o2Image, o2ImageX, o2ImageY, imageWidth, imageHeight);
   image(gLowerImage, gLowerImageX, gLowerImageY, imageWidth, imageHeight);
   image(lImage, lImageX, lImageY, imageWidth, imageHeight);
   image(eImage, eImageX, eImageY, imageWidth, imageHeight);
   
   
   //detecting collisions between the images:
   if (rectIntersect(gUpperImageX, gUpperImageY, imageWidth, imageHeight, o1ImageX, o1ImageY, imageWidth, imageHeight) == true){
     gUpperImageXVelocity = -gUpperImageXVelocity;
     UpperImageYVelocity = -gUpperImageYVelocity;
     o1ImageXVelocity = -o1ImageXVelocity;
     o1ImageYVelocity = -o1ImageYVelocity;
   }
   if (rectIntersect(gUpperImageX, gUpperImageY, imageWidth, imageHeight, o2ImageX, o2ImageY, imageWidth, imageHeight) == true){
     gUpperImageXVelocity = -gUpperImageXVelocity;
     gUpperImageYVelocity = -gUpperImageYVelocity;
     o2ImageXVelocity = -o2ImageXVelocity;
     o2ImageYVelocity = -o2ImageYVelocity;
   }
   if (rectIntersect(gUpperImageX, gUpperImageY, imageWidth, imageHeight, gLowerImageX, gLowerImageY, imageWidth, imageHeight) == true){
     gUpperImageXVelocity = -gUpperImageXVelocity;
     gUpperImageYVelocity = -gUpperImageYVelocity;
     gLowerImageXVelocity = -gLowerImageXVelocity;
     gLowerImageYVelocity = -gLowerImageYVelocity;
   }
   if (rectIntersect(gUpperImageX, gUpperImageY, imageWidth, imageHeight, lImageX, lImageY, imageWidth, imageHeight) == true){
     gUpperImageXVelocity = -gUpperImageXVelocity;
     gUpperImageYVelocity = -gUpperImageYVelocity;
     lImageXVelocity = -lImageXVelocity;
     lImageYVelocity = -lImageYVelocity;
   }
   if (rectIntersect(gUpperImageX, gUpperImageY, imageWidth, imageHeight, eImageX, eImageY, imageWidth, imageHeight) == true){
     gUpperImageXVelocity = -gUpperImageXVelocity;
     gUpperImageYVelocity = -gUpperImageYVelocity;
     eImageXVelocity = -eImageXVelocity;
     eImageYVelocity = -eImageYVelocity;
   }
   
   
   if (rectIntersect(o1ImageX, o1ImageY, imageWidth, imageHeight, o2ImageX, o2ImageY, imageWidth, imageHeight) == true){
     o1ImageXVelocity = -o1ImageXVelocity;
     o1ImageYVelocity = -o1ImageYVelocity;
     o2ImageXVelocity = -o2ImageXVelocity;
     o2ImageYVelocity = -o2ImageYVelocity;
   }
    if (rectIntersect(o1ImageX, o1ImageY, imageWidth, imageHeight, gLowerImageX, gLowerImageY, imageWidth, imageHeight) == true){
     o1ImageXVelocity = -o1ImageXVelocity;
     o1ImageYVelocity = -o1ImageYVelocity;
     gLowerImageXVelocity = -gLowerImageXVelocity;
     gLowerImageYVelocity = -gLowerImageYVelocity;
   }
    if (rectIntersect(o1ImageX, o1ImageY, imageWidth, imageHeight, lImageX, lImageY, imageWidth, imageHeight) == true){
     o1ImageXVelocity = -o1ImageXVelocity;
     o1ImageYVelocity = -o1ImageYVelocity;
     lImageXVelocity = -lImageXVelocity;
     lImageYVelocity = -lImageYVelocity;
   }
    if (rectIntersect(o1ImageX, o1ImageY, imageWidth, imageHeight, eImageX, eImageY, imageWidth, imageHeight) == true){
     o1ImageXVelocity = -o1ImageXVelocity;
     o1ImageYVelocity = -o1ImageYVelocity;
     eImageXVelocity = -eImageXVelocity;
     eImageYVelocity = -eImageYVelocity;
   }
   
   
   if (rectIntersect(o2ImageX, o2ImageY, imageWidth, imageHeight, gLowerImageX, gLowerImageY, imageWidth, imageHeight) == true){
     o2ImageXVelocity = -o2ImageXVelocity;
     o2ImageYVelocity = -o2ImageYVelocity;
     gLowerImageXVelocity = -gLowerImageXVelocity;
     gLowerImageYVelocity = -gLowerImageYVelocity;
   }
    if (rectIntersect(o2ImageX, o2ImageY, imageWidth, imageHeight, lImageX, lImageY, imageWidth, imageHeight) == true){
     o2ImageXVelocity = -o2ImageXVelocity;
     o2ImageYVelocity = -o2ImageYVelocity;
     lImageXVelocity = -lImageXVelocity;
     lImageYVelocity = -lImageYVelocity;
   }
   if (rectIntersect(o2ImageX, o2ImageY, imageWidth, imageHeight, eImageX, eImageY, imageWidth, imageHeight) == true){
     o2ImageXVelocity = -o2ImageXVelocity;
     o2ImageYVelocity = -o2ImageYVelocity;
     eImageXVelocity = -eImageXVelocity;
     eImageYVelocity = -eImageYVelocity;
   }
   
   
   if (rectIntersect(gLowerImageX, gLowerImageY, imageWidth, imageHeight, lImageX, lImageY, imageWidth, imageHeight) == true){
     gLowerImageXVelocity = -gLowerImageXVelocity;
     gLowerImageYVelocity = -gLowerImageYVelocity;
     lImageXVelocity = -lImageXVelocity;
     lImageYVelocity = -lImageYVelocity;
   }
   if (rectIntersect(gLowerImageX, gLowerImageY, imageWidth, imageHeight, eImageX, eImageY, imageWidth, imageHeight) == true){
     gLowerImageXVelocity = -gLowerImageXVelocity;
     gLowerImageYVelocity = -gLowerImageYVelocity;
     eImageXVelocity = -eImageXVelocity;
     eImageYVelocity = -eImageYVelocity;
   }
   
   if (rectIntersect(lImageX, lImageY, imageWidth, imageHeight, eImageX, eImageY, imageWidth, imageHeight) == true){
     lImageXVelocity = -lImageXVelocity;
     lImageYVelocity = -lImageYVelocity;
     eImageXVelocity = -eImageXVelocity;
     eImageYVelocity = -eImageYVelocity;
   }
 }

