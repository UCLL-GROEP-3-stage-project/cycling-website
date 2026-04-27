import { Cyclist } from "../Classes/cyclist.js";


//De Game class
export class Game {
  constructor(race_name, players) {
    this.race_name = race_name;
    this.players = players;
    this.current_stage = 0;
    this.all_cyclists = [];

  fetch(`../Data/2025/${this.race_name}/all_cyclists.json`)
    .then(res => res.json())
    .then(data => {

      this.all_cyclists = data.Cyclist.map(
        c => new Cyclist(c.cyclist_id, c.name)
      );
    });
  }
}