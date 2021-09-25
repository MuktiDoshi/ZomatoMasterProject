import React from "react";
import {Route, Redirect} from "react-router-dom";

//import HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//component
import Temp from "./Components/temp";

//page
import Home from "./Page/Home";


function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery"/>
    </Route>
    < HomeLayoutHOC path="/:type" exact component={ Home } />
    </>
  );
};

export default App;
