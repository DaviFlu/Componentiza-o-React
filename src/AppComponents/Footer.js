import React, {Component} from "react"
import styled from "styled-components"

const Rodape = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-top: 2px solid black;
    background-color:gray;
    
`

export default class Footer extends Component{
    render(){
        return(
            <Rodape>
                <h3>Feito por: Davi Soares</h3>
                <p>Academia Vai na Web</p>
            </Rodape>
        )
    }
}