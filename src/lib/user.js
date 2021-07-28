/* eslint-disable consistent-return */

class Users {
  constructor(url, scoreList) {
    this.url = url;
    this.scoreList = scoreList;
  }

  postScore = async (name, score) => {
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(`${this.url}`, settings);
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  }

  getScore = async () => {
    const settings = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(`${this.url}`, settings);
      const data = await fetchResponse.json();
      const newScore = this.scoreList.sortScore(data.result);
      this.scoreList.createMarkup(newScore);
    } catch (e) {
      return e;
    }
  }
}

module.exports = Users;
