import { AddRequirement } from "../Actions/RequirementsActions";
import IFullRequirement from "../Interfaces/IFullRequirement";
import IRequirement from "../Interfaces/IRequirement";

export default class ProjectApi
{
    public static CreateProject(name: string, parentId: number | null = null): any
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
            .then(r => dispatch(AddRequirement(this.createRequirement(Number.parseInt(r), name, parentId))));
        }
    }

    private static createRequirement(id: number, name: string, parentId: number | null): IFullRequirement
    {
        
        const newRequirement: IRequirement = {
            Id: id,
            Name: name,
            Requirements: new Array<IRequirement>()
        }
        
        return {
            ParentId: parentId,
            Requirement: newRequirement
        };
    }
}