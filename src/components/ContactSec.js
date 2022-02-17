import React from 'react'
import styled, { css } from 'styled-components';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { Text } from './common/Text'


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

export const IconTextWrapper = styled.div`
    display: flex;
    align-items: center;
 padding: ${(props) => props.padding};
`;


const Icon = ({ children, ...props }) => {
    return <IconStyler {...props}>{children}</IconStyler>;
};


export const ProfileImg = styled.div`
border: 3px solid #fff;
height: 140px;
width: 140px;
border-radius: 50%;
border-style: double;
`

const ContactContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
margin: 20px;
width: 100%;
`

const Divider = styled.div`
border-top: 3px solid #fff;
  border-radius: 5px;
  border-style: double;
`

export default function ContactSec() {
    return (
        <ContactContainer>
            <div>
                <IconTextWrapper padding='10px'>
                    <Icon color="gray" size="14px"><ImUser /></Icon>
                    <Text color="gray" size="14px">aneesahmad.netlify.app/</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper padding='10px'>
                    <Icon color="gray" size="14px"><MdEmail /></Icon>
                    <Text color="gray" size="14px">inbox.ahmad.a@gmail.com</Text>
                </IconTextWrapper>
            </div>
            <div><ProfileImg /></div>
            <div>
                <IconTextWrapper padding='10px'>
                    <Icon color="gray" size="14px"><MdPhone /></Icon>
                    <Text color="gray" size="14px">+46 721262770</Text>
                </IconTextWrapper>
                <Divider />
                <IconTextWrapper padding='10px'>
                    <Icon color="gray" size="14px"><MdLocationPin /></Icon>
                    <Text color="gray" size="14px">Gymnasistgatan 33C 21551 Malmö</Text>
                </IconTextWrapper>
            </div>
        </ContactContainer>
    )
}




/////

/* import React from 'react';
import styled, { css } from 'styled-components';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { Text } from '../common';

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

export const IconTextWrapper = styled.div`
    display: flex;
    align-items: center;
 padding: ${(props) => props.padding};
`;


const Icon = ({ children, ...props }) => {
    return <IconStyler {...props}>{children}</IconStyler>;
};

function ContactSec() {
    return (
        <>
            <IconTextWrapper padding='10px'>
                <Icon color="gray" size="14px"><ImUser /></Icon>
                <Text color="gray" size="14px">https://aneesahmad.netlify.app/</Text>
            </IconTextWrapper>

            <IconTextWrapper padding='10px'>
                <Icon color="gray" size="14px"><MdEmail /></Icon>
                <Text color="gray" size="14px">inbox.ahmad.a@gmail.com</Text>
            </IconTextWrapper>

            <IconTextWrapper padding='10px'>
                <Icon color="gray" size="14px"><MdPhone /></Icon>
                <Text color="gray" size="14px">+46 721262770</Text>
            </IconTextWrapper>

            <IconTextWrapper padding='10px'>
                <Icon color="gray" size="14px"><MdLocationPin /></Icon>
                <Text color="gray" size="14px">Gymnasistgatan 33C 21551 Malmö</Text>
            </IconTextWrapper>
        </>
    );
};

export default ContactSec
 */
