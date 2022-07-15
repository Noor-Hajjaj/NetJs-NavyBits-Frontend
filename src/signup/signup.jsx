import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();
    const admin = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios
        .post("http://localhost:3333/auth/signup", admin)
        .then((res) => {
            alert(res.data)
          navigate("/login");
        });
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  };

  return (
    <div className="maink">
      <div className="body1k">
        <div className="container0k">
          <div className="popu_headerk">
            <h3 className="h3LogImDash">Signup</h3>
            {/* <h3 className='close'>X</h3> */}
          </div>
          <table className="centertabk">
            <div className="spacek">
              <tr>
                <td className="leftk">Email:</td>
                <div className="namek">
                  <td>
                    <div className="texttypek">
                      <input type="text" required ref={email} />
                    </div>
                  </td>
                </div>
              </tr>
            </div>
            <div className="spacek">
              <tr>
                <td className="leftk">Password:</td>
                <div className="namek">
                  <td>
                    <div className="smile">
                      <input type="password" required ref={password} />
                    </div>
                  </td>
                </div>
              </tr>
            </div>
          </table>
          <div className="button1k">
            <button className="Cancel1k" onClick={handleSignup}>
            Signup
            </button>
            <button className="Cancel1k" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
          <div>
            <form action="#">
              <div className="form firstk">
                <div className="details personalk"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
