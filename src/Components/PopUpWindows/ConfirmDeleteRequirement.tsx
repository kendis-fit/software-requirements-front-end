import React from "react";

import { Form } from "../Styles/Form";
import { Button } from "../Styles/Button";
import { DarkBackgroundBlock } from "../Styles/Block";
import { Modal, ModalHeader } from "../Styles/Modal";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";

interface IConfirmDeleteRequirement
{
    Id: number | null;
    RemoveRequirement: (id: number) => void;
}

const ConfirmDeleteRequirement = ({ Id, RemoveRequirement }: IConfirmDeleteRequirement) => {
    return(
        <Form>
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">
                    <Button Type={ETypeColor.SECONDARY} Rounde="3px" ReadOnly={false} TypeButton="button">Close</Button>
                    <strong data-close={false}>Delete requirement?</strong>
                    <Button Type={ETypeColor.PRIMARY} Rounde="3px" ReadOnly={false} TypeButton="button"
                        onClick={(): void => RemoveRequirement(Id || 0)}>Delete</Button>
                </ModalHeader>
            </Modal>
        </Form>
    );
}

export default ConfirmDeleteRequirement;