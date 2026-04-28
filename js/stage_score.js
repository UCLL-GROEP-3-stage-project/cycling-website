document.getElementById("nextStage").style.display = "none";
document.getElementById("endScore").style.display = "none";


//localstorage data ophalen
let savedGame  = localStorage.getItem("game");

let game;

if (savedGame) {
  game = JSON.parse(savedGame);

    //text inladen
    document.getElementById("stageText").textContent = "Stage: " + game.current_stage;
} else {
  alert("Geen opgeslagen game gevonden");
}

let base_url = `/Data/2025/${game.race_name}/Stage ${game.current_stage}`;


//Laad DNF data op van huidige stage.
fetch(base_url + "/DNF.json")
  .then(res => res.json())
  .then(data => {

    data.DNF.forEach(cyclist => {

        game.players.forEach(player => {

            const hasCyclist = player.list_active.some(p => 
                p.cyclist_id == cyclist.cyclist_id
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



//Laad Top25 data op van huidige stage.
fetch(base_url + "/results.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        let score = 0;

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id == cyclist.cyclist_id) {

                if (cyclist.positie == 1) {
                    score = 100;
                } else if (cyclist.position == 2) {
                    score = 80;
                } else if (cyclist.position == 3) {
                    score = 65;
                } else if (cyclist.position == 4) {
                    score += 55;
                } else if (cyclist.position == 5) {
                    score = 45;
                } else if (cyclist.position == 6) {
                    score = 35;
                } else if (cyclist.position == 7) {
                    score = 30;
                } else if (cyclist.position == 8) {
                    score = 25;
                } else if (cyclist.position == 9) {
                    score = 20;
                } else if (cyclist.position == 10) {
                    score = 17;
                } else if (cyclist.position == 11) {
                    score = 15;
                } else if (cyclist.position == 12) {
                    score += 14;
                } else if (cyclist.position == 13) {
                    score += 13;
                } else if (cyclist.position == 14) {
                    score += 12;
                } else if (cyclist.position == 15) {
                    score += 11;
                } else if (cyclist.position == 16) {
                    score += 10;
                } else if (cyclist.position == 17) {
                    score += 9;
                } else if (cyclist.position == 18) {
                    score += 8;
                } else if (cyclist.position == 19) {
                    score += 7;
                } else if (cyclist.position == 20) {
                    score += 6;
                } else if (cyclist.position == 21) {
                    score += 5;
                } else if (cyclist.position == 22) {
                    score += 4;
                } else if (cyclist.position == 23) {
                    score += 3;
                } else if (cyclist.position == 24) {
                    score += 2;
                } else if (cyclist.position == 25) {
                    score += 1;
                }

                c.score += score;
                game.players.forEach(player => {
                    // De lijst waaruit ik pak moet wrs nog eens aangepast worden
                    if (player.list_active.some(p => p.cyclist_id == cyclist.cyclist_id)) {
                        player.list_score[game.current_stage - 1] += score;
                    }
                });
            }
        });

    });
    updateButtons();

  })
  .catch(err => console.error("Error loading JSON:", err));

  console.log(game);
















  //Laad leaders data op van huidige stage.
fetch(base_url + "/leaders.json")
  .then(res => res.json())
  .then(data => {

    data.Cyclist.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id == cyclist.cyclist_id) {
                console.log("Cyclist " + c.cyclist_id + " is a leader and gets 10 points.");
                c.score += 10;
            }
        });

    });

  })
  .catch(err => console.error("Error loading JSON:", err));

  console.log(game);


//Nu nog een check toevoegen om te kijken of ik laatste stage zit. Zoja dan gaje naar eindafrekening.
//Maak dus best gwn een andere knop hiervoor aan.





//Checken welke stage we zitten.

function updateButtons() {
    if (game.current_stage == game.players[0].list_score.length) {
        document.getElementById("nextStage").style.display = "none";
        document.getElementById("endScore").style.display = "block";
    } else {
        document.getElementById("nextStage").style.display = "block";
        document.getElementById("endScore").style.display = "none";
    }
}








//Knop voor volgende stage
document.getElementById("nextStage").addEventListener("click", () => {
    game.current_stage += 1;
    localStorage.setItem("game", JSON.stringify(game));

    window.location.href = "stage_score.html";
});

//Knop voor eindafrekening
document.getElementById("endScore").addEventListener("click", () => {
    localStorage.setItem("game", JSON.stringify(game));

    window.location.href = "eindafrekening.html";
});







