function makeChange() {
    var money;
    money = document.getElementById("change").value;
    
    
    var numLoonies;
    var numQuarters;
    var numDimes;
    var numNickels;
    var numPennies;
    

    do {
        console.log(money);
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

    document.getElementById("test").innerHTML = money;


}