import React, { useState } from 'react'
import './Signup.css';
const Login=()=>{
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[role,setrole]=useState('Patient');
    const[data,setdata]=useState([{email:'',password:''}]);
    const value={
        email,password,role
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setdata([...data,value]);
        setemail('');
        setpassword('');
        // setrole("");
       console.log(value);
        
    }
   
return(<>
 <form className="mx-auto w-50 frm mt-5 h-75 ">
      <div className="row">
          <div className="col-lg-12  ">
              <div className="head-sec mt-0 pt-0 ">
              <h1>LoginForm</h1>
            <p className="pt-3 para">Login To see The Appountments</p>
            </div>
          </div>
    
      </div>
      <div className="row">
      <div className="col-lg-12 w-75 ml-5">
          <label>Email</label><br/>
          <input onChange={(e)=>setemail(e.target.value)} value={email}type="email"/><br/>
          <label className="mt-3">Password</label><br/>
         
          <input onChange={(e)=>{setpassword(e.target.value)}}value={password} type="password"/><br/><br/>
         <label>Role </label> <br/> <select onChange={(e)=>{setrole(e.target.value)}}>
              <option value="Patient">
                  Patient
              </option>
              <option value="Doctor">
                 Doctor
              </option>
          </select>
          <button onClick={handleSubmit} className="mt-5 btn">Login</button><br></br>
          </div><br/>
          </div>
          </form><br/>
         
   

</>)

}
export default Login;