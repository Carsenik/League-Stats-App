import React from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import SummonerForm from './SummonerForm'
import SummonerStats from './SummonerStats/index'

const App = ({ showStats }) => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header>League Stats</Header>
      <SummonerForm />
      {showStats && <SummonerStats />}
    </AppWrapper>
  )
}

const mapStateToProps = ({ ui }) => ({
  showStats: ui.showStats
})

export default connect(mapStateToProps)(App)

const GlobalStyle = createGlobalStyle`
    @import 'https://fonts.googleapis.com/css?family=Roboto';

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-size: calc(10px + 2vmin);
        font-family: Roboto;
    }

    body {
        background-color: #ddd;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

    p {
        margin: 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        text-decoration: none;
        list-style: none;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    root {
        --shadow-border: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }

`

const AppWrapper = styled.div`
`
const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`
