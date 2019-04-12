import React from 'react'
import styled from 'styled-components'

const Match = ({ matchStats, gameCreation, gameDuration, gameType, teams }) => {
    const { stats, championId } = matchStats

    const showAchievement = () => {
        if (stats.unrealKills > 0) {
        return 'Unreal Kill'
        } else if (stats.pentaKills > 0) {
        return 'Penta Kill'
        } else if (stats.quadraKills > 0) {
        return 'Quadra Kill'
        } else if (stats.tripleKills > 0) {
        return 'Triple Kill'
        } else if (stats.doubleKills > 0) {
        return 'Double Kill'
        } else {
        return
        }
    }

    return (
        <MatchContainer win={stats.win}>
        <ChampContainer>
            <div>
            <p>{gameType}</p>
            <p>{`${Date.now() - gameCreation} ago`}</p>
            <p>____</p>
            <p>{stats.win ? 'Victory' : 'Defeat'}</p>
            <p>{gameDuration}</p>
            </div>
            <div>{championId}</div>
        </ChampContainer>
        <KDAContainer>
            <p>
            {stats.kills} / {stats.deaths} / {stats.assists}
            </p>
            <p>
            {((stats.kills + stats.deaths + stats.assists) / 3).toFixed(2)}:1 KDA
            </p>
            <p>{showAchievement()}</p>
        </KDAContainer>
        <LevelContainer>
            <p>Level 18</p>
            <p>299(6.8) CS</p>
            <p>P/Kill 35%</p>
            <p>Match MMR 2500</p>
        </LevelContainer>
        <ItemsContainer>
            <Items>
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item0}.png`} alt={ stats.item0 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item1}.png`} alt={ stats.item1 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item2}.png`} alt={ stats.item2 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item3}.png`} alt={ stats.item3 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item4}.png`} alt={ stats.item4 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item5}.png`} alt={ stats.item5 } />
                <img src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${stats.item6}.png`} alt={ stats.item6 } />
                <p><img src='http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png' alt='items icon' /></p>
            </Items>
            <p>Control Ward</p>
        </ItemsContainer>
        <TeamsContainer>
            <Team>
            {teams.team1.map(member => {
                return (
                <div key={member.championId}>
                    <p>{member.championId}</p>
                    <MemberName me={member.pid === matchStats.participantId}>
                    {member.summonerName}
                    </MemberName>
                </div>
                )
            })}
            </Team>
            <Team>
            {teams.team2.map(member => {
                return (
                <div key={member.championId}>
                    <p>{member.championId}</p>
                    <MemberName me={member.pid === matchStats.participantId}>
                    {member.summonerName}
                    </MemberName>
                </div>
                )
            })}
            </Team>
        </TeamsContainer>
        <Button win={stats.win}>></Button>
        </MatchContainer>
    )
}

export default Match

const MatchContainer = styled.div`
    min-width: 100%;
    display: grid;
    grid-template-columns: repeat(6, max-content);
    grid-gap: 5px;
    background-color: ${props => (props.win ? '#a3cfec' : '#e2b6b3')};
    border: ${props => (props.win ? '1px solid #99b9ce' : '1px solid #cda7a6')};
    font-size: 0.4rem;
    box-shadow: var(--shadow-border);
`

const ChampContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const KDAContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LevelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    & img {
        width: 25px;
        height: 25px;
    }
`

const TeamsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
`
const Team = styled.div`
    display: flex;
    flex-direction: column;
`

const MemberName = styled.p`
    color: ${props => (props.me ? 'black' : '#666')};
`

const Button = styled.button`
    background-color: ${props => (props.win ? '#64b1e4' : '#e89d99')};
`
