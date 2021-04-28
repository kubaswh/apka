var orginalWidth = 1920;
var orginalHeight = 1080;

var frame = document.querySelector(".iframe");
var wrapper = document.querySelector(".wrapper");


frame.style.width = `${orginalWidth}px`;
frame.style.height = `${orginalHeight}px`;



var scaling = function () {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  

  var y = windowHeight / orginalHeight;
  var x = windowWidth / orginalWidth;

  var frameWidth = frame.getBoundingClientRect().width;
  var frameHeight = frame.getBoundingClientRect().height;

 if (orginalWidth > orginalHeight ) {
  if(frameWidth < windowWidth){
    frame.style.transform = `scale(${y})`;
  } else if(frameWidth > windowWidth){
    frame.style.transform = `scale(${x})`
  }
  
    
  }
  

  
  
  console.log(windowWidth, windowHeight);
};


/**
  if(frameHeight > windowHeight){
      frame.style.transform = `scale(${y})`
    } else if (frameWidth > windowWidth){
      frame.style.transform = `scale(${x})`;
    } else {
      frame.style.transform = `scale(${x})`;
    }
 */



window.addEventListener("load", scaling);
window.addEventListener("resize", scaling);
