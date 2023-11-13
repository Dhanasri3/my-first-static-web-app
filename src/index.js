const story = {
    start: {
        text: "You find yourself in a dark forest. What do you do?",
        choices: ["Explore the forest", "Build a shelter", "Follow a mysterious sound"],
        consequence: [["explore", "monster"], ["shelter", "badEnding"], ["mysterious", "portal"]],
        image: "https://images.unsplash.com/photo-1573339607881-208e75e4b267?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    explore: {
        text: "As you explore, you find a hidden cave. Enter or keep exploring?",
        choices: ["Enter the cave", "Continue exploring"],
        consequence: [["treasure", "goodEnding"], ["explore", "monster"]],
        image: "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    shelter: {
        text: "You build a shelter and spend the night. The next day, you find a map. What's your next move?",
        choices: ["Follow the map", "Ignore the map"],
        consequence: [["treasure", "goodEnding"], ["ignore", "badEnding"]],
        image: "https://images.pexels.com/photos/771308/pexels-photo-771308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    monster: {
        text: "A wild monster appears! What do you do?",
        choices: ["Fight the monster", "Run away"],
        consequence: [["fight", "badEnding"], ["run", "badEnding"]],
        image: "https://as1.ftcdn.net/v2/jpg/05/88/28/44/1000_F_588284417_PbniVjQbpFAV8QQcoHxIMlMnyQQtMwpd.jpg"
    },
    treasure: {
        text: "Congratulations! You've found hidden treasure.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2023/06/13/16/31/ai-generated-8061311_1280.jpg"
    },
    newStage1: {
        text: "You encounter a mysterious old man who offers you a riddle. What do you do?",
        choices: ["Attempt to solve the riddle", "Ignore the old man"],
        consequence: [["solve", "goodEnding"], ["ignore", "badEnding"]],
        image: "https://example.com/image-url1.jpg"
    },
    newStage2: {
        text: "You come across a hidden village in the forest. How do you proceed?",
        choices: ["Enter the village", "Observe from a distance"],
        consequence: [["enter", "secretEnding"], ["observe", "continue"]],
        image: "https://example.com/image-url2.jpg"
    },
    end: {
        text: "You've reached the end of your adventure. Thanks for playing!",
        choices: [],
        consequence: [],
        image: "https://png.pngtree.com/png-clipart/20210311/original/pngtree-game-over-try-again-vector-design-png-image_6022936.jpg"
    },
    mysterious: {
        text: "You follow the mysterious sound and discover a magical portal. Do you enter or ignore it?",
        choices: ["Enter the portal", "Ignore the portal"],
        consequence: [["portal", "secretEnding"], ["ignore", "monster"]],
        image: "https://img.freepik.com/premium-photo/galaxy-system-millions-billions-stars_39386-392.jpg?size=626&ext=jpg"
    },
    portal: {
        text: "You step through the portal and find yourself in a different world. What do you do?",
        choices: ["Explore the new world", "Find a way back"],
        consequence: [["explore", "monster"], ["wayback", "badEnding"]],
        image: "https://media.mmorpg.com/images/heroes/posts/125524.jpg"
    },
    wayback: {
        text: "You search for a way back and discover a hidden path. Where does it lead?",
        choices: ["Follow the path", "Return to the portal"],
        consequence: [["treasure", "goodEnding"], ["portal", "badEnding"]],
        image: "https://render.fineartamerica.com/images/rendered/default/wood-print/10/6.5/break/images/artworkimages/medium/2/the-hidden-path-by-ronnie-mills.jpg"
    },
    goodEnding: {
        text: "Congratulations! You've successfully navigated the challenges of the forest and discovered the hidden paradise.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2023/06/13/16/31/ai-generated-8061311_1280.jpg"
    },
    badEnding: {
        text: "Oh no! Your adventure takes a tragic turn. The forest proves to be too perilous, and you meet an unfortunate fate.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/05/13/09/08/sunset-6249731_1280.jpg"
    },
    secretEnding: {
        text: "You uncover a hidden path that leads to a magical realm. You become the ruler of this enchanted land, living a life of magic and wonder.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2020/04/23/09/17/woman-5070527_1280.jpg"
    }
};

let currentStage;
let choiceHistory = [];

function startGame() {
    currentStage = "start";
    choiceHistory = [];
    updatePage();
}

function updatePage() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");
    const imageElement = document.getElementById("story-image");

    storyElement.textContent = story[currentStage].text;

    choicesElement.innerHTML = "";
    for (let i = 0; i < story[currentStage].choices.length; i++) {
        const choiceButton = createChoiceButton(i);
        choicesElement.appendChild(choiceButton);
    }

    if (choiceHistory.length > 0) {
        const backButton = createBackButton();
        choicesElement.appendChild(backButton);
    }

    imageElement.src = story[currentStage].image;
}

function createChoiceButton(index) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = story[currentStage].choices[index];
    choiceButton.addEventListener("click", () => makeChoice(index));
    return choiceButton;
}

function createBackButton() {
    const backButton = document.createElement("button");
    backButton.textContent = "Go back";
    backButton.classList.add("back-button");
    backButton.addEventListener("click", goBack);
    return backButton;
}

function makeChoice(index) {
    choiceHistory.push(currentStage);

    const consequences = story[currentStage].consequence[index];
    const nextStage = consequences ? consequences[1] : "end"; // Use the second consequence if available, otherwise end the adventure
    currentStage = nextStage;

    updatePage();
}

function goBack() {
    if (choiceHistory.length > 0) {
        currentStage = choiceHistory.pop();
        updatePage();
    }
}

startGame();
