import { SetProfile } from "../Actions/ProfileActions";

export default class ProfileApi
{
    public static GetProfile(id: number): any
    {
        return (dispatch: any) => {
            fetch(`https://localhost:5001/Profiles/${id}`)
            .then(r => r.json())
            .then(r => dispatch(SetProfile(r)));
        }
    }

    public static UpdateProfile(id: number, profile: string): any
    {
        fetch(`https://localhost:5001/Profiles/${id}`, {
            method: "PUT",
            body: profile
        })
    }
}