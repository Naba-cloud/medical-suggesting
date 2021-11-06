import React, { useState } from "react";
import './Signup.css'
const Signup=()=>{
    const[doctorname,setdoctorname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[confirmpassword,setconfirmpassword]=useState('');
    const[no,setno]=useState('');
    const[age,setAge]=useState('');
const[country,setCountry]=useState('');
const[Address,setAddress]=useState('');
const[workingDays,setWorkingdays]=useState();
const[designation,setdesignation]=useState('');
const[salary,setsalary]=useState('');
const[education,seteducation]=useState('');
const[hospitalName,setHospitalname]=useState('');
const[gender,setgender]=useState('');
const[data,setdata]=useState([{
    doctorname:'',
    email:'',
    password:'',
    confirmpassword:'',
    no:'',
    age:'',
    country:'',
    Address:'',
    workingDays,
    designation:'',
    salary,
    education:'',
    hospitalName:'',
    gender:'',



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
{setdata([...data,vals]);

setdoctorname("");
seteducation("");
setemail("");
// setgender("");
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
console.log(vals);

}
else{
    alert("Fill out the missing fields");
}
}
    return(<>
  <div className="container-fluid">
  <form  className="mx-auto w-50 frm mt-5 ">
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
          <input value={doctorname}onChange={(e)=>{
           setdoctorname(e.target.value);
          }} type="text"/><br/>
          <label className="mt-3">Email</label><br/>
          <input value={email}onChange={(e)=>{
              setemail(e.target.value);
          }}  type="email"/><br/>
          <label className="mt-3">Password</label><br/>
          <input value={password}onChange={(e)=>{
              setpassword(e.target.value);
          }} type="password"/><br/>
          <label className="mt-3">Confirm Password</label><br/>
          <input value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} type="password"/><br/>
          <label className="mt-3">PhoneNumber</label><br/> 
          <input value={no}onChange={(e)=>{
              setno(e.target.value)
          }} type="number"/><br/>
          <label className="mt-3">Age</label><br/> 
          <input value={age}  onChange={(e)=>{
              setAge(e.target.value);
          }}type="number"/><br/>
<label className="mt-3">Country</label><br/> 
<input value={country} onChange={(e)=>{
    setCountry(e.target.value);
}} type="text"/><br/>
  <label className="mt-3">Address</label><br/>
<input value={Address}onChange={(e)=>{
    setAddress(e.target.value);
}}  type="text"/><br/>
<label  className="mt-3">Gender</label><br/>
<select value={gender}onChange={(e)=>{
    setgender(e.target.value);
}}>
    <option  value="Male">
        Male
    </option>
    <option value="Female">
       Female
    </option>
</select><br/>
<label className="mt-3">Designation</label><br/>
<input value={designation} onChange={(e)=>{
    setdesignation(e.target.value);
}}type="text"/><br/>
<label className="mt-3">Working Days</label><br/>
<input value={workingDays} onChange={(e)=>setWorkingdays(e.target.value)}  type="Number"/><br/>
<label className="mt-3">Salary</label><br/>
<input value={salary}onChange={(e)=>{
    setsalary(e.target.value);
}} type="number"/><br/>
<label className="mt-3">Education</label><br/>
<input value={education}onChange={(e)=>{
    seteducation(e.target.value);
}}type="text"/><br/>
<label className="mt-3">Hospital Name </label><br/>
<input value={hospitalName} onChange={(e)=>{
    setHospitalname(e.target.value)
}} type="text"/><br/>

          <button onClick={handleSubmit} className="mt-5 w-75  btn ">Sign Up</button>
         
          </div> 
      </div><br/>
      </form>
  </div>
  
    </>)
}
export default Signup;