import './App.css';
import React from 'react';
import PictureBar from "./components/PictureBar";
import AboutThisSurvey from "./components/AboutThisSurvey";
import InfoAboutYou from "./components/InfoAboutYou";
import WhichRoom from "./components/WhichRoom";
import WhichLocation from "./components/WhichLocation";
import CalendarWeeks from "./components/CalendarWeeks";
import AdminAndIssues from "./components/AdminAndIssues";
import ResponseTimes from "./components/ResponseTimes";

function App() {
  return (
    <div className="App">
      <PictureBar/>
      <AboutThisSurvey/>
      <InfoAboutYou/>
      <WhichRoom/>
      <WhichLocation/>
      <CalendarWeeks/>
      <AdminAndIssues/>
      <ResponseTimes/>


    </div>
  );
}

export default App;
