class List {
  createMarkup(scores) {
    const ul = `<ul> ${scores.map((score) => `<li>${score.user}: ${score.score}</li>`).join('\n')} </ul>`;
    document.getElementById('user-table').innerHTML = ul;
  }
  
  sortScore(scores) {
    return scores.sort((a, b) => a.score - b.score);
  }
}

module.exports = List;
