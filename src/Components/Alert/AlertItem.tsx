import React from "react";

import IAlert from "../../Interfaces/IAlert";

interface IAlertItem extends IAlert
{
    RemoveAlert: (id: number) => void;
}

const AlertItem = ({ Title, Id, Message, Type, RemoveAlert }: IAlertItem) => {

    setTimeout(() => {
        RemoveAlert(Id);
    }, 5000);

    return(
        <>
            
        </>
    );
}

export default AlertItem;