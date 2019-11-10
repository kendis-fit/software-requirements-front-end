import styled from "styled-components";

import Colors from "../../Constants/Colors";
import ISize from "../../Interfaces/StyledComponents/ISize";

export const Modal = styled.div`
    position: relative;
    background-color: white;
    top: 30%;
    margin: 0 auto;
    height: 75px;
    width: 400px;
    border-radius: 3px;
    z-index: 5;
`;

export const ModalHeader = styled.div<ISize>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${Colors.Blue};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    ${props => props.Height ? `height: ${props.Height}` : ""};
    ${props => props.Width ? `width: ${props.Width}` : "width: 100%"};
    border-bottom: 2px solid black;
    color: white;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.LightBlue};
    height: 100%;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: white;
    font-size: 14px;
`;