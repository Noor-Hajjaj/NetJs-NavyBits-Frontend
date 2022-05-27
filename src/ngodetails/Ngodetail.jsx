import React from 'react';
import "./ngodetail.css";
import { useNavigate } from "react-router-dom";


export const NgoDetail = () => {
    const navigate = useNavigate();
  return (
      <div className='maini'>
    <div className='body1i'>
    <div className='container0i'>
        <div className='popu_headeri'>
            <h3>NGO Name</h3>
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
                    MMKN
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
                    contactus@gmail.com
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
                    71116963
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
                    12345
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
                    Education
                </td> 
                </div>
                
            </tr>
            </div>
        </table>
    <div className="button1i">
        <button className="Accept1i">Accept</button>
        <button className="Cancel1i">Reject</button>
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