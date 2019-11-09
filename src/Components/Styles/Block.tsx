import styled from "styled-components";

import Colors from "../../Constants/Colors";
import IPosition from "../../Interfaces/IPosition";
import ISize from "../../Interfaces/StyledComponents/ISize";
import IBorder from "../../Interfaces/StyledComponents/IBorder";
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
    display: flex;
    flex-direction: column;
    background-color: ${Colors.LightGray};
    ${props => props.X && `left: ${props.X}`};
    ${props => props.Y && `top: ${props.Y}`};
    ${props => props.Height && `height: ${props.Height}`};
    ${props => props.Width && `width: ${props.Width}`};
`;

export const ContextItemBlock = styled.div<IBorder>`
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
    ${props => props.IsBoardBottom && `border-bottom: 1px solid ${Colors.Gray}`};

    :hover {
        background-color: ${Colors.Gray};
    }
`;

export const DarkBackgroundBlock = styled.div`
    background-color: black;
    opacity: 0.25;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export const SmallBlockByCenter = styled.div`
    position: absolute;
    background-color: white;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    height: 200px;
    width: 200px;
    z-index: 5;
`;