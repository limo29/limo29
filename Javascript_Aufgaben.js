var aufgaben =[
 "Ex!",
 "Schere Stein Papier mit dem rechten Partner, Verlierer trinken 4 Schlücke",
 "Erz&aumlhl eine Story aus dem Paulanergarten",
 "Trink 10 Schlücke",
 "Trink 5 Schlücke",
 "Trink 3 Schlücke",
  "Trink 2 Schlücke",
  "Trink 2 Schlücke",
  "Alle die gestern besoffen waren trinken 5 Schlücke",
  "Der jüngste muss sein Glas exen",
 "Der älteste muss sein Glas exen",
  "Alle auf ex",
 "Verteil 5 Schlücke",
 "Verteil 4 Schlücke",
 "Verteil 3 Schlücke",
 "Trink!",
 "Straf - Schnaps",
 "2 Schlücke, wenn du schon einmal bei Google nach 2 girls, 1 cup gesucht hast",
 "Alle Nicht-Vegetarier trinken 5 Schlücke",
 "4 Schlücke, wenn du schonmal so tun musstest, als ob du nüchtern bist obwohl du sternhagel voll warst",
 "2 Schlücke, wenn du schonmal in aller Öffentlichkeit gekotzt hast",
 "Alle singles trinken 3 Schlücke",
 "Alle Frauen trinken 5 Schlücke",
 "Alle Frauen trinken 5 Schlücke",
 "Trinkbuddy, immer doppelt soviel wie vorgegeben",
 
]
var timeLeft = -1;
var lastNumber = 0;
function newAufgabe(){
	var randomNumber = Math.floor(Math.random() * (aufgaben.length));
	if( randomNumber == lastNumber){
	  newAufgabe();
	}else{
	lastNumber= randomNumber;
	document.getElementById("aufgabenDisplay").innerHTML = aufgaben[randomNumber];
    
	timeLeft =30;
	if(randomNumber == 0){timeLeft= 60;}
	if(randomNumber == 1){timeLeft= 60;}
	if(randomNumber == 2){timeLeft= 120;}
	if(randomNumber == 3){timeLeft= 30;}
	if(randomNumber == 4){timeLeft= 20;}
	if(randomNumber == 5){timeLeft= 8;}
	if(randomNumber == 6){timeLeft= 8;}
	if(randomNumber == 7){timeLeft= 8;}
	if(randomNumber == 8){timeLeft= 20;}
	if(randomNumber == 9){timeLeft= 60;}
	if(randomNumber == 10){timeLeft= 60;}
	if(randomNumber == 11){timeLeft= 60;}
	}
}


var elem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        newAufgabe();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}
function pause(){
 document.getElementById("aufgabenDisplay").innerHTML = "Pause";
 timeLeft =999;
}
