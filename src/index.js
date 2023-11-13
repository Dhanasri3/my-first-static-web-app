// script.js
const story = {
  start: {
    text: "You find a mysterious map that leads to a hidden treasure. What do you do?",
    choices: ["Follow the map immediately", "Ask for advice first"],
    consequences: ["treasureMap", "askForAdvice"]
  },
  treasureMap: {
    text: "The map leads you to a dark forest. You hear a growl. What's your next move?",
    choices: ["Face the growl", "Run away"],
    consequences: ["faceGrowl", "runAway"]
  },
  askForAdvice: {
    text: "You ask an old wise man for advice. He suggests two paths. Which one do you choose?",
    choices: ["Left path", "Right path"],
    consequences: ["leftPath", "rightPath"]
  },
  // Continue the story with more stages and endings
};

let currentStage = "start";
let currentChoice = 0;

async function startGame() {
  currentStage = "start";
  currentChoice = 0;
  await updatePage();
}

async function updatePage() {
  const stage = story[currentStage];
  document.getElementById("story").innerText = stage.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  for (let i = 0; i < stage.choices.length; i++) {
    const choiceBtn = document.createElement("button");
    choiceBtn.innerText = stage.choices[i];
    choiceBtn.addEventListener("click", () => makeChoice(i));
    choicesDiv.appendChild(choiceBtn);
  }

  await loadImage(stage.images[currentChoice]);
}

function makeChoice(choiceIndex) {
  const stage = story[currentStage];
  currentChoice = choiceIndex;
  const nextStage = stage.consequences[choiceIndex];
  currentStage = nextStage;
  updatePage();
}

async function loadImage(imageUrl) {
  const imageDiv = document.getElementById("image");
  const img = new Image();
  img.src = imageUrl;

  return new Promise((resolve) => {
    img.onload = () => {
      imageDiv.innerHTML = "";
      imageDiv.appendChild(img);
      resolve();
    };
  });
}

startGame();
