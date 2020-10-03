import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/timer.less'

export default class Timer extends Component{
    render(){
        return (   
          <div className="timer">     
            <h1>在线倒计时器</h1>
            <div className="timerBody">
              <div className="timerRow">
                  <div className="timerleft">
                    <div className="setTimeRow">
                      <div className="setTime">设置时间</div>
                      <input className="inputNumbers"></input> 
                    </div>                      
                    <button className="symbol">start</button>
                  </div>                            
                  <div className="timerRight">
                    <div className="startTimer">Start</div>                   
                  </div> 
              </div>              
            </div> 
            <div className="backfoot">
                <Link className="homerUrl" to='/'>回到主页</Link>
            </div> 
          </div>           
        );
    }
}