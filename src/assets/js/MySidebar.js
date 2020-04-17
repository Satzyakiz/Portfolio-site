import React from "react";
import "../css/MySidebar.css";
import ContactModal from './ContactModal';
import Img1 from "../img/IMG_0433.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [
                {
                    img: Img1
                },
                {
                    text: "About Me",
                    id: "#id1"
                },
                {
                    text: "Work and Education",
                    id: "#id2"
                },
                {
                    text: "Skills",
                    id: "#id3"
                },
                {
                    text: "Other Tools familiar with",
                    id: "#id4"
                },
                {
                    text: "Interests",
                    id: "#id5"
                }
            ]
        };
    }
    render() {
        let links = this.state.links.map((link, i) => (
            <li ref={i + 1}>
                
                {link.img != null ? <img src={link.img} alt="abc" style={{ width: "150px" }}></img> : <></>}
                <AnchorLink href={link.id}>
                    {link.text}
                </AnchorLink>
            </li>
        ));

        return (
            <div className={this.props.menuStatus} id="menu">
                <ul style={{ textAlign: "center", paddingTop: "15px"}}>
                    
                    <h4>Welcome <i class="far fa-smile-beam"></i> </h4>
                </ul>
                <ul>{links}</ul>
                <ul>
                    <ContactModal />
                </ul>
            </div>
        );
    }
}

class MySidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener("click", this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? "isopen" : "";

        return (
            <div ref="root">
                <div className="menubar">
                    <div id="social">
                        <a class="facebookBtn smGlobalBtn" href="https://www.facebook.com/Satzyakiz" ></a>
                        <a class="linkedinBtn smGlobalBtn" href="https://www.linkedin.com/in/satyaki-m-118413105/" ></a>
                    </div>

                    <div className="hambclicker" onClick={this._menuToggle}></div>
                    <div id="hambmenu" className={menuStatus}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <MenuLinks menuStatus={menuStatus} />
            </div>
        );
    }
}
export default MySidebar;