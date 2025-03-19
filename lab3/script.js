(function() {
    let nameList = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    console.log("Вітання за першою літерою:");
    for (let i = 0; i < nameList.length; i++) {
        let startChar = nameList[i].charAt(0).toLowerCase();
        if (startChar === "j") {
            byeSpeaker.speak(nameList[i]);
        } else {
            helloSpeaker.speak(nameList[i]);
        }
    }
    console.log("\nПрощання за останньою літерою: якщо ім’я закінчується на голосну (a, e, i, o, u, y) – 'See you soon', інакше – 'Catch you later'");
    for (let i = 0; i < nameList.length; i++) {
        let endChar = nameList[i].charAt(nameList[i].length - 1).toLowerCase();
        let vowelSet = ["a", "e", "i", "o", "u", "y"];
        if (vowelSet.includes(endChar)) {
            console.log("See you soon, " + nameList[i]);
        } else {
            console.log("Catch you later, " + nameList[i]);
        }
    }
})();