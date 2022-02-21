import styled from 'styled-components'
import React from 'react'
import { Icon, IconTextWrapper } from '../ContactSec'
import { ImUser } from 'react-icons/im';
import { HiTranslate } from 'react-icons/hi'
import {
    GiProgression, GiPodiumWinner,
    GiFlexibleStar, GiBookshelf
} from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import { Heading } from './Heading';
import SkillsSec from '../SkillsSec';
import EduSec from '../EduSec';
import Experience from '../Experience';
import Hobbies from '../Hobbies';
import Data from '../../data/Data';
import Language from '../Language';
import Awards from '../Awards';
import AboutSec from '../AboutSec';
import { Divider } from '.';

const MainContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 5% 0 5%;
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

export default function DetailsSec() {
    return (
        <MainContainer>
            <LeftContainer>
                <IconTextWrapper >
                    <Icon color='Mycolors.night' size="26px"><ImUser /></Icon>
                    <Heading h4 marginLeft>{Data.heading.about}</Heading>
                </IconTextWrapper>
                <Divider />
                <AboutSec />
                <IconTextWrapper >
                    <Icon color='Mycolors.night' size="26px"><GiProgression /></Icon>
                    <Heading h4 marginLeft>{Data.heading.skill}</Heading>
                </IconTextWrapper>
                <Divider />
                <SkillsSec />
                <IconTextWrapper >
                    <Icon color='Mycolors.night' size="26px"><GiPodiumWinner /></Icon>
                    <Heading h4 marginLeft>{Data.heading.award}</Heading>
                </IconTextWrapper>
                <Divider />
                <Awards />
                <IconTextWrapper >
                    <Icon color='Mycolors.night' size="26px"><HiTranslate /></Icon>
                    <Heading h4 marginLeft>{Data.heading.Lan}</Heading>
                </IconTextWrapper>
                <Divider />
                <Language />
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
    )
}
