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
  // Additions to script.js

// ... (previous story stages)

  exploreOnYourOwn: {
    text: "You decide to explore on your own. Suddenly, you encounter a rickety bridge. What will you do?",
    choices: ["Cross the bridge cautiously", "Look for an alternative route"],
    consequences: ["crossBridge", "findAlternativeRoute"],
    images: ["exploringOnYourOwn.jpg", "ricketyBridge.jpg"]
  },
  crossBridge: {
    text: "You cross the bridge successfully. On the other side, you find a hidden village with the treasure!",
    choices: ["Celebrate with the villagers", "Examine the treasure"],
    consequences: ["celebrateWithVillagers", "examineTreasure"],
    images: ["village.jpg", "treasureInVillage.jpg"]
  },
  findAlternativeRoute: {
    text: "You decide not to risk the rickety bridge. You take a detour and encounter a mystical creature. What's your approach?",
    choices: ["Befriend the creature", "Proceed with caution"],
    consequences: ["befriendCreature", "proceedWithCaution"],
    images: ["alternativeRoute.jpg", "mysticalCreature.jpg"]
  },
  followDepictedPath: {
    text: "You decide to follow the depicted path in the ancient drawings. It leads you to a hidden waterfall.",
    choices: ["Explore behind the waterfall", "Continue on the path"],
    consequences: ["exploreBehindWaterfall", "continueOnPath"],
    images: ["hiddenWaterfallPath.jpg", "waterfallDiscovered.jpg"]
  },
  continueOnPath: {
    text: "The path continues to a vast desert. You spot an oasis in the distance. What will you do?",
    choices: ["Head towards the oasis", "Continue through the desert"],
    consequences: ["headToOasis", "continueThroughDesert"],
    images: ["desertPath.jpg", "oasis.jpg"]
  },
  headToOasis: {
    text: "As you reach the oasis, you encounter a wise desert dweller. They offer guidance. What do you ask about?",
    choices: ["Ask about the treasure location", "Ask about the next part of the journey"],
    consequences: ["askAboutTreasure", "askAboutJourney"],
    images: ["oasisEncounter.jpg", "wiseDesertDweller.jpg"]
  },
  continueThroughDesert: {
    text: "You continue through the desert, facing challenges. Eventually, you find the treasure buried in the sand!",
    choices: ["Celebrate your discovery", "Examine the treasure"],
    consequences: ["celebrateDiscovery", "examineTreasure"],
    images: ["desertJourney.jpg", "treasureInDesert.jpg"]
  },
  askAboutTreasure: {
    text: "The wise desert dweller shares clues about the treasure's location. You gain valuable insights.",
    choices: ["Thank them and continue", "Ask for more advice"],
    consequences: ["thankAndContinue", "askForMoreAdvice"],
    images: ["askingAboutTreasure.jpg", "valuableInsights.jpg"]
  },
  askAboutJourney: {
    text: "You ask about the next part of your journey. The wise desert dweller warns you about a challenging path ahead.",
    choices: ["Prepare for challenges", "Risk the difficult path"],
    consequences: ["prepareForChallenges", "riskDifficultPath"],
    images: ["askingAboutJourney.jpg", "challengingPath.jpg"]
  },
  celebrateDiscovery: {
    text: "You celebrate your discovery in the vast desert. The journey becomes a legend among adventurers.",
    choices: ["Start a new adventure"],
    consequences: ["startNewAdventure"],
    images: ["celebratingDiscovery.jpg", "legendaryJourney.jpg"]
  },
  thankAndContinue: {
    text: "You express gratitude to the wise desert dweller and continue your journey with newfound knowledge.",
    choices: ["Explore further", "Rest for a while"],
    consequences: ["exploreFurther", "restForAWhile"],
    images: ["thankfulToDweller.jpg", "continuingJourney.jpg"]
  },
  askForMoreAdvice: {
    text: "You ask for more advice about the treasure. The wise desert dweller shares a riddle to guide you.",
    choices: ["Solve the riddle", "Continue without solving"],
    consequences: ["solveTheRiddle", "continueWithoutSolving"],
    images: ["askingForMoreAdvice.jpg", "riddle.jpg"]
  },
  solveTheRiddle: {
    text: "You successfully solve the riddle and reach the treasure's location. The wise desert dweller applauds your intellect.",
    choices: ["Express gratitude", "Continue the journey"],
    consequences: ["expressGratitude", "continueJourney"],
    images: ["solvingRiddle.jpg", "applaudingIntellect.jpg"]
  },
  continueWithoutSolving: {
    text: "You choose not to solve the riddle. The journey becomes more challenging, but you press on.",
    choices: ["Use a light source", "Continue cautiously"],
    consequences: ["useLightSource", "continueCautiously"],
    images: ["challengingJourney.jpg", "pressOnThroughChallenge.jpg"]
  },
  riskDifficultPath: {
    text: "You decide to risk the difficult path. The challenges test your skills, but you emerge victorious at the end.",
    choices: ["Celebrate your triumph", "Examine the treasure"],
    consequences: ["celebrateTriumph", "examineTreasure"],
    images: ["difficultPathRisked.jpg", "triumphAtEnd.jpg"]
  },
  exploreBehindWaterfall: {
    text: "You explore behind the waterfall and discover a hidden chamber. The treasure awaits inside!",
    choices: ["Celebrate your find", "Examine the treasure"],
    consequences: ["celebrateFind", "examineTreasure"],
    images: ["behindWaterfall.jpg", "hiddenChamberTreasure.jpg"]
  },
  continueOnPath: {
    text: "You choose to continue on the path. It leads to a beautiful garden with rare flowers. What will you do?",
    choices: ["Admire the flowers", "Pick a flower"],
    consequences: ["admireFlowers", "pickAFlower"],
    images: ["pathContinues.jpg", "beautifulGarden.jpg"]
  },
  continueThroughDesert: {
    text: "You continue through the desert, facing challenges. Eventually, you find the treasure buried in the sand!",
    choices: ["Celebrate your discovery", "Examine the treasure"],
    consequences: ["celebrateDiscovery", "examineTreasure"],
    images: ["desertJourney.jpg", "treasureInDesert.jpg"]
  },
  admireFlowers: {
    text: "You take a moment to admire the rare flowers. Suddenly, a portal opens. What will you do?",
    choices: ["Enter the portal", "Continue exploring the garden"],
    consequences: ["enterFlowerPortal", "continueExploringGarden"],
    images: ["admiringFlowers.jpg", "flowerPortal.jpg"]
  },
  pickAFlower: {
    text: "You pick a flower, and it releases a magical fragrance. The path ahead becomes illuminated.",
    choices: ["Follow the illuminated path", "Continue without following the path"],
    consequences: ["followIlluminatedPath", "continueWithoutFollowingPath"],
    images: ["pickingAFlower.jpg", "illuminatedPath.jpg"]
  },
  enterFlowerPortal: {
    text: "Entering the flower portal transports you to a celestial realm. The treasure awaits in this magical land.",
    choices: ["Retrieve the treasure", "Explore the celestial realm"],
    consequences: ["retrieveTreasureInCelestialRealm", "exploreCelestialRealm"],
    images: ["celestialRealm.jpg", "treasureInCelestialLand.jpg"]
  },
  continueExploringGarden: {
    text: "You continue exploring the beautiful garden. It leads to a hidden cave with the treasure!",
    choices: ["Celebrate your find", "Examine the treasure"],
    consequences: ["celebrateFind", "examineTreasure"],
    images: ["exploringGarden.jpg", "hiddenCaveTreasure.jpg"]
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

// ... (remaining code remains the same)



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
