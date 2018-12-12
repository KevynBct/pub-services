

const pubsJson = require('../mocks/pubs.json');
const moment = require('moment');

function getAllPubs(){
  let allPubs = pubsJson.map(pub => {
    let {name, owner, openDays, openHours, drinks} = pub;
    return new Pub(name, owner, openDays, openHours, drinks);
  })
  return allPubs;
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
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default: return -1;
  }
}

class Pub {
  constructor (name, owner, openDays, openHours, drinks){
    this.name = name;
    this.owner = owner;
    this.openDays = openDays;
    this.openHours = openHours;
    this.drinks = drinks;
  }
  toString(){
    return this.name+'\n'+this.owner+'\n'+this.openDays+'\n'+this.openHours+'\n'+this.drinks;
  }
}

module.exports = {
  getAllPubs : getAllPubs,
  getOpenPubs : getOpenPubs
}
