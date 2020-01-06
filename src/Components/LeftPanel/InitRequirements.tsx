import React from "react";

import RequirementListContainer from "../../Containers/RequirementListContainer";

interface IInitRequirements
{
    InitRequirements: (id: number[]) => any; 
}

const InitRequirements = ({ InitRequirements }: IInitRequirements) => {
    
    const projects = localStorage["projectsId"];

    if (projects) {

        InitRequirements(JSON.parse(projects));
    }
    
    return(
        <ul>
            <RequirementListContainer Level={1} />
        </ul>
    );
}

export default InitRequirements;