let topVar;
let bottomVar;
let shoesVar;

let top;
let bottom;
let shoes;

//let topChoices = []
//let bottomChoices = []
//let shoesChoices = []

function preload() {
  topVar = [
    "/images/faketop1.png",
    "/images/faketop2.png",
    "/images/faketop3.png"
  ];

  let topPick = floor(random(topVar.length));

  top = loadImage(topVar[pos]);
}


function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);

  image(top, 0, 0);
}
