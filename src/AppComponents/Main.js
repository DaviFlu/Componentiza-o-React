import React, {Component} from 'react'
import styled from "styled-components"
import fundo from './img/fundo.jpg'

const Principal = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height: 75vh;
`

export default class Main extends Component{
    render(){
        return(
            <Principal>
                <h3>Aprendendo sobre Componentização e estilizando
                    com styled-component!
                </h3>
                <img className="imgFundo" src={fundo} height="80%" alt="fundo"/>

            </Principal>
        )
    }
}