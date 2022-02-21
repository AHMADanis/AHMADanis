import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import React from 'react'
import { Text } from './common/Text'
import { Wrapper } from './common';


export default function SkillsSec() {
    return (
        <Wrapper >
            <Text>Javascript</Text>
            <Progress percent={85} status="active" />
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
        </Wrapper>
    )
}
