import ETypeColor from "../Constants/Enumerations/ETypeColor";

import { AddAlert } from "../Actions/AlertActions";
import { SetProfile } from "../Actions/ProfileActions";

export default class ProfileApi
{
    public static GetProfile(id: number): any
    {
        return (dispatch: any) => {
            fetch(`https://localhost:5001/Profiles/${id}`)
            .then(r => {
                if (r.status === 200) {
                    return r.json();
                }
                else if (r.status === 204) {
                    return null;
                }
                throw new Error("Profile failted to create");
            })
            .then(r => {
                dispatch(SetProfile(r));
            })
            .catch(error => dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: error.toString(), Type: ETypeColor.DANGER })));
        }
    }

    public static UpdateProfile(id: number, profile: string): any
    {
        return (dispatch: any) => fetch(`https://localhost:5001/Profiles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(profile)
        })
        .then(r => {
            if (r.status === 200) {
                return dispatch(AddAlert({ Title: "Success", Id: Math.random(), Message: "Profile was successfully updated", Type: ETypeColor.SUCCESS }));
            }
            throw new Error("Profile failted to create");
        })
        .catch(error => dispatch(AddAlert({ Title: "Error", Id: Math.random(), Message: error.toString(), Type: ETypeColor.DANGER })));
    }
}