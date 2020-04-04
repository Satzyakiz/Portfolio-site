import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import MyFlipCard from "./MyFlipCard";
class MyInterests extends React.Component{
    render(){
        return(
            <section id="id5">
            <div style={{ textAlign: "center", background: "#ecfcff", paddingBottom: "5%",paddingTop: "5%"}}>
                <ScrollAnimation animateIn="fadeIn">
                    <h2 style={{paddingTop: "2%"}}>My Interests</h2>
                </ScrollAnimation>
                <hr />
                <MyFlipCard />
            </div>
            </section>
        )
    }
}

export default MyInterests;