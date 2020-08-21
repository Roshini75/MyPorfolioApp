import React from 'react';
import burger from './images/burger.jfif';
import burger1 from './images/burger1.PNG';
import burger2 from './images/burger2.PNG';
import burger3 from './images/burger3.PNG';
import burger4 from './images/burger4.PNG';
import burger5 from './images/burger5.PNG';
import burger6 from './images/burger6.PNG';
import land1 from './images/land1.png';
import land2 from './images/land2.png';
import land3 from './images/land3.png';
import land4 from './images/land4.png';
import land5 from './images/land5.png';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import cc from './images/cloud-computing.jpg';
// import cc1 from './images/cc1.png';
// import cc2 from './images/cc2.jpg';
// import cc3 from './images/cc3.jpg';
import file from './images/fms.jpg';
import land from './images/lrbc.png';
import portfolio from './images/portfolio.jpg';
import twitter from './images/twitter.jpeg';
import weather0 from './images/weather0-ss.png';
import weather1 from './images/weather-ss.png';
import weather from './images/weather.jfif';
import CarousalComponent from './CarousalComponent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ResponsiveCarousel from './ResponsiveCarousel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class ProjectComponent extends React.Component{
    constructor(props){
        super(props);
        this.filterSelection = this.filterSelection.bind(this);
        this.w3AddClass = this.w3AddClass.bind(this);
        this.w3RemoveClass = this.w3RemoveClass.bind(this);
        this.handleLearnMore = this.handleLearnMore.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          images : [],
          title : '',
          content : '',
          link : '',
          openModal:false,
          siteLink : '',
          gitLink : ''
        }
         
    }

 handleClickOpen(){
    
      this.setState({
        openModal:true
      });
    };
  
  handleClose(){
    this.setState({
      openModal:false
    });
    };
     
    componentDidMount(){
      this.filterSelection("all");
      // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = btnContainer.getElementsByClassName("active");
        console.log(current);
          current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    };
    
    }

    componentWillUnmount(){
      this.setState({
        openModal:false
      });
    }

    handleLearnMore(type){
      if(type==="burger"){
        this.setState({
          openModal : true,
          title : 'Burger Application',
          content : 'We have used the technologies like HTML, CSS, JS, PHP, MySQL. The tools used for these application are the XAMP, brackets. This project has both the admin and user privileges.',
          img:[burger1,burger2,burger3,burger4,burger5,burger6],
          siteLink : 'http://rxt7735.uta.cloud/wdm/ciudad/start.php',
          gitLink : 'https://github.com/Roshini75/Burger-Application/tree/master'
        });
      }
      else if(type==="cloud"){
        this.setState({
          openModal : true,
          title : 'Cloud Computing',
          content : 'In this course I have used all the three cloud platforms like IBM, AWS, Azure and accomplished all the assignments and quizes related to each cloud. I have explored all the sections briefly in each cloud platform.',
          img:[cc],
          siteLink : '',
          gitLink : 'https://github.com/Roshini75/Cloud-Computing/tree/master'
        });
      }
      else if(type==="land"){
        this.setState({
          openModal : true,
          title : 'Land Registration App',
          content : 'Land registry app has the following feature:Helps to prevent the fraudulent transactions of property. Authentication using the registration details.The administrator can extract the property records with the hash value.',
          img:[land1,land2,land3,land4,land5],
          siteLink : '',
          gitLink : 'https://github.com/Roshini75/Land-Registration-App/tree/master'
        });
      }
      else if(type==="portfolio"){
        this.setState({
          openModal : true,
          title : 'Portfolio Application',
          content : 'MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications.MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js.It is designed to make the development process smoother and easier.Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.This is a sample portfolio application',
          img:[p1,p2,p3,p4],
          siteLink : 'https://mernstackportfoliosite.herokuapp.com/',
          gitLink : 'https://github.com/Roshini75/Land-Registration-App/tree/master'
        });
      }
      else if(type==="file"){
        this.setState({
          openModal : true,
          title : 'File Management System',
          content : 'This is the remote USB made to manage the file systems. We allocate the space on the disk and further load the files on to the disk and perform various operations in java.',
          img:[file],
          siteLink : '',
          gitLink : 'https://github.com/Roshini75/File-Management-System-'
        });
        
      }
      else if(type==="twitter"){
        this.setState({
          openModal : true,
          title : 'Twitter Sentimental Analysis',
          content : 'This is the Data analysis and modeling techniques project where we analyse the tweets from twitter api and classify it as positive,negative or neutral.',
          img:[twitter],
          siteLink : '',
          gitLink : 'https://github.com/Roshini75/Twitter-Sentimental-Analysis'
        });
        
      }
      else if(type==="weather"){
        this.setState({
          openModal : true,
          title : 'Weather Application',
          content : 'This is the weather application which gives the temperature and humidity of a city using the weather api. ',
          img:[weather0,weather1],
          siteLink : 'https://roshini75.github.io/Weather-app/',
          gitLink : 'https://github.com/Roshini75/Weather-app'
        });
        
      }
    }
     filterSelection(c){
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        this.w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
      }
    }
    
   w3AddClass(element, name){
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    w3RemoveClass(element, name){
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
  
    
   
    render(){
        return(
            <div id="projects">
            <div className ="row">
                <h2 data-aos="slide-left">Projects</h2>
            </div>
            <div className ="row">
            <div id="myBtnContainer">
               <button class="btn pro-menu active but-font" onClick={()=>this.filterSelection('all')}> All</button>
                <button class="btn pro-menu but-font" onClick={()=>this.filterSelection('react')}> ReactJs</button>
                <button class="btn pro-menu but-font" onClick={()=>this.filterSelection('mern')}> MERN stack</button>
               <button class="btn pro-menu but-font" onClick={()=>this.filterSelection('js')}> JavaScript</button>
               <button class="btn pro-menu but-font" onClick={()=>this.filterSelection('others')}> Other Academic Projects</button>
            </div>
            </div>
           <div className="row">
           <div className ="image-grid" >
        <div class="box filterDiv js span-1-of-3">
        <img data-aos="slide-from-inside" src={burger} class="grid-img" height="200"/>
        <div class="text">
            <p>Burger Application</p>
            <button onClick={()=>this.handleLearnMore("burger")} className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv others span-1-of-3">
        <img  data-aos="slide-from-inside"  src={cc} class="grid-img"  height="200"/>
        <div class="text">
            <p>Cloud Computing</p>
            <button onClick={()=>this.handleLearnMore("cloud")} className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv mern react span-1-of-3">
        <img  data-aos="slide-from-inside" src={land} class="grid-img"  height="200"/>
        <div class="text">
            <p>Land Registration</p>
            <button  onClick={()=>this.handleLearnMore("land")} className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv mern react span-1-of-3 ">
        <img  data-aos="slide-from-inside" src={portfolio} class="grid-img"  height="200"/>
        <div class="text">
            <p>Portfolio Website</p>
            <button  onClick={()=>this.handleLearnMore("portfolio")}  className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv others span-1-of-3">
        <img  data-aos="slide-from-inside" src={file} class="grid-img"  height="200"/>
        <div class="text">
            <p>File Management System</p>
            <button   onClick={()=>this.handleLearnMore("file")}  className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv others span-1-of-3">
        <img  data-aos="slide-from-inside" src={twitter} class="grid-img"  height="200"/>
        <div class="text">
            <p>Twitter Sentimental Analysis</p>
            <button   onClick={()=>this.handleLearnMore("twitter")}  className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
        <div class="box filterDiv react span-1-of-3">
        <img  data-aos="slide-from-inside" src={weather} class="grid-img"  height="200"/>
        <div class="text">
            <p>Weather Application</p>
            <button   onClick={()=>this.handleLearnMore("weather")}  className="btn btn-ghost grid-btn">Learn more</button>
        </div>
        </div>
           </div>
           </div>
      {this.state.openModal?(<div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={this.state.openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{this.state.title}</DialogTitle>
        <DialogContent>
          <ResponsiveCarousel images = {this.state.img}/>
          <DialogContentText >
            <p>{this.state.content}</p>
            {this.state.siteLink?<a target="_blank" href={this.state.siteLink} style={{padding:"10px"}} color="primary">Visit Site</a>:null}
            {this.state.gitLink?<a target="_blank" href={this.state.gitLink} style={{padding:"10px"}} color="primary">Visit Github</a>:null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>): null}
            </div>
        )
     }

   }

export default ProjectComponent;