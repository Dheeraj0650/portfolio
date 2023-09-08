import React from "react";

function Aboutmepage(){
    return (
        <>
            <div style={{fontFamily: "'Poppins', sans-serif", fontSize:"2.5rem", marginLeft:"2rem", color:"#18122B", textAlign:"center"}}>About me</div>
            <div className="container-fluid aboutme-holder">
                <div className="computer-logo" style={{textAlign:"center"}}>
                    <img src="programming.svg" style={{width:"70%"}}></img>
                </div>
                <div className="aboutme-content">
                    <div className="aboutme-card">
                        <div className="experience">
                            <i class="fa-solid fa-medal fa-2x"></i>   
                            <span style={{fontFamily: "'Poppins', sans-serif", marginTop:"0.8rem"}}>Experience</span>
                            <span style={{fontFamily: "'Mulish', sans-serif"}}>2+ years as a Software engineer at OpenText</span>
                            <span style={{fontFamily: "'Mulish', sans-serif"}}>1+ years as a Software Developer at USU Accessibility Sevices</span>
                        </div>
                        <div className="education">
                            <i class="fa-solid fa-school fa-2x"></i>
                            <span style={{fontFamily: "'Poppins', sans-serif", marginTop:"0.8rem"}}>Education</span>
                            <span style={{fontFamily: "'Mulish', sans-serif"}}>Master of Computer Science at USU</span>
                            <span style={{fontFamily: "'Mulish', sans-serif"}}>Bachelors in Computer Science and Engineering</span>
                        </div>
                    </div>
                    <div className="aboutme-intro">
                        <p style={{fontFamily: "'Mulish', sans-serif", fontSize:"1.2rem"}}>
                            As a self-motivated and responsible person, I look
                            forward to challenging and growth oriented tasks that
                            help in the growth of the place where I work and help to
                            prove the best of my ability in achieving the objective of
                            the job. 
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Aboutmepage;