import React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading'
import { backgrounds } from 'polished'



export const Header = styled.div`
    min-height: 160px;
    ${backgrounds('url("/image/background.jpg")', 'linear-gradient(#09203f, #537895)', 'center no-repeat')}
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    `

const TopHeading = styled(Heading)`
    text-transform: uppercase;
    color: white;
    letter-spacing: -0.05em;
    user-select: none;
    transition: all 0.25s ease-out;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

    `


const ProfileSec = () => {
    return (
        <>
            <Header>
                <TopHeading center h2 >Anees Ahmad</TopHeading>
                <Heading h5 center subHeading>Full Stack Developer</Heading>
            </Header>
        </>
    )
}

export default ProfileSec