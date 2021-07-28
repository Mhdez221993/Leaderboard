import './style.css';
import List from './components/list';
import Form from './components/form';
import Users from './lib/user';
import RefreshButton from './components/refresh';

const scoreList = new List();
const user = new Users('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yBTA3pdrF0jEHLLvtQpq/scores/', scoreList);
const form = new Form(user);
const refreshButton = new RefreshButton(user);

user.getScore();
refreshButton.render('header-score');
refreshButton.bindEvents();
form.render('add-score');
form.bindEvents();
