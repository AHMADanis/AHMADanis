import React from 'react'
import styled from 'styled-components'
import { Heading } from './common/Heading'
import { Text } from './common/Text'


const Wrapper = styled.div`
margin-top: 25px;
margin-bottom: 27px;
`

export default function Awards() {
    return (
        <Wrapper>
            <Heading h5>WEB DEVELOPER OF THE YEAR</Heading>
            <Text>abc development & co </Text>
            <br />
            <Heading h5>WEB DEVELOPER OF THE YEAR</Heading>
            <Text>abc development & co </Text>
        </Wrapper>
    )
}
