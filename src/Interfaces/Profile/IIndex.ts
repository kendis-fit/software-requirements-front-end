import ICoefficient from "./ICoefficient";

export default interface IIndex
{
    Name: string;
    NameIndex: string;
    Coefficients: Array<ICoefficient>;
}