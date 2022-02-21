import React from 'react'
import styled from 'styled-components'
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';
import Mycolors from './common/Mycolors';

export const Wrapper = styled.div`
margin-top: 10px;
`

export default function EduSec() {
    const customTheme = {
        yearColor: Mycolors.night,
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: Mycolors.night,
        subtitleColor: '#708090',
        textColor: Mycolors.rain,
    };
    return (
        <Wrapper>
            <Timeline theme={customTheme} dateFormat='ll'>
                <Container>
                    <YearContent startDate='2019/07/01' endDate='2020/06/30' />
                    <BodyContent>
                        <Section title='MALMÖ UNIVERSITY'>
                            <Description text='Mobile Apps Development' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2016/01/01' endDate='2018/01/30' />
                    <BodyContent>
                        <Section title='University of The Punjab'>
                            <Description text='M.Phil (Computer Science)' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2013/07/15' endDate='2015/08/1' />
                    <BodyContent>
                        <Section title='University of The Punjab'>
                            <Description text='Master in Computer Science)' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
            </Timeline>
        </Wrapper>
    )
}
