import React from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";


export const Login= () => {
    const navigate = useNavigate();
  return (
      <div className='maink'>
    <div className='body1k'>
    <div className='container0k'>
        <div className='popu_headerk'>
            <h3>LogIn</h3>
            {/* <h3 className='close'>X</h3> */}
        </div>
        <table className='centertabk'>
            <div className='spacek'>
            <tr>
                <td className='leftk'>
                    Email:
                </td>
                <div className='namek'>
                <td>
                    <div className='texttypek'>
                    <input type="text"/>
                    </div>
                    
                </td> 
                </div>
                
            </tr>
            </div>
            <div className='spacek'>
            <tr>
                <td className='leftk'>
                    Password:
                </td>
                <div className='namek'>
                <td>
                    <div className='smile'>
                    <input type="password"/>
                    </div>
                </td> 
                </div>
                
            </tr>
            </div>
            
        </table>
    <div className="button1k">
        <button className="Accept1k">Cancel</button>
        <button className="Cancel1k" onClick={() => navigate("/run")}>Submit</button>
      </div>
      <div>
         <form action="#">
        <div className="form firstk">
            <div className="details personalk">
                        
            </div>
            </div> 
    </form>
    </div>
</div>
</div>
</div>
  );
}
export default Login;