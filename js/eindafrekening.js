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
let score = 0;

//Algemeen klassement
fetch(base_url + "/algemeen_klassement.json")
  .then(res => res.json())
  .then(data => {

    data.StageResult.forEach(cyclist => {

        game.all_cyclists.forEach(c => {
            if (c.cyclist_id === cyclist.cyclist_id) {

                if (cyclist.position == 1) {
                    score += 300;
                } else if (cyclist.position == 2) {
                    score += 240;
                } else if (cyclist.position == 3) {
                    score += 195;
                } else if (cyclist.position == 4) {
                    score += 165;
                } else if (cyclist.position == 5) {
                    score += 135;
                } else if (cyclist.position == 6) {
                    score += 105;
                } else if (cyclist.position == 7) {
                    score += 90;
                } else if (cyclist.position == 8) {
                    score += 75;
                } else if (cyclist.position == 9) {
                    score += 60;
                } else if (cyclist.position == 10) {
                    score += 51;
                } else if (cyclist.position == 11) {
                    score += 45;
                } else if (cyclist.position == 12) {
                    score += 42;
                } else if (cyclist.position == 13) {
                    score += 39;
                } else if (cyclist.position == 14) {
                    score += 36;
                } else if (cyclist.position == 15) {
                    score += 33;
                } else if (cyclist.position == 16) {
                    score += 30;
                } else if (cyclist.position == 17) {
                    score += 27;
                } else if (cyclist.position == 18) {
                    score += 24;
                } else if (cyclist.position == 19) {
                    score += 21;
                } else if (cyclist.position == 20) {
                    score += 18;
                } else if (cyclist.position == 21) {
                    score += 15;
                } else if (cyclist.position == 22) {
                    score += 12;
                } else if (cyclist.position == 23) {
                    score += 9;
                } else if (cyclist.position == 24) {
                    score += 6;
                } else if (cyclist.position == 25) {
                    score += 3;
                }

                c.score += score;
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
                    score += 100;
                } else if (cyclist.position == 2) {
                    score += 75;
                } else if (cyclist.position == 3) {
                    score += 50;
                } else if (cyclist.position == 4) {
                    score += 40;
                } else if (cyclist.position == 5) {
                    score += 30;
                } else if (cyclist.position == 6) {
                    score += 25;
                } else if (cyclist.position == 7) {
                    score += 20;
                } else if (cyclist.position == 8) {
                    score += 15;
                } else if (cyclist.position == 9) {
                    score += 10;
                } else if (cyclist.position == 10) {
                    score += 5;
                }


                c.score += score;

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
                    score += 100;
                } else if (cyclist.position == 2) {
                    score += 75;
                } else if (cyclist.position == 3) {
                    score += 50;
                } else if (cyclist.position == 4) {
                    score += 40;
                } else if (cyclist.position == 5) {
                    score += 30;
                } else if (cyclist.position == 6) {
                    score += 25;
                } else if (cyclist.position == 7) {
                    score += 20;
                } else if (cyclist.position == 8) {
                    score += 15;
                } else if (cyclist.position == 9) {
                    score += 10;
                } else if (cyclist.position == 10) {
                    score += 5;
                }


                c.score += score;

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
                    score += 100;
                } else if (cyclist.position == 2) {
                    score += 75;
                } else if (cyclist.position == 3) {
                    score += 50;
                } else if (cyclist.position == 4) {
                    score += 40;
                } else if (cyclist.position == 5) {
                    score += 30;
                } else if (cyclist.position == 6) {
                    score += 25;
                } else if (cyclist.position == 7) {
                    score += 20;
                } else if (cyclist.position == 8) {
                    score += 15;
                } else if (cyclist.position == 9) {
                    score += 10;
                } else if (cyclist.position == 10) {
                    score += 5;
                }



                c.score += score;
            }
        });

    });


  })
  .catch(err => console.error("Error loading JSON:", err));




  console.log("Game geladen:", game);