// data/dataService.js
const axios = require('axios');

async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get(url);
  return response.data;
}

module.exports = { fetchPosts };
