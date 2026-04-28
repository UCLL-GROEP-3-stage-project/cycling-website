let current_race;




//Pak alle mogelijke races

  fetch("/Data/2025/races.json")
  .then(res => res.json())
  .then(data => {
        const list = document.getElementById("races");

        data.Race.forEach(Race => {
            const li = document.createElement("li");
            li.textContent = `${Race.race_id} - ${Race.name}`;


            // belangrijk: id opslaan in HTML element
            li.dataset.id = Race.race_id;

            
            // klikbaar maken
            li.addEventListener("click", () => {
                console.log("Gekozen race:", Race.race_id);


                // data opslaan
                localStorage.setItem("selectedRace", JSON.stringify(Race.name));

                // naar andere pagina
                window.location.href = "/pages/choosercyclist.html";
            });


            list.appendChild(li);
      });
  })
  .catch(err => console.error("Error loading JSON:", err));


