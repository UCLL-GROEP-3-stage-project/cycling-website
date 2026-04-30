document.getElementById("cyclistSelector").style.display = "none";

let savedRace = localStorage.getItem("selectedRace");
let name_race;

if (savedRace) {
  name_race = JSON.parse(savedRace);
} else {
  console.log("Geen opgeslagen race gevonden");
}

let players = [];
let currentPlayerIndex = 0;
let direction = 1;

import { Player } from "./Classes/player.js";
import { Game } from "./Classes/game.js";

function maakPlayers() {

  document.querySelectorAll("#tablesContainer input").forEach(input => {
    input.disabled = true;
  });

  players = [];

  let p1 = document.getElementById("p1").value.trim();
  let p2 = document.getElementById("p2").value.trim();
  let p3 = document.getElementById("p3").value.trim();
  let p4 = document.getElementById("p4").value.trim();

  let names = [p1, p2, p3, p4];

  if (names.some(n => n === "")) {
    alert("Alle spelers moeten een naam hebben!");
    return;
  }

  if (new Set(names).size !== names.length) {
    alert("Je mag geen dubbele namen gebruiken!");
    return;
  }

  players = names.map(name => new Player(name));

  updateCurrentPlayerUI();
  document.getElementById("playerbutton").style.display = "none";
  document.getElementById("cyclistSelector").style.display = "block";

  loadCyclists({ name: name_race });

  const game = new Game(name_race, players);
  localStorage.setItem("game", JSON.stringify(game));
}

function loadCyclists(Race) {
  fetch(`../Data/2025/${Race.name}/all_cyclists.json`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("cyclistList");
      list.innerHTML = "";

      data.Cyclist.forEach(cyclist => {
        const li = document.createElement("li");
        li.textContent = cyclist.name;
        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
          assignCyclistToPlayer(cyclist);
          li.remove();
        });

        list.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
}

function nextTurn(playersLength) {
  currentPlayerIndex += direction;

  if (currentPlayerIndex >= playersLength) {
    currentPlayerIndex = playersLength - 1;
    direction = -1;
  }

  if (currentPlayerIndex < 0) {
    currentPlayerIndex = 0;
    direction = 1;
  }
}

async function assignCyclistToPlayer(cyclist) {

  const playerIndex = currentPlayerIndex;
  const player = players[playerIndex];

  const playerBox = document.querySelectorAll(".table-box")[playerIndex];

  const activeList = playerBox.querySelector(".active-list");
  const benchedList = playerBox.querySelector(".benched-list");

  const li = document.createElement("li");
  li.textContent = cyclist.name;

  if (player.addActive(cyclist)) {
    activeList.appendChild(li);
  } else if (player.addBenched(cyclist)) {
    benchedList.appendChild(li);
  } else {

    const allFull = players.every(p =>
      p.list_benched.filter(x => x != null).length == 6
    );

    if (allFull) {
      const game = new Game(name_race, players);
      await game.init();
      localStorage.setItem("game", JSON.stringify(game));
      window.location.href = "/pages/stage_score.html";
      return;
    }
  }

  nextTurn(players.length);

  updateCurrentPlayerUI();
}


function updateCurrentPlayerUI() {

  const span = document.getElementById("currentPlayer");
  const h2 = document.querySelector("#cyclistSelector h2");

  const colors = [
    "--player-1",
    "--player-2",
    "--player-3",
    "--player-4"
  ];

  if (span && players.length > 0) {
    span.textContent = players[currentPlayerIndex].name;
  }

  if (h2) {
    h2.style.backgroundColor = `var(${colors[currentPlayerIndex]})`;
  }
}


document.querySelector("#playerbutton").addEventListener("click", maakPlayers);