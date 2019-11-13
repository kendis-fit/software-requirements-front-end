import React from "react";

import { Text } from "../../Styles/Text";
import { Wrapper } from "../../Styles/Wrapper";
import RequirementItemContainer from "../../../Containers/RequirementItemContainer";

import IRequirement from "../../../Interfaces/IRequirement";
import IRequirementLevel from "../../../Interfaces/IRequirementLevel";

interface IRequirementList extends IRequirementLevel
{
    Requirements: Array<IRequirement>;
}

const RequirementList = ({ Requirements, ParentId, Level }: IRequirementList) => {

    if (Requirements.length === 0 && !ParentId)
        return (
            <Wrapper Top="200px" style={{ textAlign: "center" }}>
                <Text Size="72px">Empty</Text>
            </Wrapper>
        );

    return(
        <>
            {
                Requirements.map((r, i) =>
                    <>
                    <RequirementItemContainer key={i} Id={r.Id} ParentId={ParentId} Name={r.Name} Level={ParentId ? Level : Level + 1} />
                    {
                        r.Requirements && r.Requirements.length > 0 &&
                        <RequirementList Requirements={r.Requirements} ParentId={r.Id} Level={Level + 1} />
                    }
                    </>
                )
            }
        </>
    );
}

export default RequirementList;