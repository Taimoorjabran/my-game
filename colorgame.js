var numSquares = 42;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 14;
  colors = generateRandomColors(numSquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  for(var i =0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

  mediumBtn.addEventListener ("click", function(){
  easyBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 28;
  colors = generateRandomColors(numSquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  for(var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";

    }
  }

});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    numSquares = 42;
   colors = generateRandomColors(numSquares);
   pickedcolor = pickColor();
    for(var i =0; i < squares.length; i++){
    
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
 //pick a new colr from array
  pickedcolor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedcolor;
  //change colors of squares
  messageDisplay.textContent = "";
  for(var i =0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  })


   colorDisplay.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to square
 squares[i].addEventListener("click", function(){
  // grab color of clicked square
  var clickedColor = this.style.background;
  // compare color to pickedColor
  console.log(clickedColor, pickedcolor);
 if(clickedColor === pickedcolor){
    messageDisplay.textContent = "correct!";
    resetButton.textContent = "Play Again?"
    changeColors(clickedColor);
    h1.style.background = clickedColor;
   } else {
    this.style.background = "#232323";
    messageDisplay.textContent = "Try Again";
  }
 });
}

function changeColors(color){

 //loop through all squares
 for(var i = 0; i < squares.length; i++){
  //change each color to match given color
  squares[i].style.background = color;
 }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
  //repeat num
  var arr = []
  //repeat num times
  for(var i=0; i < num; i++){
    //get random color and push into arr

    arr.push(randomColor())
  } 
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red"from 0 - 255
 var r = Math.floor(Math.random() * 256);
  //pick a "green"from 0 - 255
 var g = Math.floor(Math.random() * 256);
 //pick a "blue"from 0 - 255
 var b = Math.floor(Math.random() * 256);
 return"rgb(" + r + ", " + g + ", " + b + ")";

}



var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetbutton =document.getElementById("raset");
var numInput = document.querySelector("input");  
var winningScoreDisplay = document.querySelector("b span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 7;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
	if(p1Score === winningScore){
		p1Display.classList.add("winner");
		gameOver = true;
	    }
     p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
	if(p2Score === winningScore){
		p2Display.classList.add("winner");
		gameOver = true;
	    }
     p2Display.textContent = p2Score;
    }
});
resetbutton.addEventListener("click", function(){
	raset();
}); function raset(){
    p1Score =0;
	p2Score =0;
	p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	raset();
});