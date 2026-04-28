let savedGame = localStorage.getItem("game");

if (savedGame) {
  let saved = JSON.parse(savedGame);
  console.log("Game geladen:", saved);
} else {
  console.log("Geen opgeslagen game gevonden");
}
