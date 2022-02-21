import React from 'react'
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';
import Mycolors from './common/Mycolors';
import { Wrapper } from './EduSec';

export default function Experience() {
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
            <Timeline theme={customTheme} dateFormat='l'>
                <Container>
                    <YearContent startDate='2020/09/01' currentDate />
                    <BodyContent>
                        <Section title='Freelance'>
                            <Description text='Full Stack Developer' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2018/06/01' endDate='2019/01/30' />
                    <BodyContent>
                        <Section title='Front End Developer'>
                            <Description text='ABC Tech' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2017/07/15' endDate='2017/12/30' />
                    <BodyContent>
                        <Section title='Android & iOS Application Developer'>
                            <Description text='Smart Devs' />
                            <Description variant='subtitle' text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
            </Timeline>
        </Wrapper>
    )
}
