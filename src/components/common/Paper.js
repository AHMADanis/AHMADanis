import React from 'react'
import styled from 'styled-components'
import ContactSec from '../ContactSec'
import Container from './Container'
import ProfileSec from './ProfileSec'
import { backgrounds } from 'polished'


const PaperLayout = styled.div`
    ${backgrounds('url("/image/background.jpg")', 'linear-gradient(#d7e1ec, #ffffff)', 'center no-repeat')}
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
