import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/DisplayFormDataInTable";
function App() {
  return (
    <div className="container mt-5">
      <h2 className="heading">Fitness Club</h2>
      
      <Profile />
    </div>
  );
}
export default App;
