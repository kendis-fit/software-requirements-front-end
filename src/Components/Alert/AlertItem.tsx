import React from "react";

import { AlertBlock, AlertHeader, AlertTitle, AlertMessage } from "../Styles/Alert";

import IAlert from "../../Interfaces/IAlert";

interface IAlertItem extends IAlert
{
    RemoveAlert: (id: number) => void;
}

const AlertItem = ({ Title, Id, Message, Type, RemoveAlert }: IAlertItem) => {

    setTimeout(() => RemoveAlert(Id), 3500);

    return(
        <AlertBlock Type={Type}>
            <AlertHeader>
                <AlertTitle>{Title}</AlertTitle>
            </AlertHeader>
            <AlertMessage>
                <span>{Message}</span>
            </AlertMessage>
        </AlertBlock>
    );
}

export default AlertItem;