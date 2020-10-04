import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/timer.less'

export default class Timer extends Component{
    state = {
        inputTime:'',
        timer:'Start',
    }    

    handleChange = () => {
      this.setState({        
        inputTime: event.target.value,              
      })     
    }

    timerRun;  

    hanleStartTimer = () => {
      this.setState({
        timer: this.state.inputTime,
      })
      this.timerRun = setInterval(this.handleUpdateTimer, 1000); //间隔指定的毫秒数不停地执行指定的代码，定时器
    }

    handleUpdateTimer  = () => {
      if (this.state.timer > 1) {
        this.setState({
          timer: this.state.timer - 1,
        })
      } else {
        this.setState({
          timer: "End",
        })
        clearInterval(this.timeRun) //用于停止 setInterval() 方法执行的函数代码
      }
    }    

    render(){
        return (   
          <div className="timer">     
            <h1>在线倒计时器</h1>
            <div className="timerBody">
              <div className="timerRow">
                  <div className="timerleft">
                    <div className="setTimeRow">
                      <label className="setTime">设置时间</label>
                      <input className="inputNumbers" type="text"
                        value={this.state.inputTime}
                        onChange={this.handleChange}
                        ></input> 
                    </div>                      
                    <button className="start" onClick={this.hanleStartTimer}
                      disabled={this.state.timer > 0
                        && this.state.timer != 'Start'
                        && this.state.timer != 'End'}>start</button>
                  </div>                           
                  <input className="timerRight" type="text" 
                    readOnly={true} value={this.state.timer}></input>                    
              </div>              
            </div> 
            <div className="backfoot">
                <Link className="homerUrl" to='/'>回到主页</Link>
            </div> 
          </div>           
        );
    }
}