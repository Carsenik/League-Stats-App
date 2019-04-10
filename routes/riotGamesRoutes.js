const keys = require('../config/keys')
const request = require('request')

module.exports = app => {
  app.get('/api/riotgames/ranked-solo', (req, res) => {
    
    const url = `https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${keys.riotGamesClientKey}`
    request(url, (error, response, body) => {
      if(error) {
        console.error(error)
      }
      
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
        res.send(info);
      }
    })
  })
}