import React from "react";

import ScrollAnimation from 'react-animate-on-scroll';

import "../css/OtherSkills.css";
class OtherSkills extends React.Component{

    render(){
        return(
            <section id="id4">
                <div style={{ minHeight: "80px", background: "rgba(115, 211, 243, 0.411)"}}></div>
            <div className="otherSkills">
                <ScrollAnimation animateIn="fadeIn">
                <h2 
                    style={{textAlign: "center",
                            paddingTop: "15px",
                            paddingBottom: "10px",
                            color: "white"
                           }}
                >Also familiar with</h2>
                <h4
                            style={{
                                textAlign: "center",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                color: "white"
                            }}
                >(But not quite an expert)</h4>
                </ScrollAnimation>
                <hr size="2" color="navy" />
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                <div className="otherSkillsContainer">
                    <div class="teal-pill">Javascript</div>
                    <div class="red-pill">Git</div>
                    <div class="purple-pill">jQuery</div>
                    <div class="orange-pill">Data Science</div>
                </div>
                </ScrollAnimation>
            </div>
            </section>
        )
    }
}

export default OtherSkills;