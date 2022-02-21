import React from 'react'
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Data from '../data/Data';


const Wrapper = styled.div`
display: flex;
width: 50px;
height: 50px;
`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 20px;
margin-bottom: 20px;
`

export default function Language() {

    return (
        <Row>
            <Wrapper>
                <CircularProgressbar value={0.8} maxValue={1} text={Data.languages.en} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.92} maxValue={1} text={Data.languages.ur} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.6} maxValue={1} text={Data.languages.sw} />
            </Wrapper>
            <Wrapper>
                <CircularProgressbar value={0.5} maxValue={1} text={Data.languages.du} />
            </Wrapper>
        </Row>
    )
}
