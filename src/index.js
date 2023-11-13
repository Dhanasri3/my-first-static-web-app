const story = {
    start: {
        text: "You find yourself in a dark forest. What do you do?",
        choices: ["Explore the forest", "Build a shelter", "Follow a mysterious sound"],
        consequence: [
            ["explore", "monster"],
            ["shelter", "shelterEnding"],
            ["mysterious", "portal"]
        ],
        image: "https://images.unsplash.com/photo-1573339607881-208e75e4b267?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    explore: {
        text: "As you explore, you find a hidden cave. Enter or keep exploring?",
        choices: ["Enter the cave", "Continue exploring"],
        consequence: [
            ["treasure", "treasureEnding"],
            ["explore", "monster"]
        ],
        image: "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    shelter: {
        text: "You build a shelter and spend the night. The next day, you find a map. What's your next move?",
        choices: ["Follow the map", "Ignore the map"],
        consequence: [
            ["treasure", "treasureEnding"],
            ["ignore", "ignoreMapEnding"]
        ],
        image: "https://images.pexels.com/photos/771308/pexels-photo-771308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    monster: {
        text: "A wild monster appears! What do you do?",
        choices: ["Fight the monster", "Run away"],
        consequence: [
            ["fight", "fightMonsterEnding"],
            ["run", "runMonsterEnding"]
        ],
        image: "https://as1.ftcdn.net/v2/jpg/05/88/28/44/1000_F_588284417_PbniVjQbpFAV8QQcoHxIMlMnyQQtMwpd.jpg"
    },
    treasure: {
        text: "Congratulations! You've found hidden treasure.",
        choices: ["Celebrate", "Continue the journey"],
        consequence: [
            ["celebrate", "celebrateEnding"],
            ["continue", "continueJourneyEnding"]
        ],
        image: "https://cdn.pixabay.com/photo/2023/06/13/16/31/ai-generated-8061311_1280.jpg"
    },
    newStage1: {
        text: "You encounter a mysterious old man who offers you a riddle. What do you do?",
        choices: ["Attempt to solve the riddle", "Ignore the old man"],
        consequence: [
            ["solve", "solveRiddleEnding"],
            ["ignore", "ignoreOldManEnding"]
        ],
        image: "https://example.com/image-url1.jpg"
    },
    newStage2: {
        text: "You come across a hidden village in the forest. How do you proceed?",
        choices: ["Enter the village", "Observe from a distance"],
        consequence: [
            ["enter", "enterVillageEnding"],
            ["observe", "observeVillageEnding"]
        ],
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
        consequence: [
            ["portal", "portalEnding"],
            ["ignore", "ignorePortalEnding"]
        ],
        image: "https://img.freepik.com/premium-photo/galaxy-system-millions-billions-stars_39386-392.jpg?size=626&ext=jpg"
    },
    portal: {
        text: "You step through the portal and find yourself in a different world. What do you do?",
        choices: ["Explore the new world", "Find a way back"],
        consequence: [
            ["explore", "exploreNewWorldEnding"],
            ["wayback", "waybackPortalEnding"]
        ],
        image: "https://media.mmorpg.com/images/heroes/posts/125524.jpg"
    },
    wayback: {
        text: "You search for a way back and discover a hidden path. Where does it lead?",
        choices: ["Follow the path", "Return to the portal"],
        consequence: [
            ["treasure", "treasureEnding"],
            ["portal", "portalEnding"]
        ],
        image: "https://render.fineartamerica.com/images/rendered/default/wood-print/10/6.5/break/images/artworkimages/medium/2/the-hidden-path-by-ronnie-mills.jpg"
    },
    // Additional Endings
    shelterEnding: {
        text: "You find peace and tranquility in your shelter, living a simple and content life.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2020/09/09/09/47/nature-5558291_1280.jpg"
    },
    ignoreMapEnding: {
        text: "Without the map, you navigate the forest using your instincts. Eventually, you find a hidden treasure.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/01/21/07/47/tree-5939429_1280.jpg"
    },
    fightMonsterEnding: {
        text: "You bravely confront the monster and emerge victorious, earning the respect of the forest creatures.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2015/11/22/17/37/forest-1052011_1280.jpg"
    },
    runMonsterEnding: {
        text: "You escape from the monster, but the fear haunts you. You decide to leave the forest, ending your adventure.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_1280.jpg"
    },
    solveRiddleEnding: {
        text: "You successfully solve the old man's riddle and gain access to a hidden path leading to a magical realm.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2019/08/03/15/07/fantasy-4375295_1280.jpg"
    },
    ignoreOldManEnding: {
        text: "Ignoring the old man's riddle, you continue your journey and stumble upon a treasure hidden in the forest.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2019/07/09/15/56/landscape-4326912_1280.jpg"
    },
    enterVillageEnding: {
        text: "Entering the hidden village, you become a part of the community, finding friendship and happiness.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/08/10/07/57/woman-6535773_1280.jpg"
    },
    observeVillageEnding: {
        text: "You observe the village from a distance, choosing to continue your solitary journey through the forest.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2018/09/23/11/22/alone-3690107_1280.jpg"
    },
    portalEnding: {
        text: "Stepping through the magical portal, you discover a new world and embark on exciting adventures beyond the forest.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/06/04/13/23/fantasy-6315721_1280.jpg"
    },
    ignorePortalEnding: {
        text: "Choosing to ignore the magical portal, you find hidden treasures in the forest, concluding your mystical journey.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2020/08/22/18/33/forest-5505465_1280.jpg"
    },
    exploreNewWorldEnding: {
        text: "In the new world, you encounter wonders beyond imagination, living a life of magic and discovery.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2020/05/03/11/57/sunset-5114054_1280.jpg"
    },
    waybackPortalEnding: {
        text: "Following the hidden path back to the portal, you use it to travel between worlds, becoming a guardian of the forest.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/07/07/14/34/fantasy-6395587_1280.jpg"
    },
    // Additional Endings - Generic
    celebrateEnding: {
        text: "You celebrate your discovery, throwing a joyful feast in the forest with newfound friends.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/06/25/03/55/sunset-6367242_1280.jpg"
    },
    continueJourneyEnding: {
        text: "You decide to continue your journey, exploring more mysteries that the forest holds.",
        choices: [],
        consequence: [],
        image: "https://cdn.pixabay.com/photo/2021/10/06/15/11/landscape-6687380_1280.jpg"
    },
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
