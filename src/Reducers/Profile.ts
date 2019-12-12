import IProfile from "../Interfaces/Profile/IIndex";
import Action from "../Constants/Types/ActionReducer";
import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { SET_PROFILE, UPDATE_PROFILE } from "../Constants/Actions";

const initialState: Array<IProfile> = new Array<IProfile>();

type ActionType = 
    | Action<'SET_PROFILE', { value: Array<IProfile> | null }>
    | Action<'UPDATE_PROFILE', { value: IChangeValue }>

const isNumber = (number: any): boolean => !Number.isNaN(number - parseFloat(number))

const Profile = (state: Array<IProfile> | IChangeValue | null = initialState, action: ActionType) => {
    switch (action.type)
    {
        case SET_PROFILE:
            return action.value;
        case UPDATE_PROFILE:
            const changeData = action.value as IChangeValue;
            if (!isNumber(changeData.Value) && changeData.Value)
            {
                return state;
            }
            for (const index of state as Array<IProfile>)
            {
                if (index.NameIndex === changeData.NameIndex) {
                    for (const coeff of index.Coefficients) {
                        if (coeff.Name === changeData.Name) {
                            if (changeData.NamePrimitive && coeff.Primitives) {
                                for (const primitive of coeff.Primitives) {
                                    if (primitive.Name === changeData.NamePrimitive) {
                                        primitive.Value = !changeData.Value ? null : Number.parseFloat(changeData.Value);
                                        if (coeff.Primitives.filter(p => !isNumber(p.Value)).length === 0) {
                                            let result = 0;

                                            if (primitive.Value === null) return state;

                                            if (changeData.NamePrimitive === "RPSSEQ") {
                                                result = primitive.Value / 2;
                                            } else if (changeData.NamePrimitive === "RVSSEQ") {
                                                result = 1 / (1 + primitive.Value);
                                            } else if (changeData.NamePrimitive === "RASSEQ") {
                                                result = primitive.Value / 6;
                                            } else if (changeData.NamePrimitive === "MSSQ") {
                                                result = 1 / primitive.Value;
                                            } else if (changeData.NamePrimitive === "ASSQ") {
                                                result = 1 - 1 / (1 + 1 / primitive.Value);
                                            } else if (changeData.NamePrimitive === "USSQ") {
                                                result = 1 - primitive.Value;
                                            } else {
                                                for (const p of coeff.Primitives)
                                                {
                                                    if (result === 0 && p.Value !== null) {
                                                        result = p.Value;
                                                    } else if (p.Value !== null) {
                                                        result /= p.Value;
                                                    }
                                                }
                                            }
                                            coeff.Value = result;
                                        }
                                    }
                                }
                            }
                            else {
                                console.log("tst");
                                coeff.Value = !changeData.Value ? null : Number.parseFloat(changeData.Value);
                            }
                        }
                    }
                }
            }
            console.log(state);
            return [ ...state as Array<IProfile> ];
        default:
            return state;
    }
}

export default Profile;