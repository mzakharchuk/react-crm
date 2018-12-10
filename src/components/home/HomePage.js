import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export class HomePage extends React.Component {
    render(){
        return (
            <div>
                <Wrapper>
                    <Title>Hello! it's home page</Title>
                </Wrapper>
            </div>
        )
    }
}
