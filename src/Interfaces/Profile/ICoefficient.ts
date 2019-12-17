import IMetric from "./IMetric";

export default interface ICoefficient
{
    Name: string;
    Value: number | null;
    Metric?: IMetric;
}