import React from 'react'
import styled from 'styled-components'

const SmallChamp = ({ champNumber, me }) => (
    <ChampionContainer>
        <Image me={me} src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${champNumber}.png`} alt={champNumber} />
    </ChampionContainer>
)

export default SmallChamp

const ChampionContainer = styled.div`

`

const Image = styled.img`
    width: 15px;
    height: 15px;
    border-radius: ${props => props.me ? '50%' : '0'}
`