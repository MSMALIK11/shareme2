import React,{useState}from "react";
import "./login.css";
import logo from "../../images/logo.png";
import InputBox from "../common/InputBox";
import { signUp,logIn } from "../../Store/Actions/authActions";
import { useDispatch ,useSelector} from "react-redux";
import {useCookies} from 'react-cookie'
const Auth = () => {
  const [IsSignup,setIsSignup] = useState(true);
  const [cp,setCp]=useState(false)
  const [, setCookie] = useCookies(["token"]);
  const dispatch=useDispatch();
  const {loading,token}=useSelector((state)=>state.authReducer)
 
const initialState={
  name:'',
  email:'',
  username:'',
  password:'',
  confirmPassword:''
}
const [user,setUser]=useState(initialState)
let name,value;
const handleChange=(e)=>{
   name=e.target.name;
  value=e.target.value;
setUser({...user,[name]:value})
 

}

const handleSubmit=(e)=>{
  e.preventDefault();
 

  if(IsSignup){
  user.password===user.confirmPassword ? dispatch(signUp(user)):setCp(true)
    }else{
      dispatch(logIn(user))
      setCp(false)
    }
    setCookie('token',token?.token)
      setUser({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });

  }
 




// reset form
const resetForm=()=>{
  setCp(false)
 
}
  return (
    <div className="auth-wraper container">

      <div className="row align-items-center justify-content-center">
        <div className="com-sm-12 col-md-6 col-lg-6">
          <div className="left-logo-area">
            <img src={logo} alt="" />
            <div className="info">
              <h1>SHAREME</h1>
              <h6>EXPLORE THE IDEAS throughout the world</h6>
            </div>
          </div>
        </div>
        <div className="com-sm-12 col-md-6 col-lg-6 ">
          <div className="right-form shadow-sm">
            <h3>{IsSignup ? "SignUp" : "Log In"}</h3>
            <form>
              {IsSignup && (
                <div className="input-container" style={{ width: "100%" }}>
                  <InputBox
                    name="name"
                    type="text"
                    placeText="Name..."
                    handleChange={handleChange}
                    value={user.name}
                  />
                  <InputBox
                    name="email"
                    type="email"
                    placeText="Email..."
                    handleChange={handleChange}
                    // value={user.email}
                  />
                </div>
              )}

              {IsSignup && (
                <div className="user-name-input">
                  <InputBox
                    name="username"
                    type="username"
                    placeText="username"
                    handleChange={handleChange}
                    // value={user.email}
                  />
                </div>
              )}

              <div className="input-container d-flex flex-column " style={{ width: "100%" }}>
                {!IsSignup && (
                  <InputBox
                    name="email"
                    type="email"
                    placeText="Email..."
                    handleChange={handleChange}
                    value={user.email}
                  />
                )}
                <InputBox
                  name="password"
                  placeText="Password"
                  type="password"
                  handleChange={handleChange}
                  value={user.password}
                />
              </div>

              {IsSignup && (
                <InputBox
                  placeText="Confirm-password"
                  name="confirmPassword"
                  type="password"
                  handleChange={handleChange}
                  value={user.confirmPassword}
                />
              )}

              <span
                className={`text-danger align-self-end  ${
                  cp ? "d-block" : "d-none"
                }`}
              >
                {" "}
                *password not match
              </span>
            </form>
            <span>
              {IsSignup ? "Already have an account " : " Don't have an account"}

              {IsSignup ? (
                <span
                  className="link"
                  style={{ color: "blue" }}
                  onClick={() => {
                    setIsSignup(false);
                    resetForm();
                  }}
                >
                  login
                </span>
              ) : (
                <span
                  className="link"
                  style={{ color: "blue" }}
                  onClick={() => {
                    setIsSignup(true);
                    resetForm();
                  }}
                >
                  Sing up
                </span>
              )}
            </span>
            <button onClick={handleSubmit} type="submit" disabled={loading}>
              {loading ? "Loading...": IsSignup ? "Singup" : "Logn In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

              
              }
export default Auth;
