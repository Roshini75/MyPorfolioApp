import React from 'react';

class EducationComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div id="education">
            <div className="row">
                <h2 data-aos="slide-left">Education</h2>
            </div>
            <div className="row">
            <div className="span-1-of-4">
            <div className="edu-text" data-aos="slide-left">
            <h3>University of Texas at Arlington</h3>
            <p>Aug 2019- May 2021</p>
            </div>
            </div>
            <div className = "span-3-of-4">
            <div className="edu-text" data-aos="slide-right">
            <h3>Masters-Computer Science(Specialization: Database, Artificial Intelligence)</h3>
            <p>In my coursework I have learned about the diverse technologies related to web development, database and artificial intelligence. Have a great experience in technologies like Html,css,javascript,php,java,mysql and also cloud computing </p>
            </div>
            </div>
            <div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="span-1-of-4">
            <div className="edu-text" data-aos="slide-left">
            <h3>Koneru Lakshmaiah Education Foundation,India</h3>
            <p>Apr 2014 - June 2018</p>
            </div>
            </div>
            <div className = "span-3-of-4">
            <div className="edu-text" data-aos="slide-right">
            <h3>Bachelors-Computer Science</h3>
            <p>The education was mainly Java-based programming, but I also learned about SQL, PHP, MVC, UML and more. During my time in college, I specialized in multimedia. Here I learned about gaming -the importance of OOP-, web- and user experience and design.</p>
            </div>
            </div>
            <div>
            </div>
            </div>
            <div id="workhistory">
            <div className="row">
                <h2 data-aos="slide-left">Employment History</h2>
            </div>
            <div className="row">
            <div className="span-1-of-4">
            <div className="edu-text" data-aos="slide-left">
            <h3>GGK Tech, India</h3>
            <p>June 2018 - July 2019</p>
            </div>
            </div>
            <div className = "span-3-of-4">
            <div className="edu-text" data-aos="slide-right">
            <h3>Associate Software Engineer</h3>
            <p>Worked for the company Milestone which is one of
               the biggest banking applications in Australia.<br></br>
              Worked on frontend technologies ReactJS, HTML,
              javascript, CSS and the backend technologies Java
              with spring.<br></br>
              Converted the entire application to CSS free by using
              the React-Styled Components which increased the
              speed of loading the application in the browser.<br></br>
              Increased the test coverage of the application from
               60% to 80% using the Jest testing platform.<br></br>
               Experience in using React JS components, Forms,
              Events, Keys, Router, plus Redux, Animations and
                 Flux concept, One-way data flow, Virtual DOM, JSX</p>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="span-1-of-4">
            <div className="edu-text" data-aos="slide-left">
            <h3>GGk Tech, India</h3>
            <p>Dec 2017- Apr 2018</p>
            </div>
            </div>
            <div className = "span-3-of-4">
            <div className="edu-text" data-aos="slide-right">
            <h3>Internship</h3>
            <p>I got a great understanding of how the code works
              with respect to memory and time management in
            .NET with the help of Visual Studio.<br></br>
            Build an API for the banking application using
            ASP.NET and MS SQL technologies in Visual Studio.<br></br>
            Developed a calendar and single paged application
            using the AngularJS.<br></br>
            Developed a todo list application using NodeJS,
           ExpressJS.
          </p>
            </div>
            </div>
            <div>
            </div>
            </div>
            
            <div>
            </div>
            </div>
            </div>
            
        )
    }
}

export default EducationComponent;