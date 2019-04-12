import React from 'react'
import styled from 'styled-components'

const Champion = ({ champNumber }) => (
    <ChampionContainer>
        <Image src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${champNumber}.png`} alt={champNumber} />
    </ChampionContainer>
)

export default Champion

const ChampionContainer = styled.div`

`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`