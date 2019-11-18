import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { AddRequirement } from "../Actions/RequirementsActions";

export default class ProjectApi
{
    public static CreateProject(name: string): any
    {
        return (dispatch: any) => {
            fetch("https://localhost:5001/Projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({ name: name })
            })
            .then(r => r.text())
            .then(r => dispatch(AddRequirement(this.createRequirement(Number.parseInt(r), name))));
        }
    }

    private static createRequirement(id: number, name: string): IFullRequirement
    {
        
        const newRequirement: IRequirement = {
            Id: id,
            Name: name,
            Requirements: new Array<IRequirement>()
        }
        
        return {
            ParentId: null,
            Requirement: newRequirement
        };
    }
}