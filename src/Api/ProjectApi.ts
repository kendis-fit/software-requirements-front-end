import IAlert from "../Interfaces/IAlert";
import IRequirement from "../Interfaces/IRequirement";
import ETypeColor from "../Constants/Enumerations/ETypeColor";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { AddAlert } from "../Actions/AlertActions";
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
            .then(r => {
                if (r.status === 201)
                    return r.text();
                throw new Error("Project failted to create");
            })
            .then(r => {
                console.log("r", r);
                if (r) {
                    dispatch(AddRequirement(this.createRequirement(Number.parseInt(r), name)));
                    dispatch(AddAlert(this.createAlert("Success", "Project was successfully created", ETypeColor.SUCCESS)));
                }
            })
            .catch(error => dispatch(AddAlert(this.createAlert("Error", error.toString(), ETypeColor.DANGER))));
        }
    }

    private static createAlert(title: string, message: string, type: ETypeColor): IAlert
    {
        const newAlert: IAlert = {
            Id: Math.random(),
            Title: title,
            Message: message,
            Type: type
        }
        return newAlert;
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