let sunHeight; // var for sun height
let horizon = 600; // var for horizon line
let circles = []; // array to store random circles
let shapes = []; // array to store random shapes
let bgColor; // background color of everything
let button; // change background color when sun is below horizon line


function setup() { // setup canvas, creates button 2 change background color
  createCanvas(1600, 800);
  button = createButton('Change Background');

  button.position(20, 20);
  button.mousePressed(changeBackground);
  bgColor = ('black');
}

function draw() { // a lot of stuff
    sunHeight = mouseY; // sets height of sun to mouse y-value

    background(bgColor);  // sets background color

    if(sunHeight < horizon){ // conditional, sets background color to dif color when sun sets
        background("lightblue");
    }

  for (let i = shapes.length - 1; i >- 0; i--) { // loop that updates the shape array when mouse is clicked
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

    // mountain 1
    fill(110, 100, 40);
    triangle(500, 800,900, 400, 0, 800);
    fill(110,95,20);
    triangle(500,800,900,400,1400,800); 
   
    //mountain 2
    fill(150, 85, 0);
    triangle(-100, 800, 150, 500, 400, 800);
    fill(120, 80, 0);
    triangle(-100, 800, 150, 500, 0, 800);
   
    // mountain 3 
    fill(150, 100, 0);
    triangle(200, 800, 450, 400, 800, 800);
    fill(120, 80, 50);
    triangle(200, 800, 450, 400, 300, 800);

    // mountain 4
    fill(150, 100, 0);
    triangle(200, 800, 450, 400, 800, 800);
    fill(120, 80, 50);
    triangle(200, 800, 450, 400, 300, 800);
    
    //mountain 5
    fill(150, 100, 0);
    triangle(800, 800, 1200, 400, 1600, 800);
    fill(120, 80, 50);
    triangle(1400, 800, 1200, 400, 2000, 800);

};

function mousePressed() { // function when click, creates shape
    shapes.push(new Shape(mouseX, mouseY));
}

function createCircle(x, y) { // creates shape and pushes it to array
    circles.push(new Circle(x,y)); 
}

class Circle { // defines what the circle is 
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    output() { // appearance of circle
        fill(circleColor);
        noStroke();
        ellipse(this.x, this.y, circleSize);
    }
}


class Shape { // characteristics / physics of shapes that appear when click
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20,50);
        this.speed = 0;
        this.gravity = 0.5 
        this.shapeType = random ([0,1])
        this.color = color(random(255), random(255), random(255));
    }

    update() { // update spedd shapes fall
        this.speed += this.gravity; 
        this.y += this.speed; 
    }

    display() { //r randomizes circle or rectangle, changes size
        fill(this.color);
        noStroke();
        if (this.shapeType === 0) {
            ellipse(this.x, this.y, this.size);
        } else {
            rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        }
    }
}

function changeBackground() { // when button clicked, randomizes color of night background 
    bgColor = color(random(255), random(255), random(255));
}
