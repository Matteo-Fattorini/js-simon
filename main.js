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

for (var i = 0; i < 5; i++) {
  arrComp.push(Math.floor(Math.random() * 100));
}
alert(arrComp);




setTimeout(function () {
  for (var i = 0; i < 5; i++) {
    arrUser.push(prompt("Inserisci, in ordine, i numeri"));
  }
}, 30000);

var timer = setInterval(function () {
  resultEl.innerHTML = --countdown;
}, 1000);

function checkWinner() {
  var counter = 0;
  var guessedNum = [];
  for (var i = 0; i < 5; i++) {
    if (arrComp[i] == arrUser[i]) {
      guessedNum.push(arrComp[i]);
      counter++;
    }
    resultEl.innerHTML =
      "Ne hai indovinati " + counter + ": " + guessedNum.join(", ");
    }
    clearInterval(timer);
}

setTimeout(checkWinner, 31000);
