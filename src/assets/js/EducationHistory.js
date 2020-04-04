import React from "react";

import 'react-vertical-timeline-component/style.min.css';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import "../css/EducationHistory.css";

class EducationHistory extends React.Component{
    render(){
        return (
        <section id="id2">
        <Container fluid className="containerTimeline">
                <ScrollAnimation animateIn='bounce'>
                <h2 className="eduHistoryHeader">Work Experience and Educational Background</h2>
                </ScrollAnimation>
                <hr size="12" color="white" />
                <section id="timeline">
                    
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fas fa-briefcase" 
                                    style={{fontSize: "35px"}}
                                ></i>
                            </span>
                            <div className="innerInner">
                            <h2>Intern (Dec'19 - Feb'20)</h2>
                                <p>
                                    <h6>Winsome IT Solutions (WISIPL) </h6>
                                    Worked on web application development.
                                    Did the user interface of Mediflic with ReactJS. 
                                    Mediflic is a single stage solution for Medical Tourists to 
                                    get Doctor's appointment, hospital booking, diagnostic service, 
                                    medicine delivery to parent care.
                                    URL: <a href="https://www.mediflic.com">Mediflic</a>
                                </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fas fa-graduation-cap" style={{ fontSize: "35px" }}></i>
                            </span>
                            <div className="innerInner">
                            <h2>B.Tech in Information Technology<br /> (2017 - 2021) </h2>
                            <p>
                                <h6>BP Poddar Intitute of Management and Technology </h6>
                                Studied core subjects including DBMS, OS, Computer Networking, 
                                Discrete Mathematics, Software Engineering, Data Structures, 
                                Design and Analysis of Algorithms, etc. Maintained a GPA of 8.89 
                                (up till 5th semester).
                            </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fas fa-school" style={{ fontSize: "32px" }}></i>
                            </span>
                            <div className="innerInner">
                            <h2>Senior Secondary School (2015 - 2017)</h2>
                            <p>
                                <h6>Kalyani Public School</h6>
                                Studied Physics, Chemistry, Mathematics, Computer Science, 
                                English and Bengali in class XI and XII. Passed senior secondary 
                                examination with a percentage of 81.8.
                            </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fas fa-school" style={{ fontSize: "32px" }}></i>
                            </span>
                            <div className="innerInner">
                            <h2>Secondary School</h2>
                            <p>
                                <h6>Aditya Academy Senior Secondary</h6>
                                Passed the secondary exams with a CGPA of 8.6.
                            </p>
                            </div>
                        </div>
                    </article>
                </section>
                <hr size="12" color="white" />
            </Container>
            </section>
    )
    }
}

export default EducationHistory;