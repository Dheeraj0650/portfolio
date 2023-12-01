import React from "react";

function Projectspage(){
    return (
        <div className="container-fluid" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
            <div style={{fontFamily: "'Poppins', sans-serif", fontSize:"2.5rem", marginLeft:"2rem", color:"#18122B", textAlign:"center"}}>Projects</div>
            <div className="projects-holder">
               <div className="projects-left">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Information Hub</div>
                        <img src="information-hub.svg"></img>
                        <div className="info"><p>The Information Hub project is a full-stack application that aggregates data from various REST API services, offering a seamless and user-friendly interface for users. It integrates with services like Movies API, Weather API, NASA API, Realtime Board, and more. My role in this group project was primarily in the backend development using Node.js, which involved efficient data processing and communication with the APIs. I also played a part in setting up the MongoDB database for data storage and management.</p><p>With this project, we accomplished the creation of a robust and dynamic information hub that simplifies the process of accessing data from various APIs. The use of Jenkins for CI/CD automation ensures a smooth development pipeline, and the dockerization of the application guarantees consistency across different environments. The project's success lies in providing users with a user-friendly, real-time communication tool to access a wide range of integrated API services, enhancing their overall experience.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/Dheeraj0650/InformationHub" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
               <div className="projects-right">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Rapid update</div>
                        <img src="rapid-update.svg"></img>
                        <div className="info"><p>The project, Rapidupdate, is a cutting-edge full-stack application designed for real-time text editing and collaboration. It offers seamless data synchronization among users within the same room, ensuring super responsiveness and efficient data management. The frontend is developed using React.js, hosted on AWS EC2 for a highly dynamic user experience, while the backend is powered by Node.js for efficient data processing and real-time communication. MongoDB is used as the database for data storage, and NGINX provides network security and load balancing. Jenkins is used for continuous integration and continuous deployment, and the application is containerized using Docker for consistency across different environments. Socket.io is employed for real-time communication, and the system is designed for resilience, automatically restarting all services after system reboots.</p><p>In this group project, my role was primarily focused on the backend development using Node.js. I played a crucial part in implementing real-time communication using Socket.io, ensuring that multiple users in the same room could collaboratively edit and interact with text data. My responsibilities included setting up the server, handling data processing, and establishing the real-time connection. I also contributed to the overall system design and ensured that it could automatically restart services to guarantee uninterrupted operation.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/Dheeraj0650/Rapidupdate" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
               <div className="projects-left">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Monday Pope Tech Sync</div>
                        <img src="monday-pope-tech.svg"></img>
                        <div className="info"><p>The project, "Monday Pope Tech Sync," is a powerful integration application designed to enhance Monday boards by providing real-time URL status checks and web accessibility statistics from Pope Tech. It streamlines project management processes by automatically populating retrieved data into Monday boards. As part of this project, I played a significant role in the development of the Node.js backend that serves as the bridge between AWS Lambda functions and Monday boards. This backend was containerized and deployed on AWS EC2 instances, ensuring optimal performance with the help of NGINX. Additionally, I was responsible for configuring the automated actions triggered by changes in specific board columns, such as checking URL status and retrieving web accessibility statistics.</p><p>With this project, we successfully created a seamless integration between Monday boards and Pope Tech, allowing users to monitor URL status and web accessibility statistics in real-time. This not only streamlines project management but also helps in maintaining the accessibility and functionality of online content efficiently. The use of AWS Lambda for URL status checks and the Dockerized Node.js backend for data retrieval ensured a robust and reliable solution. The clear configuration guidelines provided for Monday boards make it user-friendly, and the project's documentation and contribution guidelines facilitate community involvement and enhancements to the application.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/Dheeraj0650/Monday-Popetech-Sync" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
               <div className="projects-right">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Monday Caption Check</div>
                        <img src="monday-caption-check.svg"></img>
                        <div className="info"><p>The project, "Monday Caption Check," aimed to enhance the accessibility of educational content by automating the process of checking and updating the caption status of videos in Canvas courses. This powerful tool integrated with various APIs, including Monday, Canvas LMS, YouTube, and Kaltura, to streamline the caption checking process. The technology stack included AWS Lambda for scalability and cost-effectiveness. The workflow involved connecting the application to the Monday board, initiating caption checks, scanning Canvas courses for videos, specifying caption types, and using the "3PLAY" column to tag videos that needed captioning. The project also had future enhancements in mind, such as migrating to Node.js and transforming it into a full-fledged Monday application.</p><p>In this group project, my role was primarily focused on the technical aspects. I played a key role in designing and implementing the backend infrastructure, utilizing AWS Lambda for hosting, and integrating with the various APIs mentioned. I also contributed to the development of the caption checking process and the subitem tree structure. My work involved ensuring the seamless automation of the caption checking process, making educational content more accessible.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/Dheeraj0650/Monday-Caption-Check" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
               <div className="projects-left">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Alt Text App</div>
                        <img src="alt-text.svg"></img>
                        <div className="info"><p>The project was the development of the Alternative Text Tool, a web application aimed at enhancing the accessibility of course materials in Canvas LMS by automating the process of adding alternative text (alt text) to images. It involved identifying images without alt text, allowing users to input descriptive alt text, marking images as "decorative," flagging complex images for human review, and seamlessly integrating with Canvas LMS for publishing alt text back to course materials. My role in this group project was primarily focused on the backend development using Node.js, including setting up the API endpoints for image retrieval, completion, and pushing alt text to Canvas. I also worked on database integration with AWS RDS for storing course and image data. Additionally, I contributed to the workflow design, particularly the Review & Publish Page.</p><p>With this project, we accomplished the automation of alt text addition for thousands of images in Canvas courses, making educational content more inclusive and accessible. The system efficiently identified images without alt text, allowed user validation for alt text accuracy, and provided a seamless integration with Canvas LMS. The integration with Monday board using AWS Lambda functions improved our workflow, and the automatic daily reset of course assignments for users streamlined the process. Overall, the Alternative Text Tool significantly improved the accessibility of educational materials for all learners.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/usu-accessibility/AltTextApp" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
               <div className="projects-right">
                    <div className="projects-details">
                        <div style={{fontSize:"2rem", fontFamily: "'Poppins', sans-serif"}}>Monday URL Redirect</div>
                        <img src="monday-url-redirect.svg"></img>
                        <div className="info"><p>The project, MondayURLRedirect, aimed to enhance the workflow of Monday.com users by seamlessly integrating an application that checks the status of URLs added to Monday boards. My role in this project was primarily focused on the backend development. We used a robust tech stack, including AWS Lambda for hosting the core logic and integrated the Monday API to leverage its capabilities.</p><p>With this project, we accomplished the automation of URL status checks within the Monday.com workflow, saving users time and effort. The application provided real-time updates on URL statuses, offering clarity on whether the URLs were working, forbidden, redirected, or not secured. It was built for efficiency, reliability, and seamless integration with Monday.com, ultimately improving the user experience for Monday board users.</p></div>
                    </div>
                    <div className="projects-view">
                        <button type="button" class="btn btn-primary">Live</button>
                        <a href="https://github.com/Dheeraj0650/Rapidupdate" target="_blank"><button type="button" class="btn btn-outline-dark"><i class="fa-brands fa-github"></i> github</button></a>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Projectspage;