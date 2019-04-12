import React from 'react'
import styled from 'styled-components'
import Champion from './Champion'
import SmallChamp from './SmallChamp'
import Item from './Item'
import Icon from './Icon'

const calcGameStart = (date) => {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(Date.now());
    var secondDate = new Date(date);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return `${diffDays > 1 ? diffDays : 'a'} days ago`
}
const calcDuration = (seconds) => {
    let minutes = Math.floor(seconds / 60)
    let remainder = seconds % 60
    return `${minutes}m ${remainder}s`

}

const Match = ({ matchStats, gameCreation, gameDuration, gameType, teams }) => {
    const { stats, championId, timeline } = matchStats
    const maxLength = 10
    const showAchievement = () => {
        if (stats.unrealKills > 0) {
        return <Tag>Unreal Kill</Tag>
        } else if (stats.pentaKills > 0) {
        return <Tag>Penta Kill</Tag>
        } else if (stats.quadraKills > 0) {
        return <Tag>Quadra Kill</Tag>
        } else if (stats.tripleKills > 0) {
        return <Tag>Triple Kill</Tag>
        } else if (stats.doubleKills > 0) {
            return <Tag>Double Kill</Tag>
        } else {
            return null
        }
    }

    return (
        <MatchContainer win={stats.win}>
        <GameContainer>
            <div>
                <p>{gameType}</p>
                <p>{calcGameStart(gameCreation)}</p>
                <p>------</p>
                <p>{stats.win ? 'Victory' : 'Defeat'}</p>
                <p>{calcDuration(gameDuration)}</p>
            </div>
            <ChampContainer>
                <Champ>
                    <Champion champNumber={stats.item0} />
                    <Abilities>
                        <Item itemNumber={stats.item1} />
                        <Item itemNumber={stats.item2} />
                        <Item itemNumber={stats.item3} />
                        <Item itemNumber={stats.item3} />
                    </Abilities>
                </Champ>
                <p>Twitch</p>
            </ChampContainer>
        </GameContainer>
        <KDAContainer>
            <div>
                <span>{stats.kills}</span> / <Deaths>{stats.deaths}</Deaths> / <span>{stats.assists}</span>
            </div>
            <p>
                {(((stats.kills + stats.assists) / stats.deaths)).toFixed(2)}:1 KDA
            </p>
            {showAchievement()}
        </KDAContainer>
        <LevelContainer>
            <p>Level {stats.champLevel}</p>
                <p>{stats.totalMinionsKilled + stats.neutralMinionsKilled}(9.6) CS</p>
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
            <p>Control Ward 3</p>
        </ItemsContainer>
        <TeamsContainer>
            <Team>
            {teams.team1.map(member => {
                return (
                <TeamMember key={member.championId}>
                    <SmallChamp champNumber={stats.item0} me={member.pid === matchStats.participantId} />
                    <MemberName me={member.pid === matchStats.participantId}>
                        {
                            member.summonerName.length > maxLength
                            ? `${member.summonerName.substring(0, maxLength)}...`
                            : member.summonerName
                        }
                    </MemberName>
                </TeamMember>
                )
            })}
            </Team>
            <Team>
            {teams.team2.map(member => {
                return (
                <TeamMember key={member.championId}>
                    <SmallChamp champNumber={stats.item0} me={member.pid === matchStats.participantId} />
                    <MemberName me={member.pid === matchStats.participantId}>
                        {
                            member.summonerName.length > maxLength
                                ? `${member.summonerName.substring(0, maxLength)}...`
                                : member.summonerName
                        }
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
    grid-template-columns: max-content 3rem 3rem 4rem 7rem 1rem;
    grid-gap: 5px;
    background-color: ${props => (props.win ? '#a3cfec' : '#e2b6b3')};
    border: ${props => (props.win ? '1px solid #99b9ce' : '1px solid #cda7a6')};
    font-size: 0.4rem;
    box-shadow: var(--shadow-border);
`

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 0;
`

const ChampContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Champ = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Abilities = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`

const KDAContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .5rem;
    & span {
        font-weight: bold;
    }
`

const Deaths = styled.span`
    color: red;
`

const Tag = styled.div`
    width: max-content;
    background-color: #e4756f;
    color: white;
    border: 1px solid red;
    font-size: .4rem;
    border-radius: 10px;
    padding: 2px 5px;
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
    grid-template-columns: 15px 1fr;
    grid-gap: 5px;
`

const MemberName = styled.p`
    color: ${props => (props.me ? 'black' : '#666')};
`

const Button = styled.button`
    background-color: ${props => (props.win ? '#64b1e4' : '#e89d99')};
`
