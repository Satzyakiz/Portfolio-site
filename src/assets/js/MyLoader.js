import React from 'react';
import { Spinner } from 'react-bootstrap';

const MyLoader = () => (
    <div>
        <div 
            style={{    height: "100vh", background: "black", 
                        color: "white", display: "grid",
                        textAlign: "center", alignItems: "center"
                    }}>
            
            <div>
                <Spinner animation="border" role="status" size='lg'></Spinner>
                <br/>
                Hang On !<br></br>Welcome to my site
            </div>


            {/* <Image src='/images/wireframe/short-paragraph.png' />
            <Image src='/images/wireframe/short-paragraph.png' />
            <Image src='/images/wireframe/short-paragraph.png' /> */}
        </div>
        
    </div>
)

export default MyLoader;