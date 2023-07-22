import React from "react";
import "./App.css";
import Loginimg from "./componetc/Loginimg";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./componetc/dashbord/Zeronsec";


function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" Component={Loginimg} />
        </Routes>
        <Routes>
          <Route path="/Zeronsec" Component={Dashbord} />
        </Routes>
    </>
  );
}


export default App;
