import ETypeColor from "../Constants/Enumerations/ETypeColor";

export default interface IAlert
{
    Id: number;
    Type: ETypeColor;
    Title: string;
    Message: string;
}