//Maakt cyclist selector ontzichtbaar
document.getElementById("cyclistSelector").style.display = "none";

//Maakt players aan
let players = [];


//Moet nog manier hebben om van vorige pagina de race_name te ontvangen.




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

  document.getElementById("playerForm").style.display = "none";
  document.getElementById("cyclistSelector").style.display = "block";

  loadCyclists({name: "Tour de France"});

  let game = new Game("Tour de France", players);

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

          let player = players[0];

          // voeg cyclist toe aan actieve lijst
          player.list_active.push(cyclist);

          // verwijder uit UI
          li.remove();

          console.clear();
          console.log(JSON.stringify(player.list_active, null, 2));
          console.log("Volgende speler:", players[0].name);
        });








        list.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
}








//buttons
document.querySelector("#playerbutton").addEventListener("click", maakPlayers);