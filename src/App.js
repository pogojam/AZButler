import './App.css';
import tie from './Asset 3.svg';
import anime from 'animejs';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       active:null
    }
  }
  

  componentDidMount(){
    this.animateIn();
  }

  animateIn (){
    let el_line = document.querySelector('.cls-4'),
        el_butler = document.querySelector('.cls-2')
    let tl = anime.timeline({
        elasticity:0,
        duration:3000
    })

    tl.add({
      targets:el_line ,
      d:['M0 0 388.01 388.02-0-0 0 0l0 0 ','M8.93 22.82l388.01 388.02-8.93-22.83L0 0l8.93 22.82z'],
      duration:500,
      easing:'easeInSine'
    }).add({
      targets:['.cls-2 ','.cls-1'],
      opacity:1,
      strokeDashoffset:[anime.setDashoffset,0],
      strokeDasharray:130
    })

  }

  animateOut (){
    let el_line = document.querySelector('.cls-4'),
        el_butler = document.querySelector('.cls-2'),
        el_az = document.querySelector('.cls-1'),
        logo_whole = document.querySelector('.logo'),
        button = document.querySelector('.btn')

    let tl = anime.timeline({
      duration:1000,
      elasticity:0,
      complete: ()=>{this.handleClick()}
    })

    logo_whole.classList.add('logo_active')


    tl.add({
      targets:el_line,
      translateX:'200px',
      easing: 'linear',
      translateY:-50,
      duration:300,
      rotate:45
    }).add({
      targets:el_butler,
      offset:0
    }).add({
      targets:el_az,
      translateX:-30,
      translateY:80,
      strokeDasharray: 230,
      offset:0
    }).add({
      targets:button,
      translateX:'-100vw',
      offset:0
    })
    
  }

  handleClick(){
    this.setState({
      active:true
    })
  }

  render() {
    if (this.state.active){
     return <div className="App">
       <Logo ></Logo>
      <Enterbutton clickAction={this.animateOut.bind(this)} ></Enterbutton>
      <Info></Info>
      </div>
    }
   else{
    return (
      <div className="App">
       <Logo ></Logo>
      <Enterbutton clickAction={this.animateOut.bind(this)} ></Enterbutton>
      </div>
    );
   } 
  }
}

let Enterbutton = (props)=>{
  return <button className={'btn'} onClick={props.clickAction} > Enter </button>
}



let Logo = ()=>{
 return <svg  className={'logo'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.53 410.84">
  <defs>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <path className="cls-4" d="M8.93 22.82l388.01 388.02-8.93-22.83L0 0l8.93 22.82z"/>
      <text className="cls-2" >
        Butler
      </text>
      <path className="cls-1" d="M125.57 205l30 61.45h-2.8l-11.36-22.88h-32.09l-11.2 22.88h-2.48zm-.24 5.52l-15 30.72h30.08zM190.14 304.11v2.32H160l26.4-57.69H160v-2.32h30.4l-26.48 57.69z"/>
    </g>
  </g>
</svg>
}

let Info = ()=>{
  return <div className={'info animated fadeInDown'} >
  <ul>
    <li>Butler Services</li>
    <li>Chauffeur</li>
    <img src={tie} style={ {width:'1em'}} alt=""/>
    <li>602-423-0333</li>
    <li>az.butler@aol.com</li>
  </ul>
  </div>
}

export default App;
