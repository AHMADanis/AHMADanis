import styled from 'styled-components'
import React from 'react'
import { Icon, Divider, IconTextWrapper } from '../ContactSec'
import { ImUser } from 'react-icons/im';
import { GiProgression, GiPodiumWinner, GiFlexibleStar, GiBookshelf } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import { Text } from './Text'

import { Heading } from './Heading';
import ProgressBar from '../ProgressBar';
import EduSec from '../EduSec';
import Experience from '../Experience';
import Hobbies from '../Hobbies';

const MainContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 4% 0 4%;
justify-content: space-between;

`
const LeftContainer = styled.div`
display: flex;
flex-direction: column;
width: 40%;
min-height: 700px;
height: 100%;
margin: 20px;
`


const RightContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
min-height: 700px;
height: 100%;
margin: 20px;
`


export default function DetailSec() {
    return (
        <div>
            <MainContainer>
                <LeftContainer>
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><ImUser /></Icon>
                        <Heading h4 marginLeft>ABOUT ME</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <br />
                    <Text P1 mBottom='30px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>

                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiProgression /></Icon>
                        <Heading h4 marginLeft>SKILLS</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <ProgressBar />

                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiPodiumWinner /></Icon>
                        <Heading h4 marginLeft>AWARDS</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <br />
                    <Heading h5>WEB DEVELOPER OF THE YEAR</Heading>
                    <Text>abc development & co </Text>
                    <br />
                    <Heading h5>WEB DEVELOPER OF THE YEAR</Heading>
                    <Text>abc development & co </Text>
                </LeftContainer>

                <RightContainer>
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiBookshelf /></Icon>
                        <Heading h4 marginLeft>EDUCATION</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <EduSec />
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GoTools /></Icon>
                        <Heading h4 marginLeft>EXPERIENCE</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <Experience />
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiFlexibleStar /></Icon>
                        <Heading h4 marginLeft>HOBBIES & INTERESTS</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <Hobbies />
                </RightContainer>
            </MainContainer>
        </div>
    )
}
