import styled from "styled-components";

import INode from "../../Interfaces/StyledComponents/INode";
import Colors from "../../Constants/Colors";

export const List = styled.ul`

`;

export const TreeNode = styled.li<INode>`
    ${props => {

        let marginLeft: number = 10;
        return `padding-left: ${marginLeft * props.Level}px`;
    }};
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    :hover {
        background-color: ${Colors.LightBlueHover};
        color: white;
    }
`;