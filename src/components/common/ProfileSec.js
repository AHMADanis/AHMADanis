import React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading'
import { backgrounds } from 'polished'
import Data from '../../data/Data'
import Mycolors from './Mycolors'



export const Header = styled.div`
    min-height: 180px;
    ${backgrounds('url("/image/background.jpg")', `linear-gradient(${Mycolors.night}, ${Mycolors.evening})`, `center no-repeat`)}
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    text-shadow: 1px 1px 2px black, 0 0 45px gray, 0 0 5px black;
    `

const TopHeading = styled(Heading)`
    text-transform: uppercase;
    letter-spacing: -0.05em;
    user-select: none;
    transition: all 0.25s ease-out;
    text-shadow: 1px 1px 2px black, 0 0 45px gray, 0 0 5px red;

    `


const ProfileSec = () => {
    return (
        <>
            <Header>
                <TopHeading h1 center secondary >{Data.Name}</TopHeading>
                <Heading h3 center secondary>{Data.JobTitle}</Heading>
            </Header>
        </>
    )
}

export default ProfileSec