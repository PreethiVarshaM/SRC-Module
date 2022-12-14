import React, { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { CircularProgressbar } from 'react-circular-progressbar';
import "../Faculty/ongoing/statusbarstyles.css";
import axios from 'axios';
const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [status, setstatus] = useState(0);
  let id = props.id;
  useEffect(() => {
    axios.post('http://localhost:3001/ongoing')
      .then(res => {
        console.log('Data: ', res.data.data[props.id].status)  // have to take the project array index which we wanted to update
        console.log(id);
        setstatus(res.data.data[props.id].status)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Card key={props.id} className="card">
      <Card.Body>
      <CircularProgressbar value={status} text={`${status}%`} className="status" />
        <div class="header">
          <MDBContainer>
            <MDBRow className='box_text'>
              <MDBCol className='main_text' size='6' sm='3'>Project Code</MDBCol>
              <MDBCol size='6' sm='3'>&ensp;{props.projectCode}</MDBCol>
            </MDBRow>
            <MDBRow className='box_text'>
              <MDBCol className='main_text' size='6' sm='3'>Project Name</MDBCol>
              <MDBCol size='6' sm='3'>&ensp;{props.projectName}</MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {show ? <div>
          <ul class="list-group list-group-flush leftside">
            <div class="list-group-item ">
              <div class="fw-bold">Project Type: </div>
              &ensp;{props.projectCode}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Agency Code: </div>
              &ensp;{props.agencyCode}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Agency Name: </div>
              &ensp;{props.agencyName}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Approval: </div>
              &ensp;{props.approval ? "True" : "False"}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">ResourceApproval: </div>
              &ensp;{props.resourceApproval ? "True" : "False"}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">FundApproval : </div>
              &ensp;{props.fundApproval ? "True" : "False"}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Closed : </div>
              &ensp;{props.closed ? "True" : "False"}
            </div>
          </ul>
          <ul class="list-group list-group-flush rightside">
            <div class="list-group-item ">
              <div class="fw-bold">Faculty ID: </div>
              &ensp;{props.facultyID}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Organisation Type: </div>
              &ensp;{props.organisationType}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Staff: </div>
              &ensp;{props.staff}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Sanction Fund: </div>
              &ensp;{props.sanctionFund}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Start Date: </div>
              &ensp;{props.startDate}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">End Date: </div>
              &ensp;{props.endDate}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Status: </div>
              &ensp;{props.status.toString()}
            </div>
          </ul>
          <div class="card_body">
            <label class="desc">Description of the Project:</label>
            {props.description}
          </div>
        </div>
          : null
        }
        { }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Cards;