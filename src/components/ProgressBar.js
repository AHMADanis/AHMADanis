import styled from 'styled-components'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import React from 'react'
import { Text } from './common/Text'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.padding};
    align-items: flex-start;
    width: 90%;
`;

export default function ProgressBar() {
    return (
        <Wrapper padding=' 25px 0 15px'>
            <Text>JAVASCRIPT</Text>
            <Progress percent={85} status="active" />
            <Text>REACT</Text>
            <Progress percent={70} status="active" />
            <Text>HTML</Text>
            <Progress percent={95} status="active" />
            <Text>CSS</Text>
            <Progress percent={90} status="active" />
            <Text>GITHUB</Text>
            <Progress percent={70} status="active" />
            <Text>SQL</Text>
            <Progress percent={88} status="active" />
        </Wrapper>
    )
}
