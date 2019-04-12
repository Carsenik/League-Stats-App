import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import Icon from './Icon'

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
            <p>Tier Average</p>
            <p>{matchStats.highestAchievedSeasonTier}</p>
        </LevelContainer>
        <ItemsContainer>
            <Items>
                <Item itemNumber={stats.item0}/>
                <Item itemNumber={stats.item1}/>
                <Item itemNumber={stats.item2}/>
                <Item itemNumber={stats.item3}/>
                <Item itemNumber={stats.item4}/>
                <Item itemNumber={stats.item5}/>
                <Item itemNumber={stats.item6}/>
                <Icon type='items' win={stats.win} />
            </Items>
            <p>Control Ward</p>
        </ItemsContainer>
        <TeamsContainer>
            <Team>
            {teams.team1.map(member => {
                return (
                <TeamMember key={member.championId}>
                    <p>{member.championId}</p>
                    <MemberName me={member.pid === matchStats.participantId}>
                    {member.summonerName}
                    </MemberName>
                </TeamMember>
                )
            })}
            </Team>
            <Team>
            {teams.team2.map(member => {
                return (
                <TeamMember key={member.championId}>
                    <p>{member.championId}</p>
                    <MemberName me={member.pid === matchStats.participantId}>
                    {member.summonerName}
                    </MemberName>
                </TeamMember>
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
    grid-template-columns: 5rem 3rem 3rem 4rem 8rem 1rem;
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

const TeamMember = styled.div`
    display: grid;
    grid-template-columns: 25px 1fr;
    grid-gap: 5px;
`

const MemberName = styled.p`
    color: ${props => (props.me ? 'black' : '#666')};
`

const Button = styled.button`
    background-color: ${props => (props.win ? '#64b1e4' : '#e89d99')};
`
