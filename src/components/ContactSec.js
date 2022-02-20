import React from 'react'
import styled, { css } from 'styled-components';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { Text } from './common/Text'
import img2 from '../images/profile2.jpeg'


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
box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.7);
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
                    <Icon color="#0a102b" size="24px"><ImUser /></Icon>
                    <Text P2 color="#0a102b">aneesahmad.netlify.app</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper pTop='10px'>
                    <Icon color="#0a102b" size="24px"><MdEmail /></Icon>
                    <Text P2 color="#0a102b" >inbox.ahmad.a@gmail.com</Text>
                </IconTextWrapper>
            </div>
            <div><ProfileImg /></div>
            <div>
                <IconTextWrapper pBottom='10px'>
                    <Icon color="#0a102b" size="24px"><MdPhone /></Icon>
                    <Text P2 color="#0a102b">+46 721262770</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper pTop='10px'>
                    <Icon color="#0a102b" size="24px"><MdLocationPin /></Icon>
                    <Text P2 color="#0a102b">Gymnasistgatan 33C 21551 Malmö</Text>
                </IconTextWrapper>
            </div>
        </ContactContainer>
    )
}

