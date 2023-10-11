import React from 'react';
import logo from './logo.svg';
import './MyComponent'

import './App.css';
import ContainerDrawTable from './MyComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import pic2 from "./img/info-circle.svg"
import pic3 from "./img/check-circle.svg"
import pic4 from "./img/exclamation-triangle.svg"

let obj = {
  DataState:  [
      {
          Subsystem : "Agentless Managment Serice",
          Status : "Not available",
          imgSrc : pic2,
      },
      {
          Subsystem : "BIOS/Hardware Health",
          Status : "ok",
          imgSrc : pic3,
      },
      {
          Subsystem : "Fan Rendundancy",
          Status : "Rendundancy",
          imgSrc : pic3,
      },
      {
        Subsystem : "Network",
        Status : "Degraded",
        imgSrc : pic4,
    }
  ],
}

function App() {
  return (
    <div className="App">
      <ContainerDrawTable/>
    </div>
  );
}

export default App;
