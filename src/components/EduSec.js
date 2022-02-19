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


export default function EduSec() {
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
            <Timeline theme={customTheme} dateFormat='ll'>
                <Container>
                    <YearContent startDate='2019/07/01' endDate='2020/06/30' />
                    <BodyContent>
                        <Section title='Malmö University'>
                            <Description variant='subtitle' text='Mobile Apps Development' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2016/01/01' endDate='2018/01/30' />
                    <BodyContent>
                        <Section title='University of The Punjab'>
                            <Description variant='subtitle' text='M.Phil (Computer Science)' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2013/07/15' endDate='2015/08/1' />
                    <BodyContent>
                        <Section title='University of The Punjab'>
                            <Description variant='subtitle' text='Master in Computer Science)' />
                            <Description text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
                        </Section>
                    </BodyContent>
                </Container>
            </Timeline>
        </div>
    )
}
