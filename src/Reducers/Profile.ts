import IProfile from "../Interfaces/IProfile";
import { SET_PROFILE } from "../Constants/Actions";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

const initialState: Array<IProfile> = new Array<IProfile>();

type ActionType = 
    | Action<'SET_PROFILE', { value: Array<IProfile> }>

const Profile = (state: Array<IProfile> = initialState, action: ActionType) => {
    switch (action.type)
    {
        case SET_PROFILE:
            return action.value;
        default:
            return state;
    }
}

export default Profile;