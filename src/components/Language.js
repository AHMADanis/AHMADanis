import React from 'react'
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Wrapper = styled.div`
display: flex;
width: 50px;
height: 50px;
`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin-top: 15px;
margin-bottom: auto;
color: red;
`

export default function Language() {

    return (
        <Row>
            <Wrapper>
                <CircularProgressbar value={0.8} maxValue={1} text={`English`} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.92} maxValue={1} text={`Urdu`} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.6} maxValue={1} text={`Swedish`} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.5} maxValue={1} text={`Dutch`} circleRatio={0.7} />
            </Wrapper>
        </Row>
    )
}
