import ETypeColor from "../Constants/Enumerations/ETypeColor";
import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

import { AddAlert } from "../Actions/AlertActions";
import { SetProfile } from "../Actions/ProfileActions";
import { LoadProfile } from "../Actions/LoaderActions";
import { UpdateStatusModify } from "../Actions/RequirementsActions";

export default class ProfileApi
{
    public static GetProfile(id: number): any
    {
        return async (dispatch: any) => {

            try
            {
                dispatch(LoadProfile(true));
            
                const response = await fetch(`https://localhost:5001/Profiles/${id}`);
                if (response.status === 200)
                {
                    const result = await response.json();
                    dispatch(SetProfile(result));
                }
                else if (response.status === 204)
                {
                    dispatch(SetProfile(null));
                }
                else
                {
                    throw new Error("Profile failed to create");
                }
            }
            catch (message)
            {
                dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: message.toString(), Type: ETypeColor.DANGER }));
            }
            finally
            {
                dispatch(LoadProfile(false));
            }
        }
    }

    public static UpdateProfile(id: number, profile: string): any
    {
        return async (dispatch: any) => {
            
            try
            {
                const response = await fetch(`https://localhost:5001/Profiles/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(profile)
                    });
                if (response.status === 200)
                {
                    dispatch(UpdateStatusModify({ Id: id, Status: ERequirementWrite.DONE }));
                    dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Profile was successfully updated", Type: ETypeColor.SUCCESS }));
                }
                else
                {
                    throw new Error("Profile failed to updated");
                }
            }
            catch (message)
            {
                dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: message.toString(), Type: ETypeColor.DANGER }));
            }
        }
    }
}