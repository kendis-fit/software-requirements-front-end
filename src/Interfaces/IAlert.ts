import EAlert from "../Constants/Enumerations/EAlert";

export default interface IAlert
{
    Id: number;
    Type: EAlert;
    Title: string;
    Message: string;
}