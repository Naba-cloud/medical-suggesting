import React,{useState} from "react";
import "./Disease.css"
const   Disease=()=>{
    
//   const[dummydata,setdummyData]=useState([{
//         docname:'abcd',
//         email:'abcd@gmail.com',
//         poneNumber:'03453861506',
//         address:'c-213 gulshane iqbal karachi',
// hospital:'Agha Khan'

//     }]);
    const data={
        docname:'efg',email:'abcd@gmail.com',phoneNumber:'0900876541',address:'c-33 park hill karachi',hospital:'GHQ'
          
  
      }
        function getDisease(e){
       console.log(e.target.value); 
    //    setdummyData([data]);
       console.log(data);

    }
    return(<>
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-12">
            <h1 className="text-center mt-3">Select  Disease </h1>
            </div>
        </div>
        <div className="row  mt-5 ml-5 mx-auto">
            <div className="col-lg-4 mt-3">
                <button onClick={getDisease} value="Corona Virus" className="btn ">Corona Virus</button>
            </div>
            <div className="col-lg-4 mt-3">
                <button value="Dengue" onClick={getDisease } className="btn ">Dengue</button>
            </div>
            <div className="col-lg-4 mt-3">
                <button value="Cancer" onClick={getDisease } className="btn ">Cancer</button>
            </div>

        </div>
        <div className="row  mt-5 ml-5 mx-auto">
            <div className="col-lg-4 mt-3">
                <button onClick={getDisease } className="btn " value="HeartDisease">Heart Disease</button>
            </div>
            <div className="col-lg-4 mt-3">
                <button  onClick={getDisease } className="btn " value="Flu">Flu</button>
            </div>
            <div className="col-lg-4 mt-3">
                <button onClick={getDisease } className="btn " value="Diabetes">Diabetes</button>
            </div>

        </div>
        <div className="row  mt-5 ml-3 mx-auto">
            <div className="col-lg-4 mt-3">
                <button onClick={getDisease } className="btn " value="Aizehemier">Aizehemier's</button>
            </div>
            <div className="col-lg-4 mt-3">
                <button onClick={getDisease } className="btn " value="Kidney">Kidney</button>
            </div>
            <div className="col-lg-4 mt-3">
            
                <button onClick={getDisease } className="btn " value="Injuries">Injuries</button>
            
            </div>

        </div>
    </div>
   
    </>)
}
export default Disease;