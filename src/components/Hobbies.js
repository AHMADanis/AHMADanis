import React from 'react'
import styled from 'styled-components'
import { Icon } from './ContactSec'
import { Text } from './common/Text'
import { ImHeadphones } from 'react-icons/im';
import { GrGamepad } from 'react-icons/gr';
import { GiSecretBook, GiCommercialAirplane, GiPhotoCamera, GiVolleyballBall } from 'react-icons/gi';
import Mycolors from './common/Mycolors';



export const IconTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    align-items: center;
    justify-content: space-evenly;
`;


export default function Hobbies() {
    return (
        <Row>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><ImHeadphones /></Icon>
                <Text color="navy" size="24px">Music</Text>
            </IconTextWrapper>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><GrGamepad /></Icon>
                <Text color="gray" size="24px">Gaming</Text>
            </IconTextWrapper>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><GiSecretBook /></Icon>
                <Text color="gray" size="24px">Reading</Text>
            </IconTextWrapper>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><GiCommercialAirplane /></Icon>
                <Text color="gray" size="24px">Traveling</Text>
            </IconTextWrapper>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><GiPhotoCamera /></Icon>
                <Text color="gray" size="24px">Photo Graphy</Text>
            </IconTextWrapper>
            <IconTextWrapper>
                <Icon color={Mycolors.evening} size="24px"><GiVolleyballBall /></Icon>
                <Text color="gray" size="24px">Volley Ball</Text>
            </IconTextWrapper>

        </Row>
    )
}
