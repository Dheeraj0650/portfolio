import React from "react";

function Techpage(){
    return (
        <div className="container-fluid">
            <span style={{fontFamily: "'Roboto', sans-serif", fontSize:"1.7rem", marginLeft:"2rem", color:"#18122B"}}>Technology Stack</span>
            <div className="tech-stack">
                <div className="tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>AWS</div>           
                    <img src="aws.png" alt="" style={{width:"5rem"}}/>
                </div>
                <div className="tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>API</div>           
                    <img src="api.png" alt="" style={{width:"5rem"}}/>                
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>NodeJS</div>
                    <img src="node-js.png" alt="" style={{width:"5rem"}}/>              
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>ReactJS</div>
                    <img src="react-js.png" alt="" style={{width:"5rem"}}/>                
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>jQuery</div> 
                    <img src="jquery.png" alt="" style={{width:"5rem"}}/>               
                </div>
                <div className=" tech"> 
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>C++</div>
                    <img src="c++.png" alt="" style={{width:"5rem"}}/>
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>Java</div>
                    <img src="java.png" alt="" style={{width:"5rem"}}/>                
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>Javascript</div>
                    <img src="javascript.png" alt="" style={{width:"5rem"}}/>             
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>Python</div>
                    <img src="python.png" alt="" style={{width:"5rem"}}/>               
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>CSS</div>
                    <img src="css.png" alt="" style={{width:"5rem"}}/>                
                </div>
                <div className=" tech"> 
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>HTML</div>
                    <img src="html.png" alt="" style={{width:"5rem"}}/>               
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>PHP</div>
                    <img src="php.png" alt="" style={{width:"5rem"}}/>
                </div>                
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>Selenium</div>
                    <img src="selenium.png" alt="" style={{width:"5rem"}}/>
                </div>                
                <div className=" tech"> 
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>SQL</div>
                    <img src="sql.png" alt="" style={{width:"5rem"}}/>
                </div>
                <div className=" tech">
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>MongoDB</div>
                    <img src="mongodb.png" alt="" style={{width:"5rem"}}/>
                </div>
                <div className=" tech"> 
                    <div style={{textAlign:"center", fontFamily:"'Roboto', sans-serif"}}>Github</div>
                    <img src="github.png" alt="" style={{width:"5rem"}}/>
                </div>
            </div>
        </div>
    );
}

export default Techpage;