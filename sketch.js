let sunHeight;
let horizon = 600;
let circles = [];
let shapes = []; 


function setup() {
  createCanvas(1600, 800);
}

function draw() {   
    background('black');
    sunHeight = mouseY;

    if(sunHeight < horizon){
        background("lightblue");
    }

  for (let i = shapes.length - 1; i >- 0; i--) {
        shapes[i].update();
        shapes[i].display();
    if (shapes[i].y > height + 50) {
        shapes.splice(i, 1);
    }
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

function mousePressed() {
    shapes.push(new Shape(mouseX, mouseY));
}

function createCircle(x, y) {
    circles.push(new Circle(x,y)); 
}

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    output() {
        fill(circleColor);
        noStroke();
        ellipse(this.x, this.y, circleSize);
    }
}


class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20,50);
        this.speed = 0;
        this.gravity = 0.5 
        this.shapeType = random ([0,1])
        this.color = color(random(255), random(255), random(255));
    }

    update() {
        this.speed += this.gravity; 
        this.y += this.speed; 
    }

    display() {
        fill(this.color);
        noStroke();
        if (this.shapeType === 0) {
            ellipse(this.x, this.y, this.size);
        } else {
            rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        }
    }
}
