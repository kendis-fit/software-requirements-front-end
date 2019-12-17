import IPrimitive from "./IPrimitive";

export default interface IMetric
{
    Name: string;
    NameMetric: string;
    Value: number | null;
    Primitives?: IPrimitive[];
}