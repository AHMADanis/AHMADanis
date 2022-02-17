import styled from 'styled-components'
import React from 'react'

const MainContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 4% 0 4%;
justify-content: space-between;

`
const LeftContainer = styled.div`
display: flex;
flex-direction: column;
background-color: whitesmoke;
width: 40%;
min-height: 700px;
height: 100%;
padding: 10px;
`


const RightContainer = styled.div`
display: flex;
flex-direction: column;
background-color: whitesmoke;
width: 50%;
min-height: 700px;
height: 100%;
padding: 10px;
`


export default function Container() {
    return (
        <div>
            <MainContainer>
                <LeftContainer>
                    <h1>left</h1>
                    <h1>left</h1>
                    <h1>left</h1>
                    <h1>left</h1>
                </LeftContainer>
                <RightContainer>
                    <h1>Right</h1>
                </RightContainer>
            </MainContainer>
        </div>
    )
}
