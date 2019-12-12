import React from "react";

import { Alert } from "../Styles/Alert";
import AlertItemContainer from "../../Containers/AlertItemContainer";

import IAlert from "../../Interfaces/IAlert";

interface IAlertList
{
    Alerts: Array<IAlert>
}

const AlertList = ({ Alerts }: IAlertList) => {
    return(
        <Alert>
            {
                Alerts.map((a, i) => <AlertItemContainer key={i} Id={a.Id} Message={a.Message} Title={a.Title} Type={a.Type} />)
            }
        </Alert>
    );
}

export default AlertList;