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
import Data from '../../data/Data';

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
                        <Heading h4 marginLeft>{Data.heading.about}</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <br />
                    <Text P1 mBottom='30px'>{Data.aboutTxt}</Text>

                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiProgression /></Icon>
                        <Heading h4 marginLeft>{Data.heading.skill}</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <ProgressBar />

                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiPodiumWinner /></Icon>
                        <Heading h4 marginLeft>{Data.heading.award}</Heading>
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
                        <Heading h4 marginLeft>{Data.heading.edu}</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <EduSec />
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GoTools /></Icon>
                        <Heading h4 marginLeft>{Data.heading.exp}</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <Experience />
                    <IconTextWrapper >
                        <Icon color='Mycolors.night' size="26px"><GiFlexibleStar /></Icon>
                        <Heading h4 marginLeft>{Data.heading.interest}</Heading>
                    </IconTextWrapper>
                    <Divider />
                    <Hobbies />
                </RightContainer>
            </MainContainer>
        </div>
    )
}
