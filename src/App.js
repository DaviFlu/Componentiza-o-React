import React, {Component} from 'react'
import styled from "styled-components"
import Header from "./AppComponents/Header"
import Main from "./AppComponents/Main"
import Footer from "./AppComponents/Footer"


const Pagina = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export default class App extends Component{

  render(){
    return(
      <Pagina>
        <Header>

        </Header>
        <Main>

        </Main>
        <Footer>

        </Footer>
      </Pagina>
    )
  }

}