import styled from "styled-components";

import Colors from "../../Constants/Colors";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import ITypeColor from "../../Interfaces/StyledComponents/ITypeColor";

export const Alert = styled.ul`
    position: absolute;
    top: 0;
    left: calc(99% - 250px);
    /* height: 850px; */
    width: 250px;
    background: transparent;
    z-index: 1;
`;

export const AlertBlock = styled.li<ITypeColor>`
    ${props => {
        switch (props.Type) 
        {
            case ETypeColor.SUCCESS:
                return `background: ${Colors.Green}`;
            case ETypeColor.DANGER:
                return `background: ${Colors.Red}`;
            default:
                return ``;
        }
    }};
    opacity: 0.75;
    margin-top: 20px;
    color: black;
    border-radius: 3px;
`;

export const AlertHeader = styled.div`
    padding: 10px;
    text-align: center;
`;

export const AlertTitle = styled.h1`
    font-size: 16px;
`;

export const AlertMessage = styled.div`
    border-top: 1px solid black;
    padding: 10px;
`;