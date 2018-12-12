

let pubsServices = require('./services/pubs.service');

console.log(pubsServices.getAllPubs());

module.exports = {
    pubsServices : pubsServices
}
