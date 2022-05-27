import React from 'react';
import "./CaseList.css";
import { useNavigate } from "react-router-dom";


export const CaseList = () => {
    const navigate = useNavigate();
  return (
      <div className='main'>
    <div className='body1'>
    <div className='container0'>
        <div className='popu_header'>
            <h3>Case Name</h3>
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
                    Sara Nour Ahmad
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
                    Name
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
                    Urgent
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
                    URL
                </td> 
                </div>
                
            </tr>
            </div>
        </table>
    <div className="button1">
        <button className="Accept1">Accept</button>
        <button className="Cancel1">Reject</button>
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
