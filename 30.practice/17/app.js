// ; 4. Класс Player. Дан массив игроков — выведи имя игрока с наибольшим общим счётом.

// ; Выходные:
// ; const players = [
// ;   { name: "Alice", scores: [20, 20, 15] },
// ;   { name: "Bob", scores: [5, 8, 12, 7] },
// ;   { name: "Charlie", scores: [30, 5] },
// ; ];
// ; Выходные:
// ; [{ name: "Alice", scores: [20, 20, 15] }] - потому что 20 + 20 + 15 - наибольшая сумма

const arrPlayers = [
  { name: "Alice", scores: [20, 20, 15] },
  { name: "Bob", scores: [5, 8, 12, 7] },
  { name: "Charlie", scores: [30, 5] },
];

class Player {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }
  getTotalScore() {
    return this.scores.reduce((sum, score) => sum + score, 0);
  }
}
const players = arrPlayers.map((u) => new Player(u.name, u.scores));

const topPlayer = players.reduce((max, current) => (current.getTotalScore() > max.getTotalScore() ? current : max));

console.log(topPlayer.name);
