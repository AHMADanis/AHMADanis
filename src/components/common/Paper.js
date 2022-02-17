import React from 'react'
import styled from 'styled-components'
import ContactSec from '../ContactSec'
import Container from './Container'
import ProfileSec from './ProfileSec'



const PaperLayout = styled.div`
    background-color: #65b2c6; //blue shade;
    display: flex;
    flex-direction: column;
	margin: 0 10% 0 10%;
	max-width: 100%;
    min-height: 1200px;
    height: 100%;
    align-items: stretch;
  
`



export default function Paper() {
    return (
        <div>
            <PaperLayout>
                <ProfileSec />
                <ContactSec />
                <Container />
            </PaperLayout>
        </div>
    )
}
