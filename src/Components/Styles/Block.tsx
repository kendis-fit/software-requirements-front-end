import styled from "styled-components";

import Colors from "../../Constants/Colors";
import ISizeStyledComponent from "../../Interfaces/ISizeStyledComponent";

export const FlexBlockRow = styled.div`
    display: flex;
`;

export const ControlBlock = styled.nav<ISizeStyledComponent>`
    display: flex;
    background-color: ${Colors.LightGray};
    line-height: 25px;
    ${props => props.Height ? `height: ${props.Height}` : `height: 25px`}
    ${props => props.Width ? `width:  ${props.Width}` : `width: 100vw`}
`;

export const ControlItemBlock = styled.button`
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    border: 0;
    background-color: ${Colors.LightGray};

    :focus {
        background-color: ${Colors.Gray};
    }
`;