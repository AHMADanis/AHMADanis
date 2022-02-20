import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
	margin-bottom: ${(props) => props.noMargin && '0'};
	color: ${(props) => (props.primary ? '#0a102b' : '#182547')};
	font-family: 'Poppins', sans-serif;
	font-weight: 200;
	margin-left: 10px;
	text-align: ${(props) => {
        if (props.center) return 'center';
        if (props.right) return 'right';
        return 'left';
    }};

	max-width: 100%;
`;


const Para1 = styled.p`
	font-size: 14px;
	font-weight: normal;
	margin-bottom: 5px;
	${baseStyle};
`;

const Para2 = styled.p`
    ${baseStyle};
	font-size: 20px;
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
