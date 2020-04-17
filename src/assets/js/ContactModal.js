import React from "react";
import {Modal, Button} from "react-bootstrap";

import "../css/ContactModal.css";

class ContactModal extends React.Component{

    state = {
        showModal: false
    }

    close() {
        this.setState({ showModal: false });
    }

    open = ()=> {
        this.setState({ showModal: true });
    }

    render() {

        return (
            <div className="modalContainer">
                <Button
                    bsStyle="primary"
                    bsSize="medium"
                    onClick={this.open}
                    style={{marginLeft: "10%"}}
                >
                    Contact Details
                </Button>

                <Modal show={this.state.showModal} onHide={() => this.close()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Phone No: </h4>
                        <ul style={{ paddingLeft: "5px" }}>
                            <li>8017322560</li>
                        </ul>
                        <h4>Email Id:</h4> 
                        <ul style={{paddingLeft: "5px"}}>
                            <li>satyakisatzmajumder1999@gmail.com</li>
                        </ul>
                        <hr />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.close()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

 
export default ContactModal;