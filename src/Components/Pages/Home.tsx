import React from "react";

import { FlexBlock } from "../Styles/Block";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import PopUpMenuContainer from "../../Containers/PopUpMenuContainer";
import ControlPanelContainer from "../../Containers/ControlPanelContainer";

const Home = () => {
    return(
        <>
            <ControlPanelContainer />
            <FlexBlock>
                <LeftPanel></LeftPanel>
                <RightPanel></RightPanel>
            </FlexBlock>
            <PopUpMenuContainer />
        </>
    );
}

export default Home;