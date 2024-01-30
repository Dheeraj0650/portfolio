import React from "react";

function Achievementpage(){
    return (
        <div className="container-fluid">
            <div style={{fontFamily: "'Poppins', sans-serif", fontSize:"2.5rem", marginLeft:"2rem", color:"#18122B", textAlign:"center"}}>Achievements</div>
            <div className="container-fluid achievementpage-holder">
                <div className="container-fluid achievementpage-card-1">
                    <div className="container-fluid achievementpage-image">
                        <img src="aws-2.png" alt="" />
                    </div>
                    <div className="container-fluid achievementpage-info">
                        <span>I have successfully attained the AWS Certified Developer - Associate certification, demonstrating my comprehensive knowledge and understanding of core AWS services, utilization practices, and fundamental AWS architecture best practices. This certification validates my proficiency in developing, deploying, and debugging cloud-based applications using AWS. Achieving this certification has not only boosted my confidence but also enhanced my credibility in the field. With this recognition, I am well-equipped to contribute effectively to cloud-based projects, providing organizations with the assurance of possessing the right talent for a competitive advantage and ensuring stakeholder and customer satisfaction.</span>
                    </div>
                </div>
                <div className="container-fluid achievementpage-card-1">
                    <div className="container-fluid achievementpage-image">
                        <img src="aws-1.png" alt="" />
                    </div>
                    <div className="container-fluid achievementpage-info">
                        <span>The AWS Certified Cloud Practitioner certification is a fundamental achievement that attests to my comprehensive grasp of the AWS Cloud environment, its services, and essential terminology. This certification marks a significant step in my professional journey, serving as a strong foundation for my transition into the world of cloud computing, even without prior IT or cloud experience. It also demonstrates my commitment to gaining a solid understanding of cloud technologies, making me well-equipped to contribute effectively to the fast-evolving landscape of cloud computing.</span>
                    </div>
                </div>
                <div className="container-fluid achievementpage-card-1">
                    <div className="container-fluid achievementpage-image">
                        <img src="aws-3.png" alt="" />
                    </div>
                    <div className="container-fluid achievementpage-info">
                        <span>This introductory course is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</span>
                    </div>
                </div>
                <div className="container-fluid achievementpage-card">
                    <div className="container-fluid achievementpage-image">
                        <img src="hackerrank.png" alt="" />
                    </div>
                    <div className="container-fluid achievementpage-info">
                        <span>I have successfully completed the HackerRank Skills Certification Test for Problem Solving (Intermediate), a standardized assessment designed to validate my coding skills and problem-solving abilities. This certification demonstrates my commitment to continuous improvement and proficiency in algorithmic and data structure challenges.</span>
                    </div>
                </div>
                <div className="container-fluid achievementpage-card-1">
                    <div className="container-fluid achievementpage-image">
                        <img src="NPTEL.png" alt="" />
                    </div>
                    <div className="container-fluid achievementpage-info">
                        <span>I successfully completed the "Programming, Data Structures, and Algorithms" course at the prestigious Indian Institute of Technology (IIT) Madras. This comprehensive ten-week program catered to individuals with no prior programming experience while also accommodating the expectations of a second-year undergraduate student in science or engineering. This rigorous curriculum honed my skills in programming, data structures, and algorithms, equipping me with a strong foundation for my academic and professional journey.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievementpage;