

const pubsJson = require('../mocks/pubs.json');
const moment = require('moment');

function getAllPubs(){
  return pubsJson;
}

function getOpenPubs() {
  return getAllPubs().filter(function (pub) {
    return pub.openDays.includes(getCurrentDay());
  })
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
