import React from "react";
import axios from "axios";
import LoginButton from "./login/LoginButton";
import AboutThisSurvey from "./survey-questions/AboutThisSurvey";
import InfoAboutYou from "./survey-questions/InfoAboutYou";
import WhichRoom from "./survey-questions/WhichRoom";
import WhichLocation from "./survey-questions/WhichLocation";
import CalendarWeeks from "./survey-questions/CalendarWeeks";
import AdminAndIssues from "./survey-questions/AdminAndIssues";
import ResponseTimes from "./survey-questions/ResponseTimes";
import StaffValidReaction from "./survey-questions/StaffValidReaction";
import SmoothCommunication from "./survey-questions/SmoothCommunication";
import CultureAtmoshereLocation from "./survey-questions/CultureAtmosphereLocation";
import CoolAtmosphere from "./survey-questions/CoolAtmosphere";
import BelongToGroup from "./survey-questions/BelongToGroup";
import CodecoolLocation from "./survey-questions/CodecoolLocation";
import CleanCalmEnvironment from "./survey-questions/CleanCalmEnvironment";
import StudiesMentoring from "./survey-questions/StudiesMentoring";
import TheoreticalMaterials from "./survey-questions/TheoreticalMaterials";
import CurriculumRequirements from "./survey-questions/CurriculumRequirements";
import HardSkillsHelp from "./survey-questions/HardSkillsHelp";
import SoftSkillsHelp from "./survey-questions/SoftSkillsHelp";
import EmotionalSupport from "./survey-questions/EmotionalSupport";
import CodecoolMethodology from "./survey-questions/CodecoolMethodology";
import TeamWork from "./survey-questions/Teamwork";
import SubmitSurvey from "./SubmitSurvey";

const MainPage = () => {

    const surveyResult = {};


    const onSubmit = () => {
        // console.log(surveyResult);
        axios({
            method: 'POST',
            url: '/submit-survey',
            surveyResult: surveyResult
        }).then(console.log(surveyResult))
            .catch(er => {
                console.log("no data sorry ", er);
            });
    }


    return (
        <React.Fragment>
                <LoginButton/>
                <AboutThisSurvey/>
                <SubmitSurvey onSubmit={onSubmit}/>
                <InfoAboutYou surveyResult={surveyResult}/>
                <WhichRoom surveyResult={surveyResult}/>
                <WhichLocation surveyResult={surveyResult}/>
                <CalendarWeeks surveyResult={surveyResult}/>
                <AdminAndIssues surveyResult={surveyResult}/>
                <ResponseTimes surveyResult={surveyResult}/>
                <StaffValidReaction surveyResult={surveyResult}/>
                <SmoothCommunication surveyResult={surveyResult}/>
                <CultureAtmoshereLocation surveyResult={surveyResult}/>
                <CoolAtmosphere surveyResult={surveyResult}/>
                <BelongToGroup surveyResult={surveyResult}/>
                <CodecoolLocation surveyResult={surveyResult}/>
                <CleanCalmEnvironment surveyResult={surveyResult}/>
                <StudiesMentoring surveyResult={surveyResult}/>
                <TheoreticalMaterials surveyResult={surveyResult}/>
                <CurriculumRequirements surveyResult={surveyResult}/>
                <HardSkillsHelp surveyResult={surveyResult}/>
                <SoftSkillsHelp surveyResult={surveyResult}/>
                <EmotionalSupport surveyResult={surveyResult}/>
                <CodecoolMethodology surveyResult={surveyResult}/>
                <TeamWork surveyResult={surveyResult}/>
        </React.Fragment>
    );
}


export default MainPage