const keys = require('../config/keys')
const request = require('request')

module.exports = app => {
  app.get('/api/riotgames/summoner', (req, res) => {
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.name}?api_key=${keys.riotGamesClientKey}`
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

  app.get('/api/riotgames/matches', (req, res) => {
    const url = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.query.accountId}?api_key=${keys.riotGamesClientKey}`
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

  app.get('/api/riotgames/match', (req, res) => {
    const url = `https://na1.api.riotgames.com//lol/match/v4/matches/${req.query.matchId}?api_key=${keys.riotGamesClientKey}`
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