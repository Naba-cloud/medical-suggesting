import React, { useState } from "react";
import Swal from "sweetalert2";
import './Patients.css';
const Patients = () => {
  const[patientName,setpatientName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[age,setAge]=useState("");
  const[address,setAddress]=useState("");
  const[country,setCountry]=useState("");
  const[phoneNumber,setphoneNumber]=useState();
  const[gender,setGender]=useState("Male");
const [alldata,setallData]=useState([{patientName:"Abcd",email:"fahad345@gmail.com",password:"semi-final",age:20,address:"c-45 safari park karachi",country:"Pakistan",phoneNumber:"03423922252",gender:"Male"}]);
const logdata={
  patientName,email,password,age,address,country,phoneNumber,gender
}
function register(e){
  e.preventDefault();
  if(patientName && email && password && age && address && country && phoneNumber && gender !=="" )
  {
  setallData([...alldata,logdata]);
  console.log(logdata);
  setpatientName("");
  setphoneNumber("");
  setPassword("");
  setEmail("");
  setCountry("");
  setEmail("");
  setAge("");
  }
  else{
    Swal.fire("Fill All The Fields");
  }
}
  return (<>
  <div className="container-fluid p-frm  ">
    <div className="row">
      <div className="col-lg-12 mx-auto text-center">
  <h1>Sign Up For Patients</h1>
  <p>Register Yourself To Consult With Doctor</p>
 
  </div>
  </div>
  <div className="row mx-auto w-50 mt-4">
    <div className="col-lg-12 ">
    <label>Patient Name :</label>  <input onChange={(e)=>{setpatientName(e.target.value)}}value={patientName} type="text"/>
   </div>
   </div>
   <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Email :</label><br/> <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Password :</label><br/> <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Age :</label><br/> <input value={age}onChange={(e)=>{setAge(e.target.value)}} type="number"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Country :</label><br/> <input value={country} onChange={(e)=>{setCountry(e.target.value)}} type="text"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Address :</label><br/> <input value={address} onChange={(e)=>{setAddress(e.target.value)}}type="text"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Phone Number :</label><br/> <input value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value)}}type="number"/>
   </div>

  </div>
  <div className="row mx-auto w-50 mt-3">
    <div className="col-lg-12 ">
    <label>Gender :</label><br/>
  <select onChange={(e)=>{setGender(e.target.value)}}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  <br/>
 
  <br/>
  
  </div>
  </div>
  <div className="row mt-3">
    <div className="col-lg-4 mx-auto">
    <button className="btn  w-25 mx-auto" onClick={register} > Register </button><br/>
    <br/>
    </div>
  </div>
  </div>
  
  </>
  );
};

export default Patients;
