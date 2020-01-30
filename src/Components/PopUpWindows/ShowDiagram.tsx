import Chart from "chart.js";
import React, { useState, useEffect, createRef } from "react";

import { Form } from "../Styles/Form";
import { DarkBackgroundBlock } from "../Styles/Block";
import { Modal, ModalHeader, ModalBody } from "../Styles/Modal";

import ProjectApi from "../../Api/ProjectApi";
import RequirementApi from "../../Api/RequirementApi";
import IRequirementSelect from "../../Interfaces/IRequirementSelect";
import IProfileDiagramResult from "../../Interfaces/IProfileDiagramResult";

interface IShowDiagram
{
    Requirement?: IRequirementSelect;
}

const ShowDiagram = ({ Requirement }: IShowDiagram) => {
    
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [dangerArea, setDangerArea] = useState<string>();
    const [warningArea, setWarningArea] = useState<string>();
    const [successArea, setSuccessArea] = useState<string>();

    const canvas = createRef<HTMLCanvasElement>();

    useEffect(() => {

        const renderDiagram = (dataset: IProfileDiagramResult[]) => {

            if (!canvas.current) return;
    
            const ctx = canvas.current.getContext("2d");

            if (!ctx) return;

            const labels = dataset.map(d => d.name);
            const values = dataset.map(d => d.value);
            if (values.length === 2)
            {
                labels.push("");
                values.push(0);
            }

            const dangerValue = Number.parseFloat(dangerArea === undefined ? "" : dangerArea);
            const warningValue = Number.parseFloat(warningArea === undefined ? "" : warningArea);
            const successValue = Number.parseFloat(successArea === undefined ? "" : successArea);

            const marksData = {
                labels: labels,
                datasets: [{
                    label: `Requirement: ${Requirement ? Requirement.Name : ""}`,
                    backgroundColor: "rgb(35, 148, 209, 0.6)",
                    data: values,
                    }, {
                    label: "No corresponds",
                    backgroundColor: "rgba(255, 0, 0, 0.6)",
                    data: values.map(() => dangerValue)
                    }, {
                    label: "Partially corresponds",
                    backgroundColor: "rgba(255, 217, 101, 0.6)",
                    data: values.map(() => warningValue)
                    }, {
                    label: "Corresponds",
                    backgroundColor: "rgba(0, 176, 80, 0.6)",
                    data: values.map(() => successValue)
                }]
            };
               
            new Chart(ctx, {
                type: "radar",
                data: marksData,
                options: {
                    
                }
            });
        }
        
        if (Requirement && Requirement.Index && Requirement.Id) {

            const { Id, Index } = Requirement;

            (async () => {

                const json: IProfileDiagramResult[] = Requirement.IsProject ?
                    await ProjectApi.GetDiagram(Id, Index) : await RequirementApi.GetDiagram(Id, Index);
                if (json !== null)
                {
                    renderDiagram(json);
                    setIsLoad(false);
                }
            })();
        }
    }, [Requirement, canvas, dangerArea, warningArea, successArea]);

    return (
        <Form> 
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false} style={{ height: "90vh", width: "90vw", top: "0" }}>
                <ModalHeader data-close={false} Height="50px">Chart</ModalHeader>
                <ModalBody data-close={false}>
                    {
                        isLoad ? "Loading..." : 
                            <>
                                <div data-close={false} style={{ display: "flex", padding: "10px 0 10px 0", flexDirection: "row", justifyContent: "space-around" }}>
                                    <input style={{ width: "184px" }} data-close={false} value={dangerArea} onChange={e => setDangerArea(e.target.value)} placeholder="Max no corresponds range" />
                                    <input style={{ width: "184px" }} data-close={false} value={warningArea} onChange={e => setWarningArea(e.target.value)} placeholder="Max partially corresponds range" />
                                    <input style={{ width: "184px" }} data-close={false} value={successArea} onChange={e => setSuccessArea(e.target.value)} placeholder="Max corresponds range" />
                                </div>
                                <canvas data-close={false} style={{ background: "white" }} ref={canvas}></canvas>
                            </>
                    }
                </ModalBody>
            </Modal>
        </Form>
    );
}

export default ShowDiagram;