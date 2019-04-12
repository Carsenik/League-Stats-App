import React from 'react'
import styled from 'styled-components'

const Icon = ({ type, win }) => (
    <IconContainer win={win}>
        <Image src={`http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/${type}.png`} alt={type} />
    </IconContainer>
)

export default Icon

const IconContainer = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => (props.win ? '#64b1e4' : '#e89d99')};
    border-radius: 50%;
`

const Image = styled.img`
    padding-left: 3px;
`