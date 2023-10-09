import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import './Style.css';


function App () {
  return(
    <React.Fragment>
      <div>
        <Navbar />
      </div>

      <div>
        <Card/>
      </div>
      <div>
        <Form />
      </div>

    </React.Fragment>
  )
}
export default App;