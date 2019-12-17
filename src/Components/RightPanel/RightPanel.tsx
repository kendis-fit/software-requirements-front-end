import React from "react";

import ProfileFormContainer from "../../Containers/ProfileFormContainer";

const RightPanel = () => {
    return(
        <div style={{ width: "calc(100% - 300px)" }}>
            <ProfileFormContainer></ProfileFormContainer>
        </div>
    );
}

export default RightPanel;