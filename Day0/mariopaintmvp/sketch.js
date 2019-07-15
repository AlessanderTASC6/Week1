let value = 0;

function setup(){

    createCanvas(500,500);
    // background(0,0,0)

}

function draw(){

ellipse(random([value]),random([value]),value)

}

function mouseDragged() {
    value = value + 5;
    if (value > 255) 
      value = 0;
    }





