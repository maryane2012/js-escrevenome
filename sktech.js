function setup() {

    createCanvas(790, 790);
    
    background("#AF20C7");
    
    }
    
    function draw() {
    
    stroke("white");
    
    fill("black");
    
    if(mouseIsPressed === true){
    
    rect(mouseX, mouseY,10, 20);
    
    }
   
    } 


