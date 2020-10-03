import React, { Component } from 'react';
import { Link } from "react-router-dom";
import hero from '../../images/hero-image.png';
import calculator from '../../images/calculator1.png';
import timer from '../../images/timer.png';
import '../styles/home.less'

export default class Home extends Component{
  render(){
      return (   
        <div className="home">     
          <div className="homeTitle">
            <p className="showImg">在线实用工具</p>
            <img className="backGroundImg" src={hero} alt="timerImg"></img>                        
          </div>  
          <div className="homeContent">
            <div className="toolImg">
              <img className="toolImgs" src={calculator} alt="calculatorImg"></img>
              <img className="toolImgs" src={timer} alt="timerImg"></img>
            </div>
            <div className="toolUrl">
              <Link className="calculatorUrl" to='/calculator'>计算器</Link>
              <Link className="TimerUrl" to='/timer'>倒计时器</Link>
            </div>
          </div>
        </div>           
      );
  }
}