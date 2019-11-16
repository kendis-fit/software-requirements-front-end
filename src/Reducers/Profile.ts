import IProfile from "../Interfaces/Profile/IIndex";
import Action from "../Constants/Types/ActionReducer";
import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { SET_PROFILE, UPDATE_PROFILE } from "../Constants/Actions";

const initialState: Array<IProfile> = new Array<IProfile>();

type ActionType = 
    | Action<'SET_PROFILE', { value: Array<IProfile> }>
    | Action<'UPDATE_PROFILE', { value: IChangeValue }>

const Profile = (state: Array<IProfile> | IChangeValue = initialState, action: ActionType) => {
    switch (action.type)
    {
        case SET_PROFILE:
            return action.value;
        case UPDATE_PROFILE:
            const changeData = action.value as IChangeValue;
            for (let index of state as Array<IProfile>)
            {
                if (index.NameIndex === changeData.NameIndex) {
                    for (let coeff of index.Coefficients) {
                        if (coeff.Name === changeData.Name) {
                            coeff.Value = changeData.Value;
                        }
                    }
                }
            }
            return [ ...state as Array<IProfile> ];
        default:
            return state;
    }
}

export default Profile;