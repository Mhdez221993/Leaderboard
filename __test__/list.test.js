const List = require('../src/components/list');

describe('List Class', () => {
  const score = [{ name: 'Jane', score: 25 }, { name: 'John', score: 40 }, { name: 'Jennifer', score: 20 }];
  const sortedScore = [{ name: 'Jennifer', score: 20 }, { name: 'Jane', score: 25 }, { name: 'John', score: 40 }];
  const newList = new List(score);

  const ul = `<ul> <li>Jennifer: 20</li>
<li>Jane: 25</li>
<li>John: 40</li> </ul>`;

  test('sort the scores arry base on the score property', () => {
    expect(newList.sortScore()).toEqual(sortedScore);
  });

  test('', () => {
    expect(newList.createMarkup(sortedScore)).toBe(ul);
  });
});