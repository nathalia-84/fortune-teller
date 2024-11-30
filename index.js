var month;

function showFortune() {
    var select = document.getElementById("monthSelect");
    month = select.value;

    var randomFortune;
    switch (month) {
        case "January":
            randomFortune = ["You will have a great day!", "Expect good news soon.", "A surprise is waiting for you."][Math.floor(Math.random() * 3)];
            break;
        case "February":
            randomFortune = ["Love is in the air.", "A new opportunity is coming.", "You will meet someone special."][Math.floor(Math.random() * 3)];
            break;
        case "March":
            randomFortune = ["Success is on your way.", "You will achieve your goals.", "Happiness is around the corner."][Math.floor(Math.random() * 3)];
            break;
        case "April":
            randomFortune = ["A new adventure awaits.", "You will find what you seek.", "Good fortune is coming."][Math.floor(Math.random() * 3)];
            break;
        case "May":
            randomFortune = ["You will make a new friend.", "A pleasant surprise is coming.", "You will have a productive day."][Math.floor(Math.random() * 3)];
            break;
        case "June":
            randomFortune = ["You will discover something new.", "A positive change is coming.", "You will feel inspired."][Math.floor(Math.random() * 3)];
            break;
        case "July":
            randomFortune = ["You will overcome a challenge.", "A joyful event is near.", "You will feel at peace."][Math.floor(Math.random() * 3)];
            break;
        case "August":
            randomFortune = ["You will receive good news.", "A new opportunity will arise.", "You will feel motivated."][Math.floor(Math.random() * 3)];
            break;
        case "September":
            randomFortune = ["You will achieve something great.", "A happy moment is coming.", "You will feel content."][Math.floor(Math.random() * 3)];
            break;
        case "October":
            randomFortune = ["You will find clarity.", "A new beginning is near.", "You will feel energized."][Math.floor(Math.random() * 3)];
            break;
        case "November":
            randomFortune = ["You will have a lucky day.", "A positive outcome is near.", "You will feel grateful."][Math.floor(Math.random() * 3)];
            break;
        case "December":
            randomFortune = ["You will enjoy a special moment.", "A wish will come true.", "You will feel fulfilled."][Math.floor(Math.random() * 3)];
            break;
        default:
            randomFortune = "Please select a valid month.";
    }

    document.getElementById("fortune").innerText = randomFortune;
};