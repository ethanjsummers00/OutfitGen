let topVar = [];
let bottomVar;
let shoesVar;

let topChoices = 3;
let bottomChoices = 3
//let shoesChoices = []

function preload() {
  let top1 = loadImage('/images/fakeTop1.png');
  let top2 = loadImage('/images/fakeTop2.png');
  let top3 = loadImage('/images/fakeTop3.png');
  topVar = [top1, top2, top3];
}


function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);

  imageMode(CENTER);
  let top = random(topVar);
  image(top, 450, 150);

  noLoop();
}
