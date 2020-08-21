import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class MenubarComponent extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
          active : ["","","","","","","",""],
          height:["","","","","","","",""],
          ids :["home","about","skills", "education","workhistory","projects","contactme"]
          
        }
    }

componentDidMount(){
  //const col = document.getElementById("nav-link");
  let new_list=[];
  window.addEventListener('scroll',(event)=>{
    let active_list = [];
    this.state.ids.map((id,index)=>{
      const el = document.getElementById(id);
      const rect = el.getBoundingClientRect();
      console.log(rect);
      const height = document.getElementById(id).clientHeight;
      console.log(height);
      this.state.height.push(height);
      if(rect.top>=0 && Math.abs(rect.top - rect.bottom) <=rect.height){
        active_list.push("active");
      }
      else{
        active_list.push("");
      }
    });
    let index = "";
    for(let i = 0;i<active_list.length;i++){
      if(active_list[i]!=""){
        index=i;
        break;
      }
    }
    new_list[index] = this.state.ids[index];
    for(let j =0; j<active_list.length;j++){
      if(j!=index){
        new_list[j] = "";
      }
    }
    var navList = document.getElementsByClassName("nav-link");
    for(let k = 0; k<document.getElementsByClassName("nav-link").length; k++){
      if(document.getElementsByClassName("nav-link")[k].href.endsWith(this.state.ids[index])){
        document.getElementsByClassName("nav-link")[k].classList.add("active");
      }
      else{
        document.getElementsByClassName("nav-link")[k].classList.remove("active");
      }
    }
    // navList.map((el)=>{
    //   if(el.getElementById() === new_list[index]){
    //     el.classList.add("active");
    //   }
    //   else{
    //     el.classList.remove("active");
    //   }
    // });
    
   });
}
render(){
    return(
        <Navbar id="#menu-bar" className="sticky-bar Navbar-style" collapseOnSelect  expand="lg"  variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className = "nav-link active"  href="#home">Home</Nav.Link>
            <Nav.Link className = "nav-link"  href="#about">About</Nav.Link>
            <Nav.Link className = "nav-link" href="#skills">Skills</Nav.Link>
            <Nav.Link className = "nav-link"  href="#education">Education</Nav.Link>
            <Nav.Link className = "nav-link"  href="#workhistory">Work History</Nav.Link>
            <Nav.Link className = "nav-link"  href="#projects">Projects</Nav.Link>
            <Nav.Link className = "nav-link"  href="#contactme">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    }
}

export default MenubarComponent;