/* eslint-disable no-undef */

createNewGameId = async (url, yourGamesName) => {
  const settings = {
    method: 'POST',
    body: JSON.stringify({
      name: yourGamesName,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(`${url}`, settings);
    const data = await fetchResponse.json();
    return data.result.split(' ')[3];
  } catch (e) {
    return e;
  }
};

module.exports = createNewGameId;
