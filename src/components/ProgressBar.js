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
            <Text>Javascript</Text>
            <Progress percent={85} color='red' status="active" />
            <Text>React, React-Native</Text>
            <Progress percent={70} status="active" />
            <Text>Html, Css</Text>
            <Progress percent={95} status="active" />
            <Text>NodeJs</Text>
            <Progress percent={90} status="active" />
            <Text>Git</Text>
            <Progress percent={70} status="active" />
            <Text>SQL, MongoDB</Text>
            <Progress percent={88} status="active" />
            <Progress
                type="circle"
                strokeWidth={6}
                Text='Hello'
            />
        </Wrapper>
    )
}
