const List = require('../src/components/list');



describe('List Class', () => {
  let score =  [ {"name": "Jane", "score": 25}, {"name": "John", "score": 40}, {"name": "Jennifer", "score": 20}]
  let sortedScore =  [{"name": "Jennifer", "score": 20}, {"name": "Jane", "score": 25}, {"name": "John", "score": 40}]
  let newList = new List(score)
  let ul = '<ul> <li>Jennifer: 20</li>' + '\n' + '<li>Jane: 25</li>' + '\n' + '<li>John: 40</li> </ul>'

  test('sort the scores arry base on the score property', () => {
    expect( newList.sortScore() ).toEqual(sortedScore)
  });

  test('', () => {
    expect( newList.createMarkup(sortedScore) ).toBe(ul)
  });
})