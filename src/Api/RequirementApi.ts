import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { AddRequirement, RemoveRequirement } from "../Actions/RequirementsActions";

export default class RequirementApi
{
    public static CreateRequirement(name: string, parentId: number): any
    {
        return (dispatch: any) => {
            fetch(`https://localhost:5001/Requirements/${parentId}`, {
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

    public static RemoveRequirement(id: number): any
    {
        return (dispatch: any) => {
            fetch(`https://localhost:5001/Requirements/${id}`, {
            method: "DELETE"
            })
            .then(r => {
                if (r.status === 200) {
                    dispatch(RemoveRequirement(id));
                }
            })
        }
    }

    private static createRequirement(id: number, name: string, parentId: number): IFullRequirement
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