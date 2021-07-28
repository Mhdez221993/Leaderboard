class Form {
  constructor(scores = []) {
    this.appScore = scores;
  }

  createMarkup() {
    return `
      <form id="add-score" class="form">
        <input type="text" placeholder="Your name">
        <input type="text" placeholder="Your score">
        <input type="submit">
      </form>`;
  }

  render(selector) {
    const markup = this.createMarkup();
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  bindEvents() {
    const form = document.getElementById("add-score");
    form.addEventListener("submit", e => {
      e.preventDefault();

      const el = e.target;
      const [ name, score ] = [el[0].value, el[1].value];

      if (!name || !score) {
        return alert('Please provide a valid imput!');
      }


      this.appScore.postScore(name, score)

      el[0].value = "";
      el[1].value = "";
    });
  }
}

export default Form;
