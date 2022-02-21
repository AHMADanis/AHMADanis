import React from 'react'
import styled from 'styled-components'
import { Heading } from './common/Heading'
import { Text } from './common/Text'


const Wrapper = styled.div`
margin-top: 20px;
margin-bottom: 33px;
`

export default function Awards() {
    return (
        <Wrapper>
            <Heading h5>DEVELOPER OF THE YEAR 2020</Heading>
            <Text>abc software int </Text>
            <br />
            <Heading h5>WEB DEVELOPER OF THE YEAR 2018</Heading>
            <Text>xyz software house </Text>
        </Wrapper>
    )
}
