import ICoefficient from "./ICoefficient";

export default interface IMetric
{
    Name: string;
    NameIndex: string;
    Coefficients: Array<ICoefficient>;
}