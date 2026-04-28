//localstorage data ophalen
let savedGame  = localStorage.getItem("game");

let game;

if (savedGame) {
  game = JSON.parse(savedGame);
  console.log("Game geladen:", game);
} else {
  alert("Geen opgeslagen game gevonden");
}

let base_url = `/Data/2025/${game.race_name}/Stage ${game.current_stage}`;

fetch(base_url + "/DNF.json")
  .then(res => res.json())
  .then(data => {

    let list_DNF = [];

    data.DNF.forEach(cyclist => {

        game.players.forEach(player => {

            const hasCyclist = player.list_active.some(p => 
                p.cyclist_id === cyclist.cyclist_id
            );

            if (hasCyclist) {
                //Schrijf hier de functie die zorgt dat je je actieve lijst kan aanpassen voor deze ronde.

                console.log("Player " + player.name + " has cyclist " + cyclist.cyclist_id + " in their active list.");    
            } else {
                console.log("Player " + player.name + " does NOT have cyclist " + cyclist.cyclist_id + " in their active list.");
            }

        });

    });

  })
  .catch(err => console.error("Error loading JSON:", err));