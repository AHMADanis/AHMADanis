import styled from 'styled-components'
import React from 'react'
import { Icon, Divider, IconTextWrapper } from '../ContactSec'
import { ImUser } from 'react-icons/im';
import { GiProgression, GiPodiumWinner, GiFlexibleStar, GiBookshelf } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import { Text } from './Text'

import { Heading } from './Heading';

const MainContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 4% 0 4%;
justify-content: space-between;

`
const LeftContainer = styled.div`
display: flex;
flex-direction: column;
background-color: whitesmoke;
width: 40%;
min-height: 700px;
height: 100%;
padding: 20px;
`


const RightContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
min-height: 700px;
height: 100%;
padding: 20px;
`


export default function Container() {
    return (
        <div>
            <MainContainer>
                <LeftContainer>
                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><ImUser /></Icon>
                        <Heading h4 noMargin={0} marginLeft>ABOUT ME</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>

                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><GiProgression /></Icon>
                        <Heading h4 noMargin={0} marginLeft>SKILLS</Heading>
                    </IconTextWrapper>
                    <Divider />

                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><GiPodiumWinner /></Icon>
                        <Heading h4 noMargin={0} marginLeft>AWARDS</Heading>
                    </IconTextWrapper>
                    <Divider />
                </LeftContainer>

                <RightContainer>
                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><GiBookshelf /></Icon>
                        <Heading h4 noMargin={0} marginLeft>EDUCATION</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><GoTools /></Icon>
                        <Heading h4 noMargin={0} marginLeft>EXPERIENCE</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <IconTextWrapper >
                        <Icon color="navy" size="26px"><GiFlexibleStar /></Icon>
                        <Heading h4 noMargin={0} marginLeft>HOBBIES n INTERESTS</Heading>
                    </IconTextWrapper>
                    <Divider />
                </RightContainer>
            </MainContainer>
        </div>
    )
}
