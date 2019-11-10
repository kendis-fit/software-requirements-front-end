import React from "react";

import { Image } from "../Styles/Image";
import { Wrapper } from "../Styles/Wrapper";
import { Input } from "../Styles/Input";
import { ControlBlock } from "../Styles/Block";
import searchImage from "../../Images/search.png";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";

const SearchPanel = () => {
    return(
        <ControlBlock Height="55px" Type={ETypeColor.PRIMARY}>
            <Wrapper Top="10px" Left="30px">
                <ControlBlock Type={ETypeColor.WHITE} Height="35px" Width="210px" Rounde="3px">
                    <Wrapper Top="2px">
                        <Input placeholder="Enter a requirement" />
                    </Wrapper>
                </ControlBlock>
            </Wrapper>
            <Wrapper Top="10px" Left="10px">
                <Image src={searchImage} height="40px" width="40px" alt="search icon" />
            </Wrapper>
        </ControlBlock>
    );
}

export default SearchPanel;