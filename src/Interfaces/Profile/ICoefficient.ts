import IPrimitive from "./IPrimitive";

export default interface ICoefficient
{
    Name: string;
    NameMetric?: string;
    Value: number | null;
    Primitives?: Array<IPrimitive>;
}