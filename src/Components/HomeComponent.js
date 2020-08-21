import React from 'react';
import MenubarComponent from './MenubarComponent';
class  HomeComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
    <div id="home" class="container flex">
         <canvas class="canvas"></canvas>
        <div class="flex">
        <div class="text">
       <h1>Hello, I'm <span class="highlight">Roshini Tadi</span></h1>
       <h1>I'm a full stack developer</h1>
       </div>
       <a class="btn btn-ghost" href="#about">View my work!!</a>
       </div>
      <MenubarComponent/>
    </div>
    )
    }
}
export default HomeComponent;