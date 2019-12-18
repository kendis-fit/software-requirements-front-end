import React from "react";

import RequirementListContainer from "../../Containers/RequirementListContainer";

interface IInitRequirements
{
    InitRequirements: (id: number) => any; 
}

const InitRequirements = ({ InitRequirements }: IInitRequirements) => {
    
    const projectId = Number(localStorage["projectId"]);

    if (projectId) {

        InitRequirements(projectId);
    }
    
    return(
        <ul>
            <RequirementListContainer Level={1} />
        </ul>
    );
}

export default InitRequirements;