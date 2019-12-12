import styled from "styled-components";

import { IWrapper } from "../../Interfaces/StyledComponents/IWrapper";

export const Wrapper = styled.div<IWrapper>`
    ${props => 
        `margin: ${props.Top || "0"} ${props.Right || "0"} ${props.Bottom || "0"} ${props.Left || "0"}`
    };
    width: 100%;
`;