import React, { useState, useRef, useCallback, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { getSummonerData } from './ui_store/ui_actions'

const SummonerForm = props => {
    const {getSummonerData} = props
    const [text, updateText] = useState('')
    const textRef = useRef()

    useLayoutEffect(() => {
        textRef.current = text
    })

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        e.stopPropagation()
        const currentText = textRef.current
        getSummonerData(currentText);
        updateText('')
    }, [textRef])

    return (
        <FormContainer onSubmit={e => handleSubmit(e)}>
        <Input
            type='search'
            placeholder="Summoner Name"
            value={text}
            onChange={e => updateText(e.target.value)}
            onKeyPress={e => (e.key === 'Enter' ? handleSubmit(e) : null)} />
        </FormContainer>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ getSummonerData }, dispatch)

export default connect(null, mapDispatchToProps)(SummonerForm)

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`

const Input = styled.input.attrs({
  	type: 'text'
})`
	background-color: transparent;
	border-style: none;
	border-bottom-style: solid;
    border-bottom-color: #555;
    text-align: center;
    color: #333;
	font-size: 1rem;
	height: 2rem;
	line-height: 3rem;
	&:focus {
		border-bottom-color: red;
		outline: none;
	}
`