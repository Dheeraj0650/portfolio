import React from "react";

function Homepage(){
    return (<div className="container-fluid homepage-holder">
                <div className="container-fluid homepage-container">
                    <div className="conatainer-fluid intro">
                        <div style={{fontFamily: "'Acme', sans-serif", fontSize:"5rem"}}>Developer</div>
                        <div style={{fontFamily: "'Mulish', sans-serif", fontSize:"1.2rem", marginLeft:"0.3rem"}}><p>A Passionate Software Development Engineer in Cloud, Full Stack Developer and Block-Chain Developer</p></div>
                        <div>
                            <i class="fa-brands fa-github fa-2x"></i>
                            <i class="fa-brands fa-linkedin fa-2x" style={{marginLeft:"1rem"}}></i>
                        </div>
                    </div>
                    <div className="container-fluid photo">
                        <img src="dheeraj.png" style={{width:"20rem"}}></img>
                    </div>
                </div>
                <div className="certificate-badges">
                    <img src="aws-1.png" style={{width:"8rem"}}></img>
                    <img src="hackerrank.png" style={{width:"10rem"}}></img>
                </div>
            </div>);
}

export default Homepage;