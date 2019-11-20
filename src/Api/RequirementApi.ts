import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";
import ETypeColor from "../Constants/Enumerations/ETypeColor";

import { AddAlert } from "../Actions/AlertActions";
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
            .then(r => {
                if (r.status === 201)
                    return r.text();
                throw new Error("Requirement failed to create");
            })
            .then(r => {
                dispatch(AddRequirement(this.createRequirement(Number.parseInt(r), name, parentId)));
                dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Requirement was successfully created", Type: ETypeColor.SUCCESS }));
            })
            .catch(error => AddAlert({ Title: "Error", Id: Math.random(), Message: error.toString(), Type: ETypeColor.DANGER }));
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
                    dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Requirement was successfully removed", Type: ETypeColor.SUCCESS }));
                }
                throw new Error("Removing requirement failed to create");
            })
            .catch(error => AddAlert({ Title: "Error", Id: Math.random(), Message: error.toString(), Type: ETypeColor.DANGER }));
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