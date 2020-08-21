import React from 'react';

class SkillComponent extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div id="skills">
            <div className="row">
            <h2 data-aos="slide-left">SKILLS</h2>
            </div>
            <div className="row">
                <div className="span-1-of-4">
                    <i data-aos="rotate" className="ion-android-desktop icon-big"></i>
                    <div data-aos="opaque" class="icon-text">
           <h3>Frontend</h3>
           <p>Html,css<br></br>javascript<br></br>Reactjs|Redux<br></br>Angularjs</p>
           </div>
                </div> 
                <div className="span-1-of-4">
                    <i data-aos="rotate" className="ion-social-buffer-outline icon-big"></i>
                    <div data-aos="opaque" class="icon-text">
           <h3>Database</h3>
           <p>MSSQL<br></br>My SQL<br></br>MongoDB</p>
           </div>
                </div> 
                <div className="span-1-of-4">
                    <i data-aos="rotate" className="ion-code-working icon-big"></i>
                    <div data-aos="opaque" class="icon-text">
           <h3>Backend</h3>
           <p>.Net<br></br>Java<br></br>C<br></br>Python</p>
           </div>
                </div> 
                <div className="span-1-of-4">
                    <i data-aos="rotate" className="ion-android-cloud-outline icon-big"></i>
                    <div data-aos="opaque" class="icon-text">
           <h3>Cloud</h3>
           <p>IBM<br></br>AWS<br></br>Azure</p>
           </div>
                </div> 
            </div>
            </div>
        )
    }
}

export default SkillComponent;