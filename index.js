const express = require('express');
const axios = require('axios');

const githubUser = 'https://api.github.com/users/evilyn-araujo';

const app = express();

app.listen('3000');

app.route('/').get((req, res) => {

  axios.get(githubUser)
    .then(result => res.send(`<img src="${result.data.avatar_url}">`))
    .catch(error => console.error(error))

});