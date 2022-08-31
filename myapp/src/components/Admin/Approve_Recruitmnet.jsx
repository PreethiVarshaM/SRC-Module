import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import Sidebar from "./Sidebar";
import Nav from "../../components/Navbar/components/Nav";

const Approve_Recruitment = () => {
  const cardinfo = [
    
     { id:"1", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "This is description regarding project"},
     { id:"2", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "This is description regarding project"},
     { id:"3", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "This is description regarding project"},
     { id:"4", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "This is description regarding project"},
     { id:"5", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "This is description regarding project"},
  ]

  return (
    <div className="wrapper hover_collapse">
   <div className="grid" style={{marginLeft: "300px",marginTop: "50px"}}>
     <Nav user="User Name"></Nav>
     <Sidebar></Sidebar>
    {cardinfo.map((card,index) => (
      <Card id={index} projectCode={card.projectCode} projectName ={card.agencyName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description} content="Approve Recruitment"/>
    ))}
   </div>
   </div>
  );
}

export default Approve_Recruitment;