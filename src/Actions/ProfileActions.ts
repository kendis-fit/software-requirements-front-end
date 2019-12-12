import IProfile from "../Interfaces/Profile/IIndex";
import IChangeValue from "../Interfaces/Profile/IChangeValue";
import { SET_PROFILE, UPDATE_PROFILE } from "../Constants/Actions";

export const SetProfile = (coefficients: Array<IProfile> | null) => ({
    type: SET_PROFILE,
    value: coefficients
})

export const UpdateProfile = (changeValue: IChangeValue) => {
    return {
        type: UPDATE_PROFILE,
        value: changeValue
    }
}