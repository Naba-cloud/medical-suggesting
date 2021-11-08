import React from "react";
import "./App.css";
import Layout from "./layout/routes"
import ContextProvider from './Components/Context';
function App() {
  return (
    <div className="App">
     <ContextProvider>

      <Layout />
      </ContextProvider>
 
    </div>
  );
}

export default App;
