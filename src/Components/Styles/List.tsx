import styled from "styled-components";

import INode from "../../Interfaces/StyledComponents/INode";

export const List = styled.ul`

`;

export const TreeNode = styled.li<INode>`
    ${props => {

        let marginLeft: number = 5;
        return `margin-left: ${marginLeft * props.Level}px`;
    }};
    cursor: pointer;
`;