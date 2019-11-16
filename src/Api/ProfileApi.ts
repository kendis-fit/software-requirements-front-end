import { SetProfile } from "../Actions/ProfileActions";

export default class ProfileApi
{
    public static GetProfile(id: number): any
    {
        return (dispatch: any) => {
            fetch(`https://localhost:5001/Profiles/${id}`)
            .then(r => {
                if (r.status === 204) {
                    dispatch(SetProfile(null));
                } else if (r.status === 200) {
                    return r.json();
                }
                return null;
            })
            .then(r => {
                if (r !== null) dispatch(SetProfile(r));
            });
        }
    }

    public static UpdateProfile(id: number, profile: string): any
    {
        fetch(`https://localhost:5001/Profiles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(profile)
        })
    }
}