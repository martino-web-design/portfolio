// ---- Color Palette -----

var sliderH = document.querySelector('#sliderH');
var sliderS = document.querySelector('#sliderS');
var sliderL = document.querySelector('#sliderL');
var outputH = document.querySelector('#outputH');
var outputS = document.querySelector('#outputS');
var outputL = document.querySelector('#outputL');
var squareRGB = document.querySelector('.squareRGB');
var sliderGroup = document.querySelector('#sliderGroup');
var sel = document.querySelector('select');
var format = document.querySelector('#format');
var labelH = document.querySelector('#labelH');
var labelS = document.querySelector('#labelS');
var labelL = document.querySelector('#labelL');

sel.value = "rgb";

sliderH.value = 255;
sliderS.value = 0;
sliderL.value = 0;

var a = sliderH.value;
var b = sliderS.value;
var c = sliderL.value;

squareRGB.style.backgroundColor = "rgb("+a+","+b+","+c+")";

outputH.textContent = a;
outputS.textContent = b;
outputL.textContent = c;

// Function formats to RGB or HSL settings on select
function changeValues(){
    if(sel.value == "hsl"){
      format.textContent = "HSL values";
      sliderH.max = 360;
      sliderS.max = 100;
      sliderL.max = 100;
      sliderH.min = 1;
      sliderS.min = 1;
      sliderL.min = 1;
      a = sliderH.value = 180;
      b = sliderS.value = 50;
      c = sliderL.value = 50;
      outputH.textContent = a;
      outputS.textContent = b + "%";
      outputL.textContent = c + "%";
      labelH.textContent = "H: ";
      labelS.textContent = "S: ";
      labelL.textContent = "L: ";

      squareRGB.style.backgroundColor = "hsl("+a+","+b+"%"+","+c+"%)";
    }
    else if(sel.value == "rgb"){
      format.textContent = "RGB values";
      sliderH.max = 255;
      sliderS.max = 255;
      sliderL.max = 255;
      sliderH.min = 0;
      sliderS.min = 0;
      sliderL.min = 0;
      a = sliderH.value = 255;
      b = sliderS.value = 0;
      c = sliderL.value = 0;
      outputH.textContent = a;
      outputS.textContent = b;
      outputL.textContent = c;
      labelH.textContent = "R: ";
      labelS.textContent = "G: ";
      labelL.textContent = "B: ";

      squareRGB.style.backgroundColor = "rgb("+a+","+b+","+c+")";
    }
}; // end changeValues

// Function to output color change to square
function changeSquare(){
  if(sel.value == "rgb"){
  squareRGB.oninput =squareRGB.style.backgroundColor = "rgb("+a+","+b+","+c+")";
  }
  else if(sel.value == "hsl"){
  squareRGB.oninput =squareRGB.style.backgroundColor = "hsl("+a+","+b+"%"+","+c+"%)";
  }
  else{
    squareRGB.oninput =squareRGB.style.backgroundColor = "rgb("+a+","+b+","+c+")";
  }
};
// Sliders apply value changes on input
sliderH.oninput = function(){
  outputH.textContent = this.value;
  a= sliderH.value;
  changeSquare();
};

sliderS.oninput = function(){
  if(sel.value == "rgb"){
    outputS.textContent = this.value;
  }
  else if(sel.value == "hsl"){
    outputS.textContent = this.value + "%";
  }
  b= sliderS.value;
  changeSquare();
};

sliderL.oninput = function(){
  if(sel.value == "rgb"){
    outputL.textContent = this.value;
  }
  else if(sel.value == "hsl"){
    outputL.textContent = this.value + "%";
  }
  c= sliderL.value;
  changeSquare();
};
