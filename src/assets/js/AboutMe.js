import React from 'react';

import "../css/AboutMe.css";

import {Container, Card,  Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';

import img1 from "../img/IMG_0147.jpg";

class AboutMe extends React.Component{

    render(){
        return(
            <section id="id1">
            <Container className="wholeAbout">
                <ScrollAnimation animateIn="fadeIn">
                <h2 className="aboutH">About Me</h2>
                <h4 className="aboutH1">A small description about myself</h4>
                </ScrollAnimation>
                <hr size="12" color="navy" />
                <div className="aboutContent">
                    <div className="aboutText">
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                        <Card>
                            
                            <Card.Body>
                                <Card.Header className="aboutTitle">Satyaki Majumder</Card.Header>
                                <Card.Text className="aboutText">
                                    Energetic student, eager to apply extensive knowledge of computer science to 
                                    achieve company goals. Dedicated to working hard to make positive contributions.
                                </Card.Text>
                                <Button variant="primary">
                                    <a 
                                        style={{color: "white"}}
                                        href="https://drive.google.com/file/d/1D7AdP2sD7KfRjOX01_TsgnrMSzJrN5XW/view?usp=sharing">
                                        
                                        Get CV
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                        </ScrollAnimation>
                    </div>
                    <div className="aboutImgContainer">
                        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
                        <Image src={img1} roundedCircle className="aboutImg"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </Container>
            </section>
        )
    }
}

export default AboutMe;