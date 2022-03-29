import React, {Component} from 'react'
import styled from "styled-components"

const Titulo = styled.div`
    display:flex;
    justify-content:center;
    border-bottom: 2px solid black;
    background-color:gray;
`

export default class Header extends Component{
    render(){
        return(
            <Titulo>
                <h1>Componentização</h1>
            </Titulo>
        )
    }
}