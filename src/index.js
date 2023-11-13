const storyStages = {
    start: {
        text: "You wake up in a mysterious room with a hangman puzzle on the wall. What do you do?",
        choices: ["Inspect the puzzle closely", "Look for an exit"],
        consequence: ["inspectPuzzle", "findExit"],
        image: "start.jpg"
    },
    inspectPuzzle: {
        text: "The puzzle seems to be missing a few letters. You notice a clue: 'A place where books are kept.'",
        choices: ["Guess 'Library'", "Guess 'Kitchen'"],
        consequence: ["correctLibrary", "incorrectKitchen"],
        image: "inspect-puzzle.jpg"
    },
    findExit: {
        text: "You explore the room and find a hidden door. As you open it, a bright light blinds you.",
        choices: ["Step through the door", "Stay in the room"],
        consequence: ["escape", "stay"],
        image: "find-exit.jpg"
    },
    correctLibrary: {
        text: "Your guess 'Library' is correct! The door to the next room opens.",
        choices: ["Continue exploring", "Stay in the library"],
        consequence: ["continueExploring", "stayInLibrary"],
        image: "correct-library.jpg"
    },
    incorrectKitchen: {
        text: "Unfortunately, 'Kitchen' is incorrect. The room begins to shake, and a trapdoor opens beneath you.",
        choices: ["Accept your fate", "Grab onto something"],
        consequence: ["acceptFate", "grabSomething"],
        image: "incorrect-kitchen.jpg"
    },
    escape: {
        text: "You step through the door and find yourself in a beautiful garden. The hangman puzzle was a test, and you passed!",
        image: "escape.jpg"
    },
    stay: {
        text: "You decide to stay in the room. The walls start closing in, and you're trapped forever.",
        image: "stay.jpg"
    },
    continueExploring: {
        text: "You find a series of interconnected rooms. Each room presents a new hangman puzzle.",
        choices: ["Keep solving puzzles", "Try to find a way out"],
        consequence: ["keepSolving", "findWayOut"],
        image: "continue-exploring.jpg"
    },
    stayInLibrary: {
        text: "You decide to stay in the library and read books for the rest of your life.",
        image: "stay-in-library.jpg"
    },
    acceptFate: {
        text: "You accept your fate and fall through the trapdoor. The game ends with a cryptic message.",
        image: "accept-fate.jpg"
    },
    grabSomething: {
        text: "You grab onto a hanging rope and swing to safety. You find an exit and escape the room.",
        image: "grab-something.jpg"
    },
    keepSolving: {
        text: "You continue solving puzzles and discover the secret of the hangman game. You become a puzzle master.",
        image: "keep-solving.jpg"
    },
    findWayOut: {
        text: "You focus on finding a way out and eventually escape the mysterious place.",
        image: "find-way-out.jpg"
    },
    // Add more stages and endings as needed
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
}

// Function to end the game
function endGame() {
    const stage = storyStages[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    // Update image for the ending
    document.getElementById("story-image").src = stage.image;

    // Remove choices
    document.getElementById("choices").innerHTML = "";
}

// Function to handle player choices
function makeChoice(index) {
    const stage = storyStages[currentStage];
    const nextStageKey = stage.consequence[index];

    // Check if the consequence leads to an ending
    if (nextStageKey.startsWith("end")) {
        endGame();
    } else {
        currentStage = nextStageKey;
        updatePage();
    }
}

// Optional: Enhance game with CSS - Create a styles.css file (styles remain unchanged)
