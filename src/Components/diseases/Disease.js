import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Disease.css";
const Disease = () => {
  const [disease, setDisease] = useState([]);

  const data = {
    docname: "efg",
    email: "abcd@gmail.com",
    phoneNumber: "0900876541",
    address: "c-33 park hill karachi",
    hospital: "GHQ",
  };
  function getDisease(e) {
    console.log(e.target.value);
    //    setdummyData([data]);
    console.log(data);
  }
  useEffect(() => {
    axios.get("http://localhost:3002/diseases").then((resp) => {
      setDisease(resp.data.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className="text-center mt-3">Select Disease </h1>
          </div>
        </div>
        <div className="row  mt-5 ml-5 mx-auto">
          {disease.map((item) => {
            return (
              <div className="col-lg-4 mt-3">
                <button
                  onClick={getDisease}
                  value={item.diseaseName}
                  className="btn "
                >
                  {item.diseaseName}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Disease;
