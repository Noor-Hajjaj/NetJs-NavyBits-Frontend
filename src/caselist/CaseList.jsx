import React from 'react';
import "./CaseList.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


export const CaseList = () => {
    const navigate = useNavigate();
    const ID = useParams().id;

    const [caseRequestDetail, setcaseRequestDetail] = useState({});
  useEffect(() => {
    const fetchCaseRequestDetail = async () => {
      const res = await axios.get(`http://localhost:3003/api/admin/dashboard/getSpecificCaseRequestDetails/${ID}`);
      setcaseRequestDetail(res.data);
    };
    fetchCaseRequestDetail();
  },[ID, caseRequestDetail]);

  const acceptCase = async (e) => {
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:3003/api/admin/dashboard/approve_Case/${ID}`).then((response) => {
            alert(response.data.message);
        })
    }catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
};

const declineCase = async (e) => {
    e.preventDefault();
    try{
        await axios.delete(`http://localhost:3003/api/admin/dashboard/decline_Case/${ID}`).then((response) => {
            alert(response.data.message);
        })
    }catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
};

  return (
      <div className='main'>
    <div className='body1'>
    <div className='container0'>
        <div className='popu_header'>
            <h3>Case Details</h3>
            <h3 className='close' onClick={() => navigate(-1)}>X</h3>
        </div>
        <table className='centertab'>
            <div className='space'>
            <tr>
                <td className='left'>
                    Full Name:
                </td>
                <div className='name'>
                <td>
                Nour Ahmad Hajjaj
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='space'>
            <tr>
                <td className='left'>
                    Case Name:
                </td>
                <div className='name'>
                <td>
                {caseRequestDetail.caseName}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='space'>
            <tr>
                <td className='left'>
                    Case Description:
                </td>
                <div className='name'>
                <td>
                {caseRequestDetail.description}
                </td> 
                </div>
            </tr>
            </div>
            <div className='space'>
            <tr>
                <td className='left'>
                    Case Document:
                </td>
                <div className='name'>
                <td>
                {caseRequestDetail.documnet}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='space'>
            <tr>
                <td className='left'>
                    Amount Goal:
                </td>
                <div className='name'>
                <td>
                {caseRequestDetail.amountGoal}
                </td> 
                </div>
                
            </tr>
            </div>
        </table>
    <div className="button1">
        <button className="Accept1" onClick={acceptCase}>Accept</button>
        <button className="Cancel1" onClick={declineCase}>Reject</button>
      </div>
      <div>
         <form action="#">
        <div className="form first">
            <div className="details personal">
                        
            </div>
            </div> 
    </form>
    </div>
</div>
</div>
</div>
  );
}
export default CaseList;
