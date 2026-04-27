//De Player class
export class Player {
  constructor(name, amount_active = 12, amount_benched = 6) {
    this.name = name;
    this.list_active = new Array(amount_active);
    this.list_benched = new Array(amount_benched);

    this.list_score = [];

    fetch("../Data/2025/Tour de France/all_stages.json")
      .then(response => response.json())
      .then(data => {
        let k = data.Stage.length;
        this.list_score = new Array(k).fill(0);
      });
  }
}