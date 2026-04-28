//localstorage data ophalen
let savedGame  = localStorage.getItem("game");

let game;

if (savedGame) {
  game = JSON.parse(savedGame);
  console.log("Game geladen:", game);

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
                p.cyclist_id === cyclist.cyclist_id
            );

            if (hasCyclist) {
                //Schrijf hier de functie die zorgt dat je je actieve lijst kan aanpassen voor deze ronde.

                console.log("Player " + player.name + " has cyclist " + cyclist.cyclist_id + " in their active list.");    
            } else {
                //
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

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.positie == 1) {
                    c.score += 100;
                } else if (cyclist.positie == 2) {
                    c.score += 80;
                } else if (cyclist.positie == 3) {
                    c.score += 65;
                } else if (cyclist.positie == 4) {
                    c.score += 55;
                } else if (cyclist.positie == 5) {
                    c.score += 45;
                } else if (cyclist.positie == 6) {
                    c.score += 35;
                } else if (cyclist.positie == 7) {
                    c.score += 30;
                } else if (cyclist.positie == 8) {
                    c.score += 25;
                } else if (cyclist.positie == 9) {
                    c.score += 20;
                } else if (cyclist.positie == 10) {
                    c.score += 17;
                } else if (cyclist.positie == 11) {
                    c.score += 15;
                } else if (cyclist.positie == 12) {
                    c.score += 14;
                } else if (cyclist.positie == 13) {
                    c.score += 13;
                } else if (cyclist.positie == 14) {
                    c.score += 12;
                } else if (cyclist.positie == 15) {
                    c.score += 11;
                } else if (cyclist.positie == 16) {
                    c.score += 10;
                } else if (cyclist.positie == 17) {
                    c.score += 9;
                } else if (cyclist.positie == 18) {
                    c.score += 8;
                } else if (cyclist.positie == 19) {
                    c.score += 7;
                } else if (cyclist.positie == 20) {
                    c.score += 6;
                } else if (cyclist.positie == 21) {
                    c.score += 5;
                } else if (cyclist.positie == 22) {
                    c.score += 4;
                } else if (cyclist.positie == 23) {
                    c.score += 3;
                } else if (cyclist.positie == 24) {
                    c.score += 2;
                } else if (cyclist.positie == 25) {
                    c.score += 1;
                }
            }
        });

    });

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
if (game.current_stage == game.players[0].list_score.length) {
    document.getElementById("nextStage").style.display = "none";
    document.getElementById("endScore").style.display = "block";
} else {
    document.getElementById("nextStage").style.display = "block";
    document.getElementById("endScore").style.display = "none";
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







