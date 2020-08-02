

var fgImage = null;
var fgCanvas;

function loadImage() {
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  fgCanvas = document.getElementById("fgcan");
  fgImage.drawTo(fgCanvas);
  var display = document.getElementById("size");
  var height = fgImage.getHeight();
  var width = fgImage.getWidth();
  display.innerText = (`${height} X ${width}`);
}


function doGrayscale1() {
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  for (var pixel of output.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var img = fgImage.getPixel(x,y);
    var r = img.getRed();
    var g = img.getGreen();
    var b = img.getBlue();
    var avg = (r+g+b)/3;
    var ans = Math.floor(avg);
    pixel.setRed(ans);
    pixel.setGreen(ans);
    pixel.setBlue(ans);    
  }
  return output;
}

function doGrayscale() {  
  if (fgImage == null  || ! fgImage.complete()) {
    alert("image not loaded");
  }
  // clear canvases
  clearCanvas();
  var finalImage = doGrayscale1();
  finalImage.drawTo(fgCanvas);
}


function clearCanvas() {
  doClear(fgCanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}



function doRed1(){
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  for (var pixel of output.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var img = fgImage.getPixel(x,y);
    // var r = img.getRed();
    var g = img.getGreen();
    var b = img.getBlue();
    // var avg = (r+g+b)/3;
    // var ans = Math.floor(avg);
    pixel.setRed(255);
    pixel.setGreen(g);
    pixel.setBlue(b);    
  }
  return output;

}
function doRed(){
  if (fgImage == null  || ! fgImage.complete()) {
    alert("image not loaded");
  }
  // clear canvases
  clearCanvas();
  var finalImage = doRed1();
  finalImage.drawTo(fgCanvas);

}
