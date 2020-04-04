import React, { Component } from 'react';
import Typed from 'react-typed';

class MyTyped extends Component {
    render() {
        return (
            <div className="typed">
                <span className="fixed-text">
                    I am a
                </span>
                <Typed
                    strings={[
                        'STUDENT',
                        'DEVELOPER',
                        'PROGRAMMING GEEK',
                        'TECH ENTHUSIAST']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                    className="acting-text"
                />
            </div>
        );
    }
}


export default MyTyped;