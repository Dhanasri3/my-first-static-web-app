// script.js
const story = {
  start: {
    text: "You find a mysterious map that leads to a hidden treasure. What do you do?",
    choices: ["Follow the map immediately", "Ask for advice first"],
    consequences: ["treasureMap", "askForAdvice"],
    images: ["map.jpg", "advice.jpg"]
  },
  treasureMap: {
    text: "The map leads you to a dark forest. You hear a growl. What's your next move?",
    choices: ["Face the growl", "Run away"],
    consequences: ["faceGrowl", "runAway"],
    images: ["forest.jpg", "growl.jpg"]
  },
  askForAdvice: {
    text: "You ask an old wise man for advice. He suggests two paths. Which one do you choose?",
    choices: ["Left path", "Right path"],
    consequences: ["leftPath", "rightPath"],
    images: ["wiseMan.jpg", "paths.jpg"]
  },
  faceGrowl: {
    text: "You confront a bear! What's your strategy?",
    choices: ["Play dead", "Fight the bear"],
    consequences: ["playDead", "fightBear"],
    images: ["bear.jpg", "fight.jpg"]
  },
  runAway: {
    text: "You run as fast as you can. You encounter a river. How do you cross it?",
    choices: ["Swim across", "Look for a bridge"],
    consequences: ["swimAcross", "findBridge"],
    images: ["river.jpg", "bridge.jpg"]
  },
  leftPath: {
    text: "The left path takes you through a magical garden. You feel a strange energy. What do you do?",
    choices: ["Touch a glowing flower", "Continue without touching anything"],
    consequences: ["touchFlower", "continueWithoutTouching"],
    images: ["garden.jpg", "flower.jpg"]
  },
  rightPath: {
    text: "The right path leads to a cave entrance. It's dark inside. What's your light source?",
    choices: ["Use a torch", "Use your phone flashlight"],
    consequences: ["useTorch", "usePhoneFlashlight"],
    images: ["cave.jpg", "torch.jpg"]
  },
  playDead: {
    text: "The bear sniffs you and loses interest. You survived! Continue your quest.",
    choices: ["Explore further", "Rest for a while"],
    consequences: ["exploreFurther", "restForAWhile"],
    images: ["survived.jpg", "explore.jpg"]
  },
  fightBear: {
    text: "You bravely fight the bear but it's too strong. You are injured and must abandon the quest.",
    choices: ["Start a new adventure"],
    consequences: ["startNewAdventure"],
    images: ["injured.jpg"]
  },
  swimAcross: {
    text: "You successfully swim across the river. On the other side, you find a hidden cave.",
    choices: ["Enter the cave", "Rest by the river"],
    consequences: ["enterCave", "restByRiver"],
    images: ["caveEntrance.jpg", "rest.jpg"]
  },
  findBridge: {
    text: "You find a sturdy bridge and cross the river safely. On the other side, you see a mysterious castle.",
    choices: ["Approach the castle", "Explore the surroundings"],
    consequences: ["approachCastle", "exploreSurroundings"],
    images: ["castle.jpg", "bridgeCrossed.jpg"]
  },
  touchFlower: {
    text: "The moment you touch the glowing flower, you feel rejuvenated. The path ahead becomes clear.",
    choices: ["Follow the illuminated path", "Rest for a while"],
    consequences: ["followIlluminatedPath", "restForAWhile"],
    images: ["rejuvenated.jpg", "illuminatedPath.jpg"]
  },
  continueWithoutTouching: {
    text: "You choose not to touch anything. The path gets darker, but you press on.",
    choices: ["Use a light source", "Continue cautiously"],
    consequences: ["useLightSource", "continueCautiously"],
    images: ["darkPath.jpg", "pressOn.jpg"]
  },
  useTorch: {
    text: "You use a torch to light your way through the cave. You discover a hidden chamber with the treasure!",
    choices: ["Celebrate your victory", "Examine the treasure"],
    consequences: ["celebrateVictory", "examineTreasure"],
    images: ["hiddenChamber.jpg", "treasure.jpg"]
  },
  usePhoneFlashlight: {
    text: "Your phone's flashlight reveals ancient drawings on the cave walls. They guide you to the treasure!",
    choices: ["Admire the drawings", "Retrieve the treasure"],
    consequences: ["admireDrawings", "retrieveTreasure"],
    images: ["caveDrawings.jpg", "treasureFound.jpg"]
  },
  exploreFurther: {
    text: "You explore deeper into the forest and find a friendly group of woodland creatures. They guide you to the treasure.",
    choices: ["Thank the creatures", "Continue the journey"],
    consequences: ["thankCreatures", "continueJourney"],
    images: ["woodlandCreatures.jpg", "treasureGuided.jpg"]
  },
  restForAWhile: {
    text: "You decide to rest for a while. As you relax, you reflect on your adventurous journey.",
    choices: ["Start a new adventure", "Continue the current quest"],
    consequences: ["startNewAdventure", "continueCurrentQuest"],
    images: ["resting.jpg", "reflecting.jpg"]
  },
  startNewAdventure: {
    text: "You embark on a new adventure, ready for whatever challenges lie ahead.",
    choices: ["Play again"],
    consequences: ["startOver"],
    images: ["newAdventure.jpg"]
  },
  enterCave: {
    text: "The cave reveals a hidden passage. You find the treasure at the end of the passage!",
    choices: ["Celebrate your victory", "Examine the treasure"],
    consequences: ["celebrateVictory", "examineTreasure"],
    images: ["treasureCave.jpg", "treasureFound.jpg"]
  },
  restByRiver: {
    text: "You decide to rest by the river. The sound of flowing water brings you peace.",
    choices: ["Start a new adventure", "Continue the quest later"],
    consequences: ["startNewAdventure", "continueQuestLater"],
    images: ["restByRiver.jpg", "peaceful.jpg"]
  },
  approachCastle: {
    text: "As you approach the castle, the drawbridge lowers. The king invites you in and rewards you with the treasure!",
    choices: ["Accept the reward", "Decline and explore more"],
    consequences: ["acceptReward", "declineAndExplore"],
    images: ["kingWelcomes.jpg", "reward.jpg"]
  },
  exploreSurroundings: {
    text: "You explore the surroundings and find a hidden entrance to an underground chamber. The treasure awaits!",
    choices: ["Enter the chamber", "Keep exploring"],
    consequences: ["enterChamber", "keepExploring"],
    images: ["undergroundChamber.jpg", "treasure.jpg"]
  },
  followIlluminatedPath: {
    text: "The illuminated path leads you to a magical portal. You step through it and find the treasure in a different realm!",
    choices: ["Marvel at the realm", "Retrieve the treasure"],
    consequences: ["marvelAtRealm", "retrieveTreasure"],
    images: ["magicalPortal.jpg", "differentRealm.jpg"]
  },
  restForAWhile: {
    text: "You decide to rest for a while. As you relax, you reflect on your adventurous journey.",
    choices: ["Start a new adventure", "Continue the current quest"],
    consequences: ["startNewAdventure", "continueCurrentQuest"],
    images: ["resting.jpg", "reflecting.jpg"]
  },
  useLightSource: {
    text: "You use a light source to navigate the dark path. You reach a clearing with the treasure in the center!",
    choices: ["Celebrate your victory", "Examine the treasure"],
    consequences: ["celebrateVictory", "examineTreasure"],
    images: ["clearing.jpg", "treasureInClearing.jpg"]
  },
  continueCautiously: {
    text: "You proceed cautiously through the dark path. Your patience is rewarded when you find the treasure.",
    choices: ["Celebrate your victory", "Examine the treasure"],
    consequences: ["celebrateVictory", "examineTreasure"],
    images: ["darkPath.jpg", "rewardingDarkPath.jpg"]
  },
  admireDrawings: {
    text: "You take a moment to admire the ancient drawings. They depict the location of the treasure.",
    choices: ["Follow the depicted path", "Explore on your own"],
    consequences: ["followDepictedPath", "exploreOnYourOwn"],
    images: ["ancientDrawings.jpg", "depictedPath.jpg"]
  },
  retrieveTreasure: {
    text: "You retrieve the treasure! Congratulations, you have completed the quest!",
    choices: ["Start a new adventure"],
    consequences: ["startOver"],
    images: ["treasureRetrieved.jpg"]
  },
  thankCreatures: {
    text: "You express gratitude to the woodland creatures. They present you with the treasure as a token of friendship.",
    choices: ["Accept the gift", "Continue the journey"],
    consequences: ["acceptGift", "continueJourney"],
    images: ["thankful.jpg", "gift.jpg"]
  },
  continueJourney: {
    text: "You continue your journey, eager to explore more adventures.",
    choices: ["Play again"],
    consequences: ["startOver"],
    images: ["continueJourney.jpg"]
  },
  startOver: {
    text: "You decide to start a new adventure. Good luck on your next quest!",
    choices: ["Play again"],
    consequences: ["startOver"],
    images: ["startOver.jpg"]
  },
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
