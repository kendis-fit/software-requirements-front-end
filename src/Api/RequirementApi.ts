import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";
import ETypeColor from "../Constants/Enumerations/ETypeColor";
import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

import { AddAlert } from "../Actions/AlertActions";
import { LoadRequirements } from "../Actions/LoaderActions";
import { AddRequirement, RemoveRequirement } from "../Actions/RequirementsActions";

export default class RequirementApi
{
    public static CreateRequirement(name: string, parentId: number): any
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadRequirements(true));
                
                const response = await fetch(`https://localhost:5001/Requirements/${parentId}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({ name: name })
                    });
                
                if (response.status === 201)
                {
                    const result = await response.text();
                    
                    dispatch(AddRequirement(this.createRequirement(Number.parseInt(result), name, parentId)));
                    dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Requirement was successfully created", Type: ETypeColor.SUCCESS }));
                }
                else
                    throw new Error("Requirement failed to create");
            }
            catch (message)
            {
                dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: message.toString(), Type: ETypeColor.DANGER }));
            }
            finally
            {
                dispatch(LoadRequirements(false));
            }
        }
    }

    public static RemoveRequirement(id: number): any
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadRequirements(true));

                const response = await fetch(`https://localhost:5001/Requirements/${id}`, {
                        method: "DELETE"
                    });
                if (response.status === 200)
                {
                    dispatch(RemoveRequirement(id));
                    dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Requirement was successfully removed", Type: ETypeColor.SUCCESS }));
                }
                else
                {
                    throw new Error("Removing requirement failed to create");
                }
            }
            catch (message)
            {
                dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: message.toString(), Type: ETypeColor.DANGER }));
            }
            finally
            {
                dispatch(LoadRequirements(false));
            }
        }
    }

    private static createRequirement(id: number, name: string, parentId: number): IFullRequirement
    {
        
        const newRequirement: IRequirement = {
            Id: id,
            Name: name,
            Requirements: new Array<IRequirement>(),
            Write: ERequirementWrite.CREATED
        }
        
        return {
            ParentId: parentId,
            Requirement: newRequirement
        };
    }
}