//  toglogchiin eeljiig hadgalah
var activePlayer = 0;

//  toglogchiin tsugluulsan onoog hadgalah
var scores = [0, 0];

//  Ээлжиндээ авсан оноонууд.
var roundScore = 0;

//  Шооны талыг хадгалах.
var diceNumber = Math.floor(Math.random() * 6) + 1;

//  Програм эхлэх үед бэлтгэе.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//  Шоог орхих Eventlistener.
document.querySelector(".btn-roll").addEventListener("click", function() {
  //    1-6 хүртэлх тооноос санамсаргүй нэг тоо сонгоно.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //    Сонгосон тоонд харгалзах шооны зургийг оруулна.
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  //    1-с ялгаатай буух үед буусан тоогоор ээлжинд авсан оноогоо нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = 0;

    //  Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
});
//  Hold товчлуурын Eventlistener
document.querySelector(".btn-hold").addEventListener("click", function() {
  //  Цуглуулсан ээлжийн оноог хураана.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //  Тоглогч хожсон эсэх
  if (scores[activePlayer] >= 50) {
    //  Winner-г нэрний оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "Ялагч!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    diceDom.style.display = "none";
  } else {
    //  Ээлжийн оноог 0 болгоно.
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  //  Тоглогчийн ээлжийг солино.
  activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //  Шоог түр алга болгоно.
  diceDom.style.display = "none";
}

//  New game Button event
document.querySelector(".btn-new").addEventListener("click", function() {
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document.getElementById("name-" + activePlayer).textContent =
    "player" + (activePlayer + 1);

  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  diceDom.style.display = "none";

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
});
