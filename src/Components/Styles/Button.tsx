import styled from "styled-components";

import Colors from "../../Constants/Colors";
import IRounde from "../../Interfaces/StyledComponents/IRounde";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import IDisable from "../../Interfaces/StyledComponents/IDisable";
import ITypeColor from "../../Interfaces/StyledComponents/ITypeColor";

interface IButton extends ITypeColor, IRounde, IDisable 
{
    TypeButton: string;
}

export const Button = styled.button.attrs<IButton>(props => ({ disabled: props.ReadOnly, type: props.TypeButton }))<IButton>`
    cursor: pointer;
    border: 0;
    height: 40px;
    width: 90px;
    color: white;
    white-space: nowrap;
    ${props => {
        switch (props.Type)
        {
            case ETypeColor.PRIMARY:
                return `background-color: ${Colors.LightBlue};
                        :hover {
                            background-color: ${Colors.LightBlueHover};
                        }
                        :disabled {
                            background-color: ${Colors.LightBlueDisabled};
                            cursor: not-allowed;
                        }`;
            case ETypeColor.SECONDARY:
                return `background-color: ${Colors.Gray};
                        :hover {
                            background-color: ${Colors.GrayHover};
                        }
                        :disabled {
                            background-color: ${Colors.GrayDisabled};
                            cursor: not-allowed;
                        }`;
            default:
                return "background-color: white";
        }
    }};
    ${props => props.Rounde ? `border-radius: ${props.Rounde}` : ""};
    ${props => props.ReadOnly && ""};
    ${props => props.TypeButton && ""};
`;

export const ButtonWithImage = styled.button`
    border: 0;
    cursor: pointer;
    background: white;
`;