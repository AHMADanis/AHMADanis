import React from 'react'
import styled, { css } from 'styled-components';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs'
import { Text } from './common/Text'
import img2 from '../images/profile2.jpeg'
import Data from '../data/Data';
import Mycolors from './common/Mycolors';


const ContactContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
margin: 20px;
`

export const ProfileImg = styled.div`
background-size: cover;
background-position: center;
height: 180px;
width: 180px;
border-radius: 50%;
background-image: url(${img2});
box-shadow: 1px 1px 2px #0a102b, 0 0 15px gray, 0 0 5px #0a102b;
`

const IconStyler = styled.span`
    color: ${(props) => props.color};
    & svg {
        ${({ size }) =>
        size &&
        css`
                width: ${size};
                height: ${size};
            `}	
    }`;

export const Icon = ({ children, ...props }) => {
    return <IconStyler {...props}>{children}</IconStyler>;
};

export const IconTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: ${(props) => props.pTop};
    padding-bottom: ${(props) => props.pBottom};
    align-items: center;
`;




export const Divider = styled.div`
border-top: 1px solid #0a102b;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(92, 75, 206, 0.13);

`

export default function ContactSec() {
    return (
        <ContactContainer>
            <div>
                <IconTextWrapper pBottom='10px'>
                    <Icon color="#0a102b" size="24px"><BsLinkedin /></Icon>
                    <Text mLeft='10px' P2 >{Data.LinkedIn}</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper pTop='10px'>
                    <Icon color="#0a102b" size="24px"><MdEmail /></Icon>
                    <Text mLeft='10px' P2 >{Data.Email}</Text>
                </IconTextWrapper>
            </div>
            <div><ProfileImg /></div>
            <div>
                <IconTextWrapper pBottom='10px'>
                    <Icon color="#0a102b" size="24px"><MdPhone /></Icon>
                    <Text mLeft='10px' P2 >{Data.Phone}</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper pTop='10px'>
                    <Icon color="#0a102b" size="24px"><MdLocationPin /></Icon>
                    <Text mLeft='10px' P2>{Data.Address}</Text>
                </IconTextWrapper>
            </div>
        </ContactContainer>
    )
}

