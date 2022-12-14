import React, { useState } from 'react'
import create from "../../../images/create.svg"
import { MainNav } from '../../App';
import swal from 'sweetalert';

export default function Create() {
    const [agencyCode, setagencyCode] = useState("");
    const [agencyName, setagencyName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [projectType, setprojectType] = useState("")
    const [organizationType, setorganizationType] = useState("")
    const [sanctionValue, setsanctionValue] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [descriptionBox, setDescriptionBox] = useState("")

    function onSubmit() { 
        console.log('submitted Create Project');
}
function handlechange()
{
    setagencyCode("");
    setagencyName("");
    setProjectName("");
    setProjectID("");
    setprojectType("");
    setorganizationType("");
    setsanctionValue("");
    setStartDate("");
    setEndDate("");
    setDescriptionBox("");
}
    function postData() {
        console.log("Submitted")
        fetch("/created", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                agencyCode: agencyCode,
                agencyName: agencyName,
                organizationType: organizationType,
                sanctionValue: sanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("","submitted Create Project","success");
        handlechange();
    }
    return (
        <div className="wrapper hover_collapse">
            <MainNav></MainNav>
            <div className="main_container">
                <div className="container"> 
                    <div className='head_wrap'>
                    <span><img src={create} style={{ width: "28px", height: "28px" }} alt="create"/></span>
                    <span><h1 id="head_text">Create Project</h1></span>
                    </div>
                    <div class="card_project">
                        <form onSubmit={onSubmit()} id="my_form">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="agencyCode">Agency Code</label>
                                    <input type="text" class="form-control" id="agencyCode" value={agencyCode} placeholder="Agency Code" onChange={(event) => { setagencyCode(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="agencyName">Agency Name</label>
                                    <input type="text" class="form-control" id="agencyName" value={agencyName} placeholder="Agency Name" onChange={(event) => { setagencyName(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="organizationType">Organization Type</label>
                                    <input type="text" class="form-control" id="organizationType" value={organizationType} placeholder="Organization Type" onChange={(event) => { setorganizationType(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="projectName">project Name</label>
                                    <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">Project Type</label>
                                    <select id="inputState" class="form-control" placeholder='ProjectType' onChange={(event) => { setprojectType(event.target.value) }} >
                                        <option></option>
                                        <option>Sponsered</option>
                                        <option>Consultancy</option>
                                        {/* <option>Internal</option> */}
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="sanctionValue">Sanction Value</label>
                                    <input type="text" class="form-control" id="sanctionValue" value={sanctionValue} placeholder="Sanction Value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="endDate">End date</label>
                                    <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="descriptionBox">Scope and Objective of the Project</label>
                                    <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-group col-md-4" style={{ marginTop: '50px', }}>
                                <button type="button" onClick={postData} class="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}