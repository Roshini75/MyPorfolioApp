import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/queries.css';
import './css/style.css';
import './css/animation.scss';
import SkillComponent from './Components/SkillComponent'
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import EducationComponent from './Components/EducationComponent';
import ProjectComponent from './Components/ProjectComponent';
import ContactmeComponent from './Components/ContactmeComponent';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      onScrollActive : ""
    }
  }


  componentDidMount(){
    AOS.init({
      duration : 2000
    })
   
  }

  render(){
  return (
    <div>
    <HomeComponent/>
    <AboutComponent/>
    <SkillComponent/>
    <EducationComponent/>
    <ProjectComponent/>
    <ContactmeComponent/>
    </div>
  );
  }
}

export default App;
