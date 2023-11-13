const storyStages = {
    start: {
        text: "You awaken on a mysterious pirate ship. The captain approaches you with a gleam in their eye.",
        choices: ["Enlist in the crew", "Attempt a daring escape"],
        consequence: ["joinCrew", "escapeAttempt"],
        image: "ship.jpg"
    },
    joinCrew: {
        text: "Choosing loyalty, you join the crew. The captain extends a welcoming hand, setting the course for your journey.",
        choices: ["Explore the ship", "Engage with the crew"],
        consequence: ["exploreShip", "engageWithCrew"],
        image: "crew.jpg"
    },
    escapeAttempt: {
        text: "Opting for freedom, you attempt a daring escape but get caught. The captain's displeasure is evident.",
        choices: ["Plead for mercy", "Stand your ground and fight"],
        consequence: ["pleadForMercy", "standAndFight"],
        image: "caught.jpg"
    },
    exploreShip: {
        text: "While exploring, you stumble upon a treasure map hidden in the captain's quarters.",
        choices: ["Follow the map's lead", "Share the discovery with the crew"],
        consequence: ["followMap", "shareWithCrew"],
        image: "treasure-map.jpg"
    },
    engageWithCrew: {
        text: "Bonding with the crew, you learn of legendary treasures and are invited to join a thrilling quest.",
        choices: ["Embark on the quest", "Decline and continue exploring"],
        consequence: ["embarkOnQuest", "declineQuest"],
        image: "crew-talking.jpg"
    },
    pleadForMercy: {
        text: "Moved by your plea, the captain shows mercy, and you earn your place as a loyal crew member.",
        image: "captain-mercy.jpg"
    },
    standAndFight: {
        text: "A fierce battle ensues, but you're overpowered and thrown overboard into the vast open sea.",
        image: "fight.jpg"
    },
    followMap: {
        text: "The map leads you to a hidden island adorned with untold riches and ancient mysteries.",
        image: "hidden-island.jpg"
    },
    shareWithCrew: {
        text: "The crew is elated by the map and decides to embark on a treasure-hunting escapade.",
        image: "showing-map.jpg"
    },
    embarkOnQuest: {
        text: "Accepting the quest, you become the crew's leader. Loyalty and camaraderie define your pirate saga.",
        image: "quest.jpg"
    },
    declineQuest: {
        text: "Opting for personal exploration, you decline the quest, continuing to chart your own course.",
        image: "exploring.jpg"
    },
    // ... (Continue adding more stages as needed)

    mythicalCreature: {
        text: "Encountering a mythical sea creature, you engage in a perilous battle and earn its respect, forming an unbreakable bond.",
        image: "mythical-creature.jpg"
    },
    legendaryPirate: {
        text: "Crossing paths with a legendary pirate captain, you prove your worth in a duel, forming a legendary pirate duo.",
        image: "legendary-pirate.jpg"
    },
    // ... (Add more stages as needed)

    // Proper Endings
    endPirateKing: {
        text: "Congratulations! You rise to become the Pirate King, ruling the high seas with unparalleled prowess.",
        image: "ending-pirate-king.jpg"
    },
    endFountainOfYouth: {
        text: "Well done! You discover the Fountain of Youth, securing a legendary place in pirate lore.",
        image: "ending-fountain-of-youth.jpg"
    },
    endCursedGold: {
        text: "You uncover cursed Aztec gold, succumbing to its dark fate. Your pirate adventure ends in tragedy.",
        image: "ending-cursed-gold.jpg"
    },
    endHeroicEscape: {
        text: "Facing the legendary Kraken, you heroically escape, earning admiration and becoming a pirate hero.",
        image: "ending-heroic-escape.jpg"
    },
    // ... (Add more endings as needed)
};

let currentStage = "start";

// Function to start the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    // Update image
    document.getElementById("story-image").src = stage.image;

    // Clear previous choices
    document.getElementById("choices").innerHTML = "";

    // Create buttons for choices
    for (let i = 0; i < stage.choices.length; i++) {
        const choice = stage.choices[i];
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", () => makeChoice(i));
        document.getElementById("choices").appendChild(button);
    }

    // Add "End Game" button
    const endGameButton = document.createElement("button");
    endGameButton.innerText = "End Game";
    endGameButton.addEventListener("click", closeGame);
    document.getElementById("choices").appendChild(endGameButton);
}

// Function to end the game
function endGame() {
    const stage = storyStages[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    // Update image for the ending
    document.getElementById("story-image").src = stage.image;

    // Remove choices
    document.getElementById("choices").innerHTML = "";

    // Add "End Game" button
    const endGameButton = document.createElement("button");
    endGameButton.innerText = "End Game";
    endGameButton.addEventListener("click", closeGame);
    document.getElementById("choices").appendChild(endGameButton);
}

// Function to close the game
function closeGame() {
    // You can customize this function to handle any cleanup or closing actions
    // For now, let's simply reload the page
    location.reload();
}

// Optional: Enhance game with CSS - Create a styles.css file (styles remain unchanged)
