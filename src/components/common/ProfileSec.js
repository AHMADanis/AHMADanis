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
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`


const ProfileSec = () => {
    return (
        <>
            <Header>
                <Heading subHeading h3 center>ANEES AHMAD</Heading>
                <Heading h5 center subHeading>Full Stack Developer</Heading>
            </Header>
        </>
    )
}

export default ProfileSec