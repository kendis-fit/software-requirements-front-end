import styled from "styled-components";

import Colors from "../../Constants/Colors";
import IFontSize from "../../Interfaces/StyledComponents/IFontSize";

export const TextUnderline = styled.span`
    text-decoration: underline;
`;

export const Text = styled.span<IFontSize>`
    font-size: ${props => props.Size};
    color: ${Colors.LightGray};
`;