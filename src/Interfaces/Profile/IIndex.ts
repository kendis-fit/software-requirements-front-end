import ICoefficient from "./ICoefficient";

export default interface IIndex
{
    Name: string;
    NameIndex: string;
    Description: string;
    Coefficients: ICoefficient[];
}