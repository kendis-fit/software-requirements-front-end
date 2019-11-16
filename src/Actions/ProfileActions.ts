import { SET_PROFILE, UPDATE_PROFILE } from "../Constants/Actions";
import IProfile from "../Interfaces/Profile/IIndex";
import IChangeValue from "../Interfaces/Profile/IChangeValue";

export const SetProfile = (coefficients: Array<IProfile>) => {
    return {
        type: SET_PROFILE,
        value: coefficients
    }
}

export const UpdateProfile = (changeValue: IChangeValue) => {
    return {
        type: UPDATE_PROFILE,
        value: changeValue
    }
}