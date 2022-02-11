import React from 'react'
import styled from 'styled-components'


export const ProfileImg = styled.div`
position: relative;
z-index: 20;
display: block;
border: 2px solid #fff;
height: 180px;
width: 180px;
border-radius: 50%;
object-fit: cover;
margin: 20px auto;
`



const ProfileSec = () => {
    return (
        <>
            <ProfileImg />
        </>
    )
}

export default ProfileSec