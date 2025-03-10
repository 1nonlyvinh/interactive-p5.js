let sunHeight;
let horizon = 600;


function setup() {
  createCanvas(1600, 800);
  background('lightblue');
}
function draw() {   
    //sun follows y-coordinate of mouse
    sunHeight = mouseY;

    if (sunHeight < horizon) {
        background("lightblue"); // blue sky if above horizon
    } else {
        background(0); // night sky otherwise
    }

    //sun
    fill("yellow");
    circle(700, sunHeight, 100);


    // draw line for horizon
    stroke('green');
    line(0,horizon,400,horizon);

    fill(110, 100, 40);
    triangle(500, 800,900, 400, 0, 800);
    fill(110,95,20);
    triangle(500,800,900,400,1400,800); 
   
    fill(150, 85, 0);
    triangle(-100, 800, 150, 500, 400, 800);
    fill(120, 80, 0);
    triangle(-100, 800, 150, 500, 0, 800);
   
    fill(150, 100, 0);
    triangle(200, 800, 450, 400, 800, 800);
    fill(120, 80, 50);
    triangle(200, 800, 450, 400, 300, 800);

    fill(150, 100, 0);
    triangle(200, 800, 450, 400, 800, 800);
    fill(120, 80, 50);
    triangle(200, 800, 450, 400, 300, 800);
    
    fill(150, 100, 0);
    triangle(800, 800, 1200, 400, 1600, 800);
    fill(120, 80, 50);
    triangle(1400, 800, 1200, 400, 2000, 800);
};

