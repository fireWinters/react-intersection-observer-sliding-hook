/*
 * @Author: callus
 * @Email：1987567948@qq.com
 * @Date: 2022-06-21 11:52:52
 * @Description: 虚拟列表-无限滚动-入口文件
 * @FilePath: /react-intersection-observer-sliding-hook/App.js
 */
import React from 'react';
import './App.css';
import { SlidingWindowScrollHook } from "./SlidingWindowScrollHook";
import MY_ENDLESS_LIST from './Constants';

function App() {
  return (
    <div className="App">
     <h1>15个元素实现无限滚动</h1>
      <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195}/>
    </div>
  );
}

export default App;