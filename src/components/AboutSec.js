import React from 'react'
import { Text } from './common/Text'
import Data from '../data/Data'
import { Wrapper } from './common/CommonElements'



export default function AboutSec() {
  return (
    <Wrapper>
      <Text P1 mBottom='5px'>{Data.aboutTxt}</Text>
    </Wrapper>
  )
}
