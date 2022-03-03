import React from 'react'
import styled from 'styled-components'
import ContactSec from '../ContactSec'
import DetailsSec from '../DetailsSec'
import HeaderSec from '../HeaderSec'


const PaperLayout = styled.div`
    background-color: '#fefefe';
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
        <>
            <PaperLayout>
                <HeaderSec />
                <ContactSec />
                <DetailsSec />
            </PaperLayout>
        </>
    )
}
