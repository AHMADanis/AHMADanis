import React from 'react'
import styled from 'styled-components'
import ContactSec from '../ContactSec'
import DetailSec from './DetailSec'
import ProfileSec from '../ProfileSec'
import { backgrounds } from 'polished'


const PaperLayout = styled.div`
    display: flex;
    flex-direction: column;
	margin: 0 15% 0 15%;
	max-width: 100%;
    min-height: 1200px;
    height: 100%;
    align-items: stretch; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export default function Paper() {
    return (
        <div>
            <PaperLayout>
                <ProfileSec />
                <ContactSec />
                <DetailSec />
            </PaperLayout>
        </div>
    )
}
