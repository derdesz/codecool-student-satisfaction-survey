import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginForm from "./components/login/LoginForm";
import PictureBar from "./components/PictureBar";
import AdminCharts from "./components/charts/AdminCharts";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <div>
              <PictureBar/>
              <Route path="/" exact component={MainPage}/>
              <Route path="/login" component={LoginForm}/>
              <Route path="/charts" component={AdminCharts} />
          </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
