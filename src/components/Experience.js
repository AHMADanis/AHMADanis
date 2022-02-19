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


export default function Experience() {
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#405b73',
        subtitleColor: 'green',
        textColor: '#262626',
    };

    return (
        <div>
            <Timeline theme={customTheme} dateFormat='l'>
                <Container>
                    <YearContent startDate='2020/09/01' currentDate />
                    <BodyContent>
                        <Section title='Freelance'>
                            <Description variant='subtitle' text='Full Stack Developer' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2018/06/01' endDate='2019/01/30' />
                    <BodyContent>
                        <Section title='Front End Developer'>
                            <Description variant='subtitle' text='ABC Tech' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2017/07/15' endDate='2017/12/30' />
                    <BodyContent>
                        <Section title='Android & iOS Application Developer'>
                            <Description variant='subtitle' text='Smart Devs' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.' />
                        </Section>
                    </BodyContent>
                </Container>
            </Timeline>
        </div>
    )
}
