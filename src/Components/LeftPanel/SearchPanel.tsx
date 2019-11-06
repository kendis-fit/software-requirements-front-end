import React from "react";

import { Image } from "../Styles/Image";
import { Wrapper } from "../Styles/Wrapper";
import { SearchInput } from "../Styles/Input";
import { ControlBlock } from "../Styles/Block";
import searchImage from "../../Images/search.png";

const SearchPanel = () => {
    return(
        <ControlBlock Height="55px" Type="primary">
            <Wrapper Top="10px" Left="30px">
                <ControlBlock Type="white" Height="35px" Width="210px" Rounde="2px">
                    <Wrapper Top="2px">
                        <SearchInput placeholder="Enter a requirement" />
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