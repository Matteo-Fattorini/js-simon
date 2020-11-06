/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
 */

resultEl = document.getElementById("result");
arrComp = [];
arrUser = [];
countdown = 30;




console.log("arrComp.length", arrComp.length)

while (arrComp.length < 5) {
  number = Math.floor(Math.random() * 100);
  console.log(number);
  if (arrComp.indexOf(number) === -1) {
    arrComp.push(number)
   
  }
}

alert(arrComp)



  while(arrUser.length < 5) {
    userpick = parseInt(prompt("Inserisci, in ordine, i numeri"));
    if (isNaN(userpick)) {
      alert("Devi inserire numeri!")
    }else if  (arrUser.indexOf(userpick) != -1) {
      alert("Hai già inserito questo numero")
    } else {
      arrUser.push(userpick);
    }
  }




var timer = setInterval(function () {
  resultEl.innerHTML = --countdown;
}, 1000);

function checkWinner() {
  var counter = 0;
  var guessedNum = [];
  for (var i = 0; i < 5; i++) {
    if (arrComp.includes(arrUser[i])) {
      guessedNum.push(arrUser[i]);
      counter++;
    }
    resultEl.innerHTML =
      "Ne hai indovinati " + counter + ": " + guessedNum.join(", ");
  }
  clearInterval(timer);
}

setTimeout(checkWinner, 31000);
