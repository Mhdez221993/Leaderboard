import './style.css'
import List from './components/list'
import scores from './utils/users'

const scoreList = new List()
const sortedScore = scoreList.sortScore(scores)


document.getElementById('user-table').innerHTML = scoreList.createMarkup(sortedScore)