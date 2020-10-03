import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/calculator.less'

export default class Calculator extends Component{
    render(){
        return (   
          <div className="calculator">   
            <h1>在线计算器</h1>
            <div className="calcuBody">
                <div className="calcuNum">
                    <input className="inputNumbers"></input>   
                </div>                            
                <div className="numberRow">
                    <button className="symbol">+</button>
                    <button className="symbol">-</button>
                    <button className="symbol">x</button>
                </div>
                <div className="numberRow">
                    <button className="numbers">7</button>
                    <button className="numbers">8</button>
                    <button className="numbers">>9</button>
                </div>
                <div className="numberRow">
                    <button className="numbers">4</button>
                    <button className="numbers">5</button>
                    <button className="numbers">6</button>
                </div>
                <div className="numberRow">
                    <button className="numbers">1</button>
                    <button className="numbers">2</button>
                    <button className="numbers">3</button>
                </div>
                <div className="lastNumberRow">
                    <button className="numbers">0</button>
                    <button className="clearnumber">clear</button>
                    <button className="resultEquals">=</button>
                </div>
            </div> 
            <div className="backfoot">
                <Link className="homerUrl" to='/'>回到主页</Link>
            </div> 
          </div>           
        );
    }
}