

let savedGame = localStorage.getItem("game");

if (savedGame) {
  let saved = JSON.parse(savedGame);
  console.log("Game geladen:", saved);
} else {
  console.log("Geen opgeslagen game gevonden");
}


let current_race;




//Pak alle mogelijke races

  fetch("./Data/2025/races.json")
  .then(res => res.json())
  .then(data => {
        const list = document.getElementById("races");

        data.Race.forEach(Race => {
            const li = document.createElement("li");
            li.textContent = `${Race.race_id} - ${Race.name}`;


            // belangrijk: id opslaan in HTML element
            li.dataset.id = Race.race_id;

             // belangrijk: id opslaan in HTML element
            li.dataset.id = Race.race_id;

            
            // klikbaar maken
            li.addEventListener("click", () => {
                console.log("Gekozen race:", Race.race_id);

                loadCyclists(Race);
                // optioneel: visueel highlighten
                document.querySelectorAll("#races li").forEach(el => {
                el.classList.remove("selected");
                });
                li.classList.add("selected");
            });


            list.appendChild(li);
      });
  })
  .catch(err => console.error("Error loading JSON:", err));





//Pak alle mogelijke renners van een race.

function loadCyclists(Race) { 
    fetch(`./Data/2025/${Race.name}/all_cyclists.json`)
  .then(res => res.json())
  .then(data => {
      const list = document.getElementById("cyclistList");

      //Maakt de lijst leeg.
      list.innerHTML = "";

      data.Cyclist.forEach(Cyclist => {
          const li = document.createElement("li");
          li.textContent = `${Cyclist.cyclist_id} - ${Cyclist.name}`;
          list.appendChild(li);
      });
  })
  .catch(err => console.error("Error loading JSON:", err));
}


