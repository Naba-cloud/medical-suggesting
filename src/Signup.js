import React, { useState } from "react";
import './Signup.css'
const Signup=()=>{
    const[doctorname,setdoctorname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[confirmpassword,setconfirmpassword]=useState('');
    const[no,setno]=useState();
    const[age,setAge]=useState();
const[country,setCountry]=useState('');
const[Address,setAddress]=useState('');
const[workingDays,setWorkingdays]=useState();
const[designation,setdesignation]=useState('');
const[salary,setsalary]=useState();
const[education,seteducation]=useState('');
const[hospitalName,setHospitalname]=useState('');
const[gender,setgender]=useState('');
const[data,setdata]=useState([{
    doctorname:'Nizam',
    email:'nizam94@gmail.com',
    password:'meryabbuayeray',
    confirmpassword:'meryabbuayeray',
    no:"0800765412",
    age:10,
    country:'Pakistan',
    Address:'c-44,northnazimabad karachi',
    workingDays:7,
    designation:'Karachi',
    salary:10000,
    education:'MBBS',
    hospitalName:'Agha Khan',
    gender:'Male',



}])
const vals={
    doctorname,
    email,
    password,
    confirmpassword,
    no,
    age,
    country,
    Address,
    workingDays,
    designation,
    salary,
    education,
    hospitalName,
    gender

}
const handleSubmit=(e)=>{

    e.preventDefault();
  if(doctorname && education && email && password && gender && confirmpassword && designation && password && salary && workingDays && age && country && hospitalName && Address !=="")  
{setdata([...data,vals])
setdoctorname("");
seteducation("");
setemail("");
setgender("");
setpassword("");
setsalary("");
setconfirmpassword("");
setdesignation("");
setWorkingdays("");
setAge("");
setCountry("");
setHospitalname("");
setno("");
setAddress("");
}
else{
    alert("Fill out the missing fields");
}
}
    return(<>
  <div className="container-fluid">
  <form className="mx-auto w-50 frm mt-5 ">
      <div className="row">
     
          <div className="col-lg-12  ">
              <div className="head-sec mt-0 pt-0 ">
              <h1>Signup Form</h1>
            <p className="pt-3 para">Register Your self To Consult With Doctor</p>
            </div>
          </div>
        
      </div>
      <div className="row">
      <div className="col-lg-12 w-75 ml-5">
          <label>DoctorName</label><br/>
          <input onChange={(e)=>{
           setdoctorname(e.target.value);
          }} type="text"/><br/>
          <label className="mt-3">Email</label><br/>
          <input onChange={(e)=>{
              setemail(e.target.value);
          }}  type="email"/><br/>
          <label className="mt-3">Password</label><br/>
          <input onChange={(e)=>{
              setpassword(e.target.value);
          }} type="password"/><br/>
          <label className="mt-3">Confirm Password</label><br/>
          <input onChange={(e)=>setconfirmpassword(e.target.value)} type="password"/><br/>
          <label className="mt-3">PhoneNumber</label><br/> 
          <input onChange={(e)=>{
              setno(e.target.value)
          }} type="number"/><br/>
          <label className="mt-3">Age</label><br/> 
          <input  onChange={(e)=>{
              setAge(e.target.value);
          }}type="number"/><br/>
<label className="mt-3">Country</label><br/> 
<input onChange={(e)=>{
    setCountry(e.target.value);
}} type="text"/><br/>
  <label className="mt-3">Address</label><br/>
<input onChange={(e)=>{
    setAddress(e.target.value);
}}  type="text"/><br/>
<label  className="mt-3">Gender</label><br/>
<select value={gender}onChange={(e)=>{
    setgender(e.target.value);
}}>
    <option value="Male" >
        Male
    </option>
    <option value="Female">
       Female
    </option>
</select><br/>
<label className="mt-3">Designation</label><br/>
<input onChange={(e)=>{
    setdesignation(e.target.value);
}}type="text"/><br/>
<label className="mt-3">Working Days</label><br/>
<input onChange={(e)=>setWorkingdays(e.target.value)}  type="number"/><br/>
<label className="mt-3">Salary</label><br/>
<input onChange={(e)=>{
    setsalary(e.target.value);
}} type="number"/><br/>
<label className="mt-3">Education</label><br/>
<input onChange={(e)=>{
    seteducation(e.target.value);
}}type="text"/><br/>
<label className="mt-3">Hospital Name </label><br/>
<input onChange={(e)=>{
    setHospitalname(e.target.value)
}} type="text"/><br/>

          <button onClick={handleSubmit} className="mt-5 w-75  btn ">Sign Up</button>
          {data.map((el,key)=>{
             console.log(`data ${el.doctorname} ${el.education} ${el.email} ${el.gender} ${el.hospitalName} ${el.no} ${el.salary} ${el.workingDays}`);
              
          })}
          </div> 
      </div><br/>
      </form>
  </div>
    </>)
}
export default Signup;