import React from 'react';
import "./ngodetail.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


export const NgoDetail = () => {
    const navigate = useNavigate();
    const ID = useParams().id;

    const [ngoRequestDetail, setngoRequestDetail] = useState({});
  useEffect(() => {
    const fetchNGORequestDetail = async () => {
      const res = await axios.get(`http://localhost:3003/api/admin/dashboard/getSpecificNgoRequestDetails/${ID}`);
      setngoRequestDetail(res.data);
    };
    fetchNGORequestDetail();
  });

  const acceptNGO = async (e) => {
      e.preventDefault();
      try{
          await axios.patch(`http://localhost:3003/api/admin/dashboard/approve_NGO/${ID}`).then((response) => {
              alert(response.data.message);
          })
      }catch (e) {
        if (e.response && e.response.data) {
          alert(e.response.data.message);
        }
      }
  };

  const declineNGO = async (e) => {
    e.preventDefault();
    try{
        await axios.delete(`http://localhost:3003/api/admin/dashboard/decline_NGO/${ID}`).then((response) => {
            alert(response.data.message);
        })
    }catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
};

  return (
      <div className='maini'>
    <div className='body1i'>
    <div className='container0i'>
        <div className='popu_headeri'>
            <h3>NGO Details</h3>
            <h3 className='closei' onClick={() => navigate(-1)}>X</h3>
        </div>
        <table className='centertabi'>
            <div className='spacei'>
            <tr>
                <td className='lefti'>
                    NGO Name:
                </td>
                <div className='namei'>
                <td>
                    {ngoRequestDetail.username}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='spacei'>
            <tr>
                <td className='lefti'>
                    Email:
                </td>
                <div className='namei'>
                <td>
                {ngoRequestDetail.email}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='spacei'>
            <tr>
                <td className='lefti'>
                    Phone Number:
                </td>
                <div className='namei'>
                <td>
                {ngoRequestDetail.contactNumber}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='spacei'>
            <tr>
                <td className='lefti'>
                    Official Number:
                </td>
                <div className='namei'>
                <td>
                {ngoRequestDetail.officialNumber}
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='spacei'>
            <tr>
                <td className='lefti'>
                    Field of work:
                </td>
                <div className='namei'>
                <td>
                {ngoRequestDetail.categories}
                </td> 
                </div>
                
            </tr>
            </div>
        </table>
    <div className="button1i">
        <button className="Accept1i" onClick={acceptNGO}>Accept</button>
        <button className="Cancel1i" onClick={declineNGO}>Reject</button>
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
export default NgoDetail;