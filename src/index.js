import './style.css';
import List from './components/list';
import scores from './utils/users';

const scoreList = new List(scores);
const sortedScore = scoreList.sortScore();

document.getElementById('user-table').innerHTML = scoreList.createMarkup(sortedScore);
