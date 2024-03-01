import React from "react";

function Contactpage(){
    return (
        <div className="container-fluid">
            <div style={{fontFamily: "'Poppins', sans-serif", fontSize:"2.5rem", marginLeft:"2rem", color:"white", textAlign:"center"}}>Contact</div>
            <div className="container-fluid contactpage-holder">
                <div className="Location">
                    <div style={{textAlign:"center", marginBottom:"1rem"}}>
                        <i class="fa-solid fa-location-crosshairs fa-3x"></i> 
                    </div>
                    <div>
                        <div style={{textAlign:"center", fontFamily: "'Poppins', sans-serif"}}>
                            Location
                        </div>
                        <div style={{fontFamily: "'Mulish', sans-serif"}}>
                            Salt Lake City, Utah
                        </div>    
                    </div>
                </div>
                <div className="Mail">
                    <div style={{textAlign:"center", marginBottom:"1rem"}}>
                        <i class="fa-solid fa-envelope-open-text fa-3x"></i>
                    </div>
                    <div> 
                        <div style={{textAlign:"center", fontFamily: "'Poppins', sans-serif"}}>
                            Mail
                        </div>
                        <div style={{fontFamily: "'Mulish', sans-serif"}}>
                            <a href="mailto:kottedheeraj@gmail.com">kottedheeraj@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactpage;