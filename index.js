window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const background = document.querySelector("body");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    
      
      pad.addEventListener("mousedown",function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        background.style.backgroundColor = colors[index]; 
      })
      pad.addEventListener("mouseup",function(){
        
        background.style.backgroundColor = "white"; 
      })
      pad.addEventListener("click",function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        setTimeout(function(){
          background.style.backgroundColor = colors[index];
        },100);
         
      })
      pad.addEventListener("touchend",function(){
        
        background.style.backgroundColor = "white"; 
      })
   
  });

  
});
