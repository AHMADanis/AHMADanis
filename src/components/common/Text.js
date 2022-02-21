import React from 'react';
import styled, { css } from 'styled-components';
import Mycolors from './Mycolors';

const baseStyle = css`
	color: ${(props) => (props.primary ? Mycolors.navy : Mycolors.night)};
	font-family: 'Poppins', sans-serif;
	font-weight: 200;
	margin-left: ${props => props.mLeft};
    margin-top: ${props => props.mTop};
    margin-bottom: ${props => props.mBottom};
	text-align: ${(props) => {
        if (props.center) return 'center';
        if (props.right) return 'right';
        return 'left';
    }};
	max-width: 100%;
    text-align: justify;
`;


const Para1 = styled.p`
	font-size: 14px;
	font-weight: normal;
	${baseStyle};
`;

const Para2 = styled.p`
    ${baseStyle};
	font-size: 18px;
	font-weight: normal;
	
`;

export const Text = ({
    P1,
    P2,
    noMargin,
    right,
    center,
    ...props
}) => {
    if (P1)
        return (
            <Para1
                noMargin={noMargin}
                right={right}
                center={center}
                {...props}
            />
        );
    if (P2)
        return (
            <Para2
                noMargin={noMargin}
                right={right}
                center={center}
                {...props}
            />
        );
    return (
        <Para1 noMargin={noMargin} right={right} center={center} {...props} />
    );
};
