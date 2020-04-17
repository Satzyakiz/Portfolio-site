import React from "react";

import MySidebar from "./MySidebar";

import MyTyped from "./mytyped";
import AboutMe from "./AboutMe";
import EducationHistory from "./EducationHistory";
import MyInterests from "./MyInterests";
import ProgressBar from "./ProgressBar";
import OtherSkills from "./OtherSkills";

import Image from 'react-bootstrap/Image';


import "../css/HomePage.css";
import myImg1 from "../img/pic1.jpg";


class HomePage extends React.Component{
    
    render(){
        return(
            <div className="wholeContent">
                <MySidebar />

                <div className="jumbotronImagePart" style={{zIndex: "-2"}}>
                    <Image className="myImg1" src={myImg1} fluid />
                    <MyTyped className="typed" />
                </div>
                <AboutMe />
                <EducationHistory id="id2" className="class2" />
                <ProgressBar />
                <OtherSkills />
                <MyInterests />
                <div
                    style={{ 
                            background: "#007FFF",
                            textAlign: "center",
                            padding: "15px",
                            
                        }}
                >
                    <div style={{textAlign: "center", color: "white"}}>
                        Made with <i class="fas fa-heart" style={{color: "red"}}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;