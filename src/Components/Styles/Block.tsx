import styled from "styled-components";

import Colors from "../../Constants/Colors";
import IPosition from "../../Interfaces/IPosition";
import ISize from "../../Interfaces/StyledComponents/ISize";
import ITypeColor from "../../Interfaces/StyledComponents/ITypeColor";

interface IControlBlock extends ISize, ITypeColor {}
interface IContextBlock extends ISize, IPosition {}

export const FlexBlock = styled.div`
    display: flex;
`;

export const ControlBlock = styled.nav<IControlBlock>`
    display: flex;
    line-height: 25px;
    ${props => {

        switch (props.Type)
        {
            case "primary":
                return props.OutLine ? `border: 1px solid ${Colors.Blue}` : `background-color: ${Colors.Blue}`;
            case "secondary":
                return props.OutLine ? `border: 1px solid ${Colors.LightGray}` : `background-color: ${Colors.LightGray}`;
            default:
                return "background-color: white";
        }
    }}
    ${props => props.Rounde ? `border-radius: ${props.Rounde}` : ""};
    ${props => props.Height ? `height: ${props.Height}` : `height: 25px`}
    ${props => props.Width ? `width:  ${props.Width}` : `width: 100%`}
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

export const ContextBlock = styled.div<IContextBlock>`
    position: absolute;
    z-index: 10;
    background-color: ${Colors.LightGray};
    ${props => props.X && `left: ${props.X}`};
    ${props => props.Y && `top: ${props.Y}`};
`;