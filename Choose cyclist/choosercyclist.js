//Maakt cyclist selector ontzichtbaar
document.getElementById("cyclistSelector").style.display = "none";

//Maakt players aan
let players = [];

//Manier van kiezen
let currentPlayerIndex = 0;
let direction = 1; // 1 voor vooruit, -1 voor achteruit

//Moet nog manier hebben om van vorige pagina de race_name te ontvangen.

let name_race = "Tour de France";



import { Player } from "../Classes/player.js";
import { Game } from "../Classes/game.js";


//Verbinding html die een player aanmaakt en de cyclist selector zichtbaar maakt.
function maakPlayers() {
  players = [];

  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;
  let p4 = document.getElementById("p4").value;

  players.push(new Player(p1));
  players.push(new Player(p2));
  players.push(new Player(p3));
  players.push(new Player(p4));


  document.getElementById("currentPlayer").textContent = players[currentPlayerIndex].name;
  document.getElementById("playerForm").style.display = "none";
  document.getElementById("cyclistSelector").style.display = "block";

  loadCyclists({name: name_race});

  let game = new Game(name_race, players);
  localStorage.setItem("game", JSON.stringify(game));

  console.log("Game initialized:", game);
}




//Maakt alle cyclisten uit de JSON file klikbaar en verplaatst ze naar de actieve lijst van de speler.
function loadCyclists(Race) { 
  fetch(`../Data/2025/${Race.name}/all_cyclists.json`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("cyclistList");

      // lijst leegmaken
      list.innerHTML = "";

      data.Cyclist.forEach(cyclist => {
        const li = document.createElement("li");
        li.textContent = cyclist.name;

        // 👇 klikbaar maken
        li.style.cursor = "pointer";




        //Moet nog deftig werkend maken.
        li.addEventListener("click", () => {
          assignCyclistToPlayer(players, cyclist);
          li.remove();
        });
        list.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
}

//Dit is nextTurn als je snakemethode wilt
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

function assignCyclistToPlayer(players, cyclist) {

  let player = players[currentPlayerIndex];

  // eerst proberen active
  if (!player.addActive(cyclist)) {
    if(!player.addBenched(cyclist)){

      const allFull = players.every(player => player.list_benched.filter(x => x != null).length === 6);
      if(allFull) {

        let game = new Game(name_race, players);
        await game.init();
        console.log("Game initialized:", game);
        localStorage.setItem("game", JSON.stringify(game));

        //Pas dit aan naar de juiste pagina!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        window.location.href = "../index.html";
      }
    };
  }

  nextTurn(players.length);

  document.getElementById("currentPlayer").textContent = players[currentPlayerIndex].name;
}




//buttons
document.querySelector("#playerbutton").addEventListener("click", maakPlayers);