import styled from 'styled-components'
import React from 'react'
import ProfileSec from './ProfileSec'


export const PaperStyle = styled.div`
height: 1000px;
width: 100%;
max-width: 1000px;
margin-right: auto;
margin-left: auto;
padding: 50px;
background-color:burlywood;
@media screen and (max-width: 991px){
padding-right: 30px;
padding-left: 30px;
}`


const Paper = () => {
    return (
        <>
            <PaperStyle>
                <ProfileSec />
            </PaperStyle>
        </>
    )
}

export default Paper
