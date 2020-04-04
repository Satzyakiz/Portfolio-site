import React from 'react';

import "../css/myFlipCard.css" ;
import {Container} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import icon1 from "../img/interestIcons/icon1.jpg";
import icon2 from "../img/interestIcons/icon2.jpg";
import icon3 from "../img/interestIcons/icon3.jpg";
import icon4 from "../img/interestIcons/icon4.jpg";
import icon5 from "../img/interestIcons/icon5.jpg";
import icon6 from "../img/interestIcons/icon6.jpg";


class MyFlipCard extends React.Component{
    render() {
        return (
            <Container className="interestCardContainer">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={icon1} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Sports</h1>
                                        <p>
                                            Been part of various sport events in school and college days.
                                            Also played 2nd division club cricket.
                                        </p>  
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation> 
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} > 
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                <img src={icon2} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Reading</h1>
                                        <p>
                                            I love spending time with books.
                                            The fresh smell of a new book is addictive, isn't it?
                                            My favourite author is Haruki Murakami. Well, I like Paulo Coelho
                                            as well !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}  > 
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                <img src={icon3} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Gadgets</h1>
                                        <p>
                                            I try to stay updated about technology and gadgets
                                            as much as possible. Now working hard to be able to buy
                                            any gadget I wish to buy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                <img src={icon4} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Volunteering</h1>
                                        <p>
                                            I try to take part in community services.
                                            Took part in some NSS(National Service Scheme) activities, 
                                            like awareness programmes and charity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                <img src={icon5} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Tech Forum</h1>
                                        <p>
                                            I am a core member of the Tech Forum of
                                            our college. Participated in many events.
                                            Also conducted some events on behalf of
                                            the tech forum like coding competitions,
                                            tech fests and online tech competitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} > 
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                <img src={icon6} alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Coding</h1>
                                        <p>
                                            I love to code. I do competitive coding
                                            as much as possible. Though not a great 
                                            competitive coder but still trying my best.
                                            Also love to develop web apps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        
            </Container>
        );
    }
}

export default MyFlipCard;