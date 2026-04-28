//localstorage data ophalen
let savedGame  = localStorage.getItem("game");

let game;

if (savedGame) {
  game = JSON.parse(savedGame);
  console.log("Game geladen:", game);
} else {
  alert("Geen opgeslagen game gevonden");
}

let base_url = `/Data/2025/${game.race_name}/Eindafrekening`;


//Algemeen klassement
fetch(base_url + "/algemeen_klassement.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.position == 1) {
                    c.score += 300;
                } else if (cyclist.position == 2) {
                    c.score += 240;
                } else if (cyclist.position == 3) {
                    c.score += 195;
                } else if (cyclist.position == 4) {
                    c.score += 165;
                } else if (cyclist.position == 5) {
                    c.score += 135;
                } else if (cyclist.position == 6) {
                    c.score += 105;
                } else if (cyclist.position == 7) {
                    c.score += 90;
                } else if (cyclist.position == 8) {
                    c.score += 75;
                } else if (cyclist.position == 9) {
                    c.score += 60;
                } else if (cyclist.position == 10) {
                    c.score += 51;
                } else if (cyclist.position == 11) {
                    c.score += 45;
                } else if (cyclist.position == 12) {
                    c.score += 42;
                } else if (cyclist.position == 13) {
                    c.score += 39;
                } else if (cyclist.position == 14) {
                    c.score += 36;
                } else if (cyclist.position == 15) {
                    c.score += 33;
                } else if (cyclist.position == 16) {
                    c.score += 30;
                } else if (cyclist.position == 17) {
                    c.score += 27;
                } else if (cyclist.position == 18) {
                    c.score += 24;
                } else if (cyclist.position == 19) {
                    c.score += 21;
                } else if (cyclist.position == 20) {
                    c.score += 18;
                } else if (cyclist.position == 21) {
                    c.score += 15;
                } else if (cyclist.position == 22) {
                    c.score += 12;
                } else if (cyclist.position == 23) {
                    c.score += 9;
                } else if (cyclist.position == 24) {
                    c.score += 6;
                } else if (cyclist.position == 25) {
                    c.score += 3;
                }
            }
        });

    });


  })
  .catch(err => console.error("Error loading JSON:", err));




//Bergklassement
fetch(base_url + "/bergtrui.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.position == 1) {
                    c.score += 100;
                } else if (cyclist.position == 2) {
                    c.score += 75;
                } else if (cyclist.position == 3) {
                    c.score += 50;
                } else if (cyclist.position == 4) {
                    c.score += 40;
                } else if (cyclist.position == 5) {
                    c.score += 30;
                } else if (cyclist.position == 6) {
                    c.score += 25;
                } else if (cyclist.position == 7) {
                    c.score += 20;
                } else if (cyclist.position == 8) {
                    c.score += 15;
                } else if (cyclist.position == 9) {
                    c.score += 10;
                } else if (cyclist.position == 10) {
                    c.score += 5;
                }
            }
        });

    });


  })
  .catch(err => console.error("Error loading JSON:", err));





//Jongerenklassement
fetch(base_url + "/jongerentrui.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.position == 1) {
                    c.score += 100;
                } else if (cyclist.position == 2) {
                    c.score += 75;
                } else if (cyclist.position == 3) {
                    c.score += 50;
                } else if (cyclist.position == 4) {
                    c.score += 40;
                } else if (cyclist.position == 5) {
                    c.score += 30;
                } else if (cyclist.position == 6) {
                    c.score += 25;
                } else if (cyclist.position == 7) {
                    c.score += 20;
                } else if (cyclist.position == 8) {
                    c.score += 15;
                } else if (cyclist.position == 9) {
                    c.score += 10;
                } else if (cyclist.position == 10) {
                    c.score += 5;
                }
            }
        });

    });


  })
  .catch(err => console.error("Error loading JSON:", err));












//puntentrui
fetch(base_url + "/puntentrui.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.position == 1) {
                    c.score += 100;
                } else if (cyclist.position == 2) {
                    c.score += 75;
                } else if (cyclist.position == 3) {
                    c.score += 50;
                } else if (cyclist.position == 4) {
                    c.score += 40;
                } else if (cyclist.position == 5) {
                    c.score += 30;
                } else if (cyclist.position == 6) {
                    c.score += 25;
                } else if (cyclist.position == 7) {
                    c.score += 20;
                } else if (cyclist.position == 8) {
                    c.score += 15;
                } else if (cyclist.position == 9) {
                    c.score += 10;
                } else if (cyclist.position == 10) {
                    c.score += 5;
                }
            }
        });

    });


  })
  .catch(err => console.error("Error loading JSON:", err));