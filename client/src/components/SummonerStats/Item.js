import React from 'react'
import styled from 'styled-components'

const Item = ({ itemNumber }) => (
    <ItemContainer>
        {itemNumber === 0 ? <EmptyItem></EmptyItem> : <Image src={`https://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/${itemNumber}.png`} alt={itemNumber} />}
    </ItemContainer>
)

export default Item

const ItemContainer = styled.div`

`

const Image = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 5px;
`

const EmptyItem = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background-color: grey;
`