import React from "react";
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

const MainPage = () => {

    return (
        <React.Fragment>
            <LoginButton/>
            <AboutThisSurvey/>
            <InfoAboutYou/>
            <WhichRoom/>
            <WhichLocation/>
            <CalendarWeeks/>
            <AdminAndIssues/>
            <ResponseTimes/>
            <StaffValidReaction/>
            <SmoothCommunication/>
            <CultureAtmoshereLocation/>
            <CoolAtmosphere/>
            <BelongToGroup/>
            <CodecoolLocation/>
            <CleanCalmEnvironment/>
            <StudiesMentoring/>
            <TheoreticalMaterials/>
            <CurriculumRequirements/>
            <HardSkillsHelp/>
            <SoftSkillsHelp/>
            <EmotionalSupport/>
            <CodecoolMethodology/>
            <TeamWork/>

        </React.Fragment>
    );
}


export default MainPage