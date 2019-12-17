import React, { useState, useEffect } from "react";

import { DarkBackgroundBlock } from "./Styles/Block";
import { Modal, ModalHeader, ModalBody } from "./Styles/Modal";
import { Form } from "./Styles/Form";

import ProjectApi from "../Api/ProjectApi";

interface IShowResult
{
    Requirement?: number;
}

const ShowResult = ({ Requirement }: IShowResult) => {
    
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {

        if (Requirement) {

            (async () => {

                const json: string = await ProjectApi.GetProject(Requirement);
                setResult(json);
            })();
        }
    }, [Requirement]);


    return (
        <Form> 
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">Result</ModalHeader>
                <ModalBody data-close={false}>{result}</ModalBody>
            </Modal>
        </Form>
    );
}

export default ShowResult;