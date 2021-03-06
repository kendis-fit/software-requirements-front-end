import React, { Fragment } from "react";

import RequirementsEmpty from "./RequirementsEmpty";
import RequirementItemContainer from "../../../Containers/RequirementItemContainer";

import IRequirement from "../../../Interfaces/IRequirement";
import IRequirementLevel from "../../../Interfaces/IRequirementLevel";

interface IRequirementList extends IRequirementLevel
{
    Requirements: IRequirement[];
    LoadRequirements: boolean;
    Id: number | null;
}

const RequirementList = ({ LoadRequirements, Requirements, ParentId, Level, Id }: IRequirementList) => {
    if (LoadRequirements && !ParentId)
        return <span>Loading...</span>;
    if (Requirements.length === 0 && !ParentId)
        return <RequirementsEmpty />;
    return(
        <>
            {
                Requirements.map((r, i) =>
                    <Fragment key={i}>
                        <RequirementItemContainer SelectedId={Id} Write={r.write} Id={r.id} ParentId={ParentId} Name={r.name} Level={ParentId === undefined ? Level : Level + 1} />
                        {
                            r.requirements && r.requirements.length > 0 &&
                            <RequirementList Id={Id} LoadRequirements={false} Requirements={r.requirements} ParentId={r.id} Level={Level + 1} />
                        }
                    </Fragment>
                )
            }
        </>
    );
}

export default RequirementList;