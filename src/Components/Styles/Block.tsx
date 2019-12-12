import styled from "styled-components";

import Colors from "../../Constants/Colors";
import IPosition from "../../Interfaces/IPosition";
import ISize from "../../Interfaces/StyledComponents/ISize";
import IBorder from "../../Interfaces/StyledComponents/IBorder";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import EDirection from "../../Constants/Enumerations/EDirection";
import IDirection from "../../Interfaces/StyledComponents/IDirection";
import ITypeColor from "../../Interfaces/StyledComponents/ITypeColor";

interface IBlock extends ISize, ITypeColor {}
interface IContextBlock extends ISize, IPosition {}

export const FlexBlock = styled.div<IDirection>`
    display: flex;
    ${props => {
        switch (props.Direction)
        {
            case EDirection.ROW:
                return "flex-direction: row";
            case EDirection.COLUMN:
                return "flex-direction: column";
        
        }
    }};
`;

export const ControlBlock = styled.nav`
    display: flex;
    line-height: 25px;
    height: 25px;
    width: 100%;
    background-color: ${Colors.LightGray};
`;

export const Block = styled(FlexBlock)<IBlock>`
    ${props => {
        switch (props.Type)
        {
            case ETypeColor.PRIMARY:
                return props.OutLine ? `border: 1px solid ${Colors.Blue}` : `background-color: ${Colors.Blue}`;
            case ETypeColor.SECONDARY:
                return props.OutLine ? `border: 1px solid ${Colors.LightGray}` : `background-color: ${Colors.LightGray}`;
            default:
                return "background-color: white";
        }
    }}
    ${props => props.Rounde && `border-radius: ${props.Rounde}`};
    ${props => props.Height && `height: ${props.Height}`};
    ${props => props.Width && `width:  ${props.Width}`};
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

export const BlockCenter = styled.div`
    margin-top: 200px;
    text-align: center;
    width: 100%;
`;

export const ButtonsBlock = styled(FlexBlock)`
    justify-content: flex-end;
`;

export const BlockShowHide = styled.div`
    width: 20px;
    height: 20px;
    background: ${Colors.LightGray};
    font-size: 15px;
    text-align: center;
    display: inline-block;
    border: 1px solid black;
    color: black;
    margin-right: 5px;
`;