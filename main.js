/*
This takes in a number that represents an amount of cents. It will calculate how many of what coin would compromise this number and then dispays
that to the user. Uses 2 helper function: clear(), displayCoins()
*/
function makeChange() {
    clear();//I first clear in case this function was used previously and there are previously results already displayed on the screen

    var money;//money is the number of cents that the user wrote in the text field
    money = document.getElementById("change").value;
    
    //We need to display the number of each coin returned.
    var numLoonies = 0;
    var numQuarters = 0;
    var numDimes = 0;
    var numNickels = 0;
    var numPennies = 0;
    

    do {
        if(money >= 100) {
            numLoonies++;
            money -= 100;
        }
        else if(money >= 25) {
            numQuarters++;
            money -= 25;
        }
        else if(money >= 10) {
            numDimes++;
            money -= 10;
        }
        else if(money >= 5) {
            numNickels++;
            money -= 5;
        }
        else {
            numPennies++;
            money -= 1
        }
    }
    while(money > 0)

    displayCoins(numPennies, numNickels, numDimes, numQuarters, numLoonies);//see function displayCoins(params)
}

/*
Helper function of make change
This function clears the images and text off the screen. It is needed because if the user presses the make change button. The results will remain there
from the previous click.
*/
function clear() {
    document.getElementById("1-cent-coin-block").style.display = "none";
    document.getElementById("5-cent-coin-block").style.display = "none";
    document.getElementById("10-cent-coin-block").style.display = "none";
    document.getElementById("25-cent-coin-block").style.display = "none";
    document.getElementById("100-cent-coin-block").style.display = "none";
}

/*
Helper function of make change
INPUT:number of each coin
OUTPUT: displays how many of each coin is needed and if it is needed will display the corresponding coins image
*/
function displayCoins(numPennies, numNickels, numDimes, numQuarters, numLoonies) {
    var numCoins = 0;

    if(numPennies > 0) {
        numCoins = numPennies;
        document.getElementById("1-cent-coin-block").style.display = "block";
        document.getElementById("1-cent-coin-p").innerHTML = (numPennies.toString()).concat(" x 1");
    }

    if(numNickels > 0) {
        numCoins = numNickels;
        document.getElementById("5-cent-coin-block").style.display = "block";
        document.getElementById("5-cent-coin-p").innerHTML = (numNickels.toString()).concat(" x 5");
    }

    if(numDimes > 0) {
        numCoins = numDimes;
        document.getElementById("10-cent-coin-block").style.display = "block";
        document.getElementById("10-cent-coin-p").innerHTML = (numDimes.toString()).concat(" x 10");
    }

    if(numQuarters > 0) {
        numCoins = numQuarters;
        document.getElementById("25-cent-coin-block").style.display = "block";
        document.getElementById("25-cent-coin-p").innerHTML = (numQuarters.toString()).concat(" x 25");
    }

    if(numLoonies > 0) {
        numCoins = numLoonies;
        document.getElementById("100-cent-coin-block").style.display = "block";
        document.getElementById("100-cent-coin-p").innerHTML = (numLoonies.toString()).concat(" x 100");
    }
}