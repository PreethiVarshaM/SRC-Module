import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ongoing.css";
import { MainNav } from '../../App';
const Ongoing = () => {
  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/ongoing')
      .then(res => {
        console.log('Data: ', res.data.data)
        setCardInfo(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

<<<<<<< HEAD
  //let index=0;
/*var date=new Date(birth);
setDob(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear())*/
=======
>>>>>>> be18a4f308c7e2fb2ad8c53d825846c9ce717b39
  return (
    <div className="wrapper hover_collapse">
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
          <div className='grid'>
            {cardinfo.map((card, index) => (
              <Card id={index}
                projectCode={card.projectCode}
                projectName={card.agencyName}
                projectType={card.projectType}
                agencyCode={card.agencyCode}
                agencyName={card.agencyName}
                approval={card.approval}
                resourceApproval={card.resourceApproval}
                fundApproval={card.fundApproval}
                closed={card.closed}
                facultyID={card.facultyID}
                organisationType={card.organizationType}
                staff={card.staff} sanctionFund={card.sanctionFund}

                startDate={new Date(JSON.stringify(card.startDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.startDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.startDate).substring(1,11)).getFullYear()}

                endDate={new Date(JSON.stringify(card.endDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.endDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.endDate).substring(1,11)).getFullYear()}

                status={card.status}
                description={card.description} 
                _id = {card._id}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ongoing;

