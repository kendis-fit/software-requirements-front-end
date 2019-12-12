import IAlert from "../Interfaces/IAlert";
import IRequirement from "../Interfaces/IRequirement";
import ETypeColor from "../Constants/Enumerations/ETypeColor";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { AddAlert } from "../Actions/AlertActions";
import { LoadRequirements } from "../Actions/LoaderActions";
import { AddRequirement } from "../Actions/RequirementsActions";

export default class ProjectApi
{
    public static CreateProject(name: string): any
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadRequirements(true));

                const response = await fetch("https://localhost:5001/Projects", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({ name: name })
                    });

                if (response.status === 201)
                {
                    const result = await response.text();

                    dispatch(AddRequirement(this.createRequirement(Number.parseInt(result), name)));
                    dispatch(AddAlert(this.createAlert("Success", "Project was successfully created", ETypeColor.SUCCESS)));
                }
                else
                {
                    throw new Error("Project failed to create");
                }
            }
            catch (message)
            {
                dispatch(AddAlert(this.createAlert("Error", message.toString(), ETypeColor.DANGER)));
            }
            finally
            {
                dispatch(LoadRequirements(false));
            }
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