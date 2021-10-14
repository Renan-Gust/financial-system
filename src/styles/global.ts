import styled, { createGlobalStyle }  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'DM Sans', sans-serif;
    }
`

export const Container = styled.div``

export const Header = styled.div`
    background-color: darkblue;
    height: 150px;
    text-align: center;
`

export const HeaderText = styled.h1`
    color: #FFF;
    padding-top: 30px;
`

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`