

const pubsJson = require('../mocks/pubs.json');
const moment = require('moment');

function getAllPubs(){
  console.log('Liste de tous les bars : ');
  for (var i in pubsJson) {
    var pub = pubsJson[i];
    console.log(' - ' + pub['name']);
  }
}

function getOpenPubs() {
  console.log('Liste des bars ouverts : ');
  for (var i in pubsJson) {
    var pub = pubsJson[i];
    if(pub['openDays'].includes(getCurrentDay())){
      console.log(' - ' + pub['name']);
    }
  }
}

function getCurrentDay(){
  switch (moment().day()) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Saturday';
    case 6: return 'Sunday';
    default: return -1;
  }
}

module.exports = {
  getAllPubs : getAllPubs,
  getOpenPubs : getOpenPubs
}
