// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/2NQeUUkWn/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(255);

  // Draw the video
  image(video, 300 , 0 , 100, 100);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(label, width / 2, height / 2);

  // Pick an emoji, the "default" is train
  let emoji = "";
  if (label == "Hi! Bavishya") {
    emoji = "Wish You Many More Happy Returns Of The Day";
  } else if (label == "Hi! Vineeth") {
    emoji = "Today Not Your Birthday.\n Have A Nice Day";
  } else if (label == "Hi! Ganesh") {
    emoji = "Today Not Your Birthday.\n Have A Nice Day";
  }

  // Draw the emoji
  textSize(32);
  text(emoji, width / 2, height / 1.5);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
