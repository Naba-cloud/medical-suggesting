import { Route, Routes } from "react-router-dom";
import Signup from "../Components/signup/Signup";
import Login from "../Components/login/Login";
import Disease from "../Components/diseases/Disease";
import Patients from "../Components/Patients/Patients";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>hello</h1>} />
      <Route path="/signup-doctor" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/disease" element={<Disease />} />
      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
};

export default Layout;
