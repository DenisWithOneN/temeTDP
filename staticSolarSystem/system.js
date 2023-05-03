function setup() {
    let cnv = createCanvas(1000, 450);
    cnv.position(150, 50);
}

function draw() {
    background("#white");
    skelet();
    sun();
    planets();


    
    
}

function skelet() {

    //ellipse(x, y, w, [h])

let ellipseX = (width / 2) - Math.floor(50 / 2);
let ellipseY = (height / 2) - Math.floor(50 / 2);

    noFill();
    ellipse(ellipseX, ellipseY, 300, 250);
    ellipse(ellipseX, ellipseY, 370, 270);
    ellipse(ellipseX, ellipseY, 500, 300);
    ellipse(ellipseX, ellipseY, 700, 320);
    ellipse(ellipseX, ellipseY, 950, 350);

}

function sun() {

let sunX = (width / 2) - Math.floor(50 / 2);
let sunY = (height / 2) - Math.floor(50 / 2);
let sunSize = 80;

    fill("#ffff00");
    circle(sunX, sunY, sunSize);
    for (let i = 0; i < 8; i++) {
    push();
    translate(sunX, sunY);
    rotate(i * TWO_PI / 8);
    triangle(65, 0, 45, sunSize / 8, 45, -sunSize / 8);
    pop();
}

}


function planets() {

    fill("violet")
    circle(235, 160, 60)

    fill("pink")
    circle(293, 190, 40)

    fill("lightblue")
    circle(363, 120, 30)

    fill("lightgreen")
    circle(800, 140, 80)

    fill("darkgreen")
    circle(920, 260, 80)
}

