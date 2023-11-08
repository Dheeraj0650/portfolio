import React from "react";

function Homepage(){
    return (<div className="container-fluid homepage-holder">
                <div className="container-fluid homepage-container">
                    <div className="conatainer-fluid intro">
                        <div style={{fontFamily: "'Poppins', sans-serif", fontSize:"4rem"}}>Code-Blooded</div>
                        <div style={{fontFamily: "'Mulish', sans-serif", fontSize:"1.2rem", marginLeft:"0.3rem"}}><p>A Passionate Software Engineer, Full Stack Developer and Cloud Developer</p></div>
                        <div>
                            <a href="https://github.com/Dheeraj0650" target="_blank" style={{color:"black"}}><i class="fa-brands fa-github fa-2x"></i></a>
                            <a href="https://linkedin.com/in/kottedheeraj" target="_blank" style={{color:"#0077B5"}}><i class="fa-brands fa-linkedin fa-2x" style={{marginLeft:"1rem"}}></i></a>
                        </div>
                        <div className="certificate-badges">
                            <img src="aws-1.png" style={{width:"8rem"}}></img>
                            <img src="hackerrank.png" style={{width:"10rem"}}></img>
                        </div>
                    </div>
                    <div className="container-fluid photo">
                        <img src="dheeraj.png" style={{width:"20rem"}}></img>
                    </div>
                </div>
            </div>);
}

export default Homepage;