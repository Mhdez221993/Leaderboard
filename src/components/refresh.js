/* eslint-disable class-methods-use-this */

class RefreshButton {
  constructor(users) {
    this.users = users;
  }

  createMarkup() {
    return `
    <h2>Recent score</h2>
    <button id="refresh" class="refresh"> Refresh <i class="fas fa-sync-alt"></i> </button>
    `;
  }

  render(selector) {
    const markup = this.createMarkup();
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  bindEvents() {
    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', (e) => {
      e.preventDefault();
      this.users.getScore();
    });
  }
}

module.exports = RefreshButton;
