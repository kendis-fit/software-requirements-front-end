import IProfile from "../Interfaces/Profile/IIndex";
import Action from "../Constants/Types/ActionReducer";
import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { SET_PROFILE, UPDATE_PROFILE } from "../Constants/Actions";

const initialState = new Array<IProfile>();

type ActionType = 
    | Action<'SET_PROFILE', { value: Array<IProfile> | null }>
    | Action<'UPDATE_PROFILE', { value: IChangeValue }>

const isNumber = (number: any): boolean => !Number.isNaN(number - parseFloat(number))

const Profile = (state: IProfile[] | IChangeValue | null = initialState, action: ActionType) => {
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
            for (const index of state as IProfile[])
            {
                if (index.NameIndex === changeData.NameIndex) {
                    for (const coeff of index.Coefficients) {
                        if (coeff.Name === changeData.NameCoefficient) {

                            if (coeff.Metric && coeff.Metric.Name === changeData.NameMetric) {

                                if (changeData.NamePrimitive && coeff.Metric.Primitives) {
                                    for (const primitive of coeff.Metric.Primitives) {
                                        if (primitive.Name === changeData.NamePrimitive) {
                                            primitive.Value = !changeData.Value ? null : Number.parseFloat(changeData.Value);
                                            if (coeff.Metric.Primitives.every(p => isNumber(p.Value))) {
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
                                                    for (const p of coeff.Metric.Primitives)
                                                    {
                                                        if (result === 0 && p.Value !== null) {
                                                            result = p.Value;
                                                        } else if (p.Value !== null) {
                                                            result /= p.Value;
                                                        }
                                                    }
                                                }
                                                coeff.Metric.Value = result;
                                            } else {
                                                coeff.Metric.Value = null;
                                            }
                                        }
                                    }
                                } else {
                                    coeff.Metric.Value = !changeData.Value ? null : Number.parseFloat(changeData.Value);
                                }
                                
                            }
                            else {
                                coeff.Value = !changeData.Value ? null : Number.parseFloat(changeData.Value);
                            }
                        }
                    }
                }
            }
            return [ ...state ];
        default:
            return state;
    }
}

export default Profile;