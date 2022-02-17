import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
	margin-bottom: ${(props) => props.noMargin && '0'};
	color: ${(props) => (props.subText ? 'gray' : 'black')};
	font-family: 'Poppins', sans-serif;
	font-weight: 100;
	margin-top: 0;
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
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 5px;
	${baseStyle};
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
