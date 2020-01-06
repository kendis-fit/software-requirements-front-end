import IAlert from "../Interfaces/IAlert";
import IRequirement from "../Interfaces/IRequirement";
import ETypeColor from "../Constants/Enumerations/ETypeColor";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { AddAlert } from "../Actions/AlertActions";
import { LoadRequirements } from "../Actions/LoaderActions";
import { AddRequirement } from "../Actions/RequirementsActions";
import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

import Config from "../Constants/Config";

export default class ProjectApi
{
    public static CreateProject(name: string): any
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadRequirements(true));

                const response = await fetch(`${Config.Url}/Projects`, {
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

    public static GetProject(id: number)
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadRequirements(true));

                const response = await fetch(`${Config.Url}/Projects/${id}`);
                
                if (response.status === 200)
                {
                    const result = await response.json();
                    dispatch(AddRequirement({ ParentId: null, Requirement: result }));
                }
                else
                {
                    throw new Error();
                }
            }
            catch (message)
            {
                const projectsIdString = localStorage["projectsId"];
                if (projectsIdString)
                {
                    let projectsId: number[] = JSON.parse(projectsIdString);
                    if (projectsId.length === 0)
                    {
                        delete localStorage["projectsId"];
                    }
                    else
                    {
                        projectsId = projectsId.filter(projectId => projectId !== id);
                        localStorage["projectsId"] = JSON.stringify(projectsId);
                    }
                }
            }
            finally
            {
                dispatch(LoadRequirements(false));
            }
        }
    }

    public static async GetResult(id: number, indexId: string)
    {
        try
        {
            const response = await fetch(`${Config.Url}/Projects/${id}/Indexes/${indexId}`);

            if (response.status === 200)
            {
                const result = await response.text();

                return result;
            }
            else
            {
                throw new Error("Project failed to calculate");
            }
        }
        catch (message)
        {
            alert(message);
        }
        throw new Error("lol");
    }

    public static async GetDiagram(id: number, indexId: string)
    {
        try
        {
            const response = await fetch(`${Config.Url}/Projects/${id}/Diagrams/${indexId}`);

            if (response.status === 200)
            {
                const result = await response.json();
                return result;
            }
            else
            {
                throw new Error("Project failed to calculate");
            }
        }
        catch (message)
        {
            alert(message);
        }
        return "";
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
            id: id,
            name: name,
            requirements: new Array<IRequirement>(),
            write: ERequirementWrite.CREATED
        }
        
        return {
            ParentId: null,
            Requirement: newRequirement
        };
    }
}