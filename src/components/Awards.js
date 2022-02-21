import React from 'react'
import { Heading } from './common/Heading'
import { Text } from './common/Text'
import { Wrapper } from './common/CommonElements'
import Data from '../data/Data'


export default function Awards() {
    return (
        <Wrapper>
            <Heading h5>{Data.awards.aw1Title}</Heading>
            <Text>{Data.awards.AW1Desc}</Text>
            <br />
            <Heading h5>{Data.awards.aw2Title}</Heading>
            <Text>{Data.awards.AW1Desc}</Text>
        </Wrapper>
    )
}
