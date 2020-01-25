import styled from "styled-components";

import INode from "../../Interfaces/StyledComponents/INode";
import Colors from "../../Constants/Colors";
import IWriteColor from "../../Interfaces/StyledComponents/IWriteColor";
import ERequirementWrite from "../../Constants/Enumerations/ERequirementWrite";

interface ITreeNode extends INode, IWriteColor 
{ 
    Selected?: boolean;
}

export const List = styled.ul`

`;

export const TreeNode = styled.li<ITreeNode>`
    ${props => {

        let marginLeft: number = 10;
        return `padding-left: ${marginLeft * props.Level}px`;
    }};
    background: ${props => props.Selected && Colors.LightBlue};
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    :hover {
        background-color: ${Colors.LightBlueHover};
        color: white;
    };
    color: ${props => {
        if (props.Selected) return "white";
        switch (props.Write) {
            case ERequirementWrite.CREATED: return Colors.DarkYellow;
            case ERequirementWrite.DONE:
            default: return "black";
        }
    }}
`;