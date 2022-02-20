import React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading'
import { backgrounds } from 'polished'
import BgImage from './cover.jpg'



export const HeaderImg = styled.div`
    min-height: 160px;
   /*  background-color: #d73d6c; //darkpink */
     ${backgrounds('url("/image/background.jpg")', 'linear-gradient(#09203f, #537895)', 'center no-repeat')}


    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid #fff;
`


const ProfileSec = () => {
    return (
        <>
            <HeaderImg>
                <Heading h3 center>Anees Ahmad</Heading>
                <Heading h5 center subHeading>Full Stack Developer</Heading>
            </HeaderImg>
        </>
    )
}

export default ProfileSec