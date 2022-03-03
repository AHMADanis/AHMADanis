import React from 'react'
import styled from 'styled-components'
import { Heading } from './common/Heading'
import { backgrounds } from 'polished'
import Data from '../data/Data'
import Mycolors from './common/Mycolors'

export const Header = styled.div`
    min-height: 180px;
    ${backgrounds('url("/image/background.jpg")',
    `linear-gradient(${Mycolors.purple}, ${Mycolors.light})`,
    `center no-repeat`)}
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    text-shadow: 1px 1px 2px black, 0 0 15px black,  0 0 1px black;
    `

const TopHeading = styled(Heading)`
    text-transform: uppercase;
    letter-spacing: -0.05em;
    user-select: none;
    transition: all 0.25s ease-out;
    text-shadow: 1px 1px 1px black, 0 0 15px black, 0 0 3px black;
    `


export default function HeaderSec(){
    return (
        <>
            <Header>
                <TopHeading h1 center secondary>{Data.Name}</TopHeading>
                <Heading h3 center secondary>{Data.JobTitle}</Heading>
            </Header>
        </>
    )
}

