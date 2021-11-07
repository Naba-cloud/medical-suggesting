import { Route, Routes } from "react-router-dom";
import Signup from "../Components/signup/Signup";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>hello</h1>} />
      <Route path="/signup-doctor" element={<Signup />} />
    </Routes>
  );
};

export default Layout;
