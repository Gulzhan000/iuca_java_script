var cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
var visaCount = 0;
for (var i = 0; i < cards.length; i++) {
    if (cards[i][0] === "4") {   
        visaCount++;
    }
}

console.log("Карт VISA " + visaCount + " из " + cards.length);
