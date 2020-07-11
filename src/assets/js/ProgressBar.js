import React from 'react';

import {
    CircularProgressbar,
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

import "../css/ProgressBar.css";

class ProgressBar extends React.Component{

    render(){
        return(
            <section id="id3">
            <div className="wholeProgressBar">
                <ScrollAnimation animateIn='fadeIn'>
                    <h2 style={{ textAlign: "center",paddingBottom:"25px", fontWeight: "600", color: "white" }}> My Skills </h2>
                </ScrollAnimation>
                <hr size="2" color="navy"></hr>
            <div className="wholeProgressBarContent">
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                            style={{ background: "#eb4559",color:"white"}}
                        >C++</Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                                <CircularProgressbar value={80} text="80%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                            style={{ background: "#f78259", color: "white" }}
                        >Python</Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                                <CircularProgressbar value={80} text="80%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#844685", color: "white" }}
                        >C</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={90} text="90%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#f3c623", color: "white" }}
                        >Java</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={65} text="65%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#fb7b6b", color: "white" }}
                        >React JS</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={75} text="75%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#9c5518", color: "white" }}
                        >MongoDB</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={80} text="80%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#fe346e", color: "white" }}
                        >Node.js</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={65} text="65%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#cd8d7b", color: "white" }}
                        >MySQL and Oracle SQL</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={80} text="80%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#721b65", color: "white" }}
                        >Bootstrap</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={95} text="95%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
                <div className="cardBody">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <Card border="dark" style={{ width: '15rem' }} className="skillCard">
                        <Card.Header
                                    style={{ background: "#dc2ade", color: "white" }}
                        >HTML/CSS</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <CircularProgressbar value={95} text="95%">React</CircularProgressbar>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </div>
            </div>
            </div>
            </section>
        )
    }
}

export default ProgressBar;