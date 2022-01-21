import React, { Fragment } from 'react';



const About = () => {
    return (
        <Fragment>

           

            <div className="container-fluid bg-grey ">
                <div className="row">
                    <div className="col-sm-3">
                        <span style={{color:"#487cec"}} className="glyphicon glyphicon-hdd logo blue slideanim"></span>
                    </div>
                    
                    <div className="col-sm-9">
                    <h1 className="text-muted" ><strong>ABOUT US</strong></h1>
                    <br/>
                        <p  className="why fade-in">Our servers are located all around the world. We make sure we provide the best experience for our coustomers. We use intelligent algorithms to switch between servers in differnt locations to give best performance possible. You can search for servers free in differnt locations. In each location you can search for servers based on there name </p><br />
 
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default About;
