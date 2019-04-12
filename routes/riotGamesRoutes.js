const keys = require('../config/keys')
const axios = require('axios')

module.exports = app => {
    app.get('/api/riotgames/summoner', async (req, res, next) => {
        const { name, startIndex, endIndex } = req.query

        const accountData = await getSummoner(name)

        const matchIDList = await getMatches(
            accountData.accountId,
            startIndex,
            endIndex
        )

        const matchData = await MatchData(matchIDList, accountData.accountId)
        let payload = {
            summoner: `${accountData.name}`,
            matches: matchData
        }
        res.json(payload)
    })
}

const getSummoner = async name => {
    try {
        const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${
        keys.riotGamesClientKey
        }`
        const summonerRes = await axios.get(url)
        return summonerRes.data
    } catch (err) {
        console.error(err)
    }
}

const getMatches = async (accountID, startIndex, endIndex) => {
    const url = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountID}?beginIndex=${startIndex}&endIndex=${endIndex}&api_key=${
        keys.riotGamesClientKey
    }`

    const matchesRes = await axios.get(url)
    return matchesRes.data.matches.map(match => match.gameId)
}

const getMatchData = async (matchId, accountID) => {
    const url = `https://na1.api.riotgames.com//lol/match/v4/matches/${matchId}?api_key=${
        keys.riotGamesClientKey
    }`
    const matchRes = await axios.get(url)
    
    const myPID = matchRes.data.participantIdentities.find(identity => {
        if (identity.player.accountId === accountID) {
            return identity.participantId
        }
    })

    const matchStats = matchRes.data.participants.find(participant => {
        if (participant.participantId === myPID.participantId) {
            return participant
        }
    })

    const team1 = getTeam(matchRes.data, 0, 5)
    const team2 = getTeam(matchRes.data, 5, 10)

    return {
        gameType: matchRes.data.gameType,
        gameCreation: matchRes.data.gameCreation,
        gameDuration: matchRes.data.gameDuration,
        teams: {
            team1,
            team2
        },
        matchStats
    }
}

const getTeam = (data, startIndex, endIndex) => {
    const teamList = data.participantIdentities
        .slice(startIndex, endIndex)
        .map(identity => {
            return {
                pid: identity.participantId,
                summonerName: identity.player.summonerName,
                summonerId: identity.player.summonerId,
            }
        })

    const team = data.participants
        .slice(startIndex, endIndex)
        .map(participant => {
            for (let id of teamList) {
                if (participant.participantId === id.pid) {
                    return {
                        ...id,
                        championId: participant.championId
                    }
                }
            }
        })
    return team
}

const MatchData = async (list, accountID) => {
    return await Promise.all(
        list.map(async matchId => await getMatchData(matchId, accountID))
    )
}
