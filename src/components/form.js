/* eslint-disable class-methods-use-this, consistent-return, no-alert */

class Form {
  constructor(scores = []) {
    this.appScore = scores;
  }

  createMarkup() {
    return `
    <div class="form-wrapper">
    <h2 class="form-title">Add your score</h2>
      <form id="add-score" class="form">
        <input type="text" placeholder="Your name">
        <input type="text" placeholder="Your score">
        <input type="submit">
      </form>
    </div>`;
  }

  render(selector) {
    const markup = this.createMarkup();
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  bindEvents() {
    const form = document.getElementById('add-score');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const el = e.target;
      const [name, score] = [el[0].value, el[1].value];

      if (!name || !score) {
        return alert('Please provide a valid imput!');
      }

      this.appScore.postScore(name, score);

      el[0].value = '';
      el[1].value = '';
    });
  }
}

export default Form;
