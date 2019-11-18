import React from "react";

import AlertItemContainer from "../../Containers/AlertItemContainer";

import IAlert from "../../Interfaces/IAlert";

interface IAlertList
{
    Alerts: Array<IAlert>
}

const AlertList = ({ Alerts }: IAlertList) => {
    return(
        <ul>
            {
                Alerts.map(a => <AlertItemContainer Id={a.Id} Message={a.Message} Title={a.Title} Type={a.Type} />)
            }
        </ul>
    );
}

export default AlertList;