class List {
  constructor(scores) {
    this.scores = scores;
  }

  createMarkup() {
    return `<ul>
        ${this.scores.map((score) => `<li>${score.name}: ${score.score}</li>`).join('\n')}
        </ul>`;
  }

  sortScore() {
    return this.scores.sort((a, b) => a.score - b.score);
  }
}

export default List;
