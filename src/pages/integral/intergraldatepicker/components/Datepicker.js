import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../../util/InterfaceUtil';

import './intergraldatepicker.css';
class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

        this.add(); //进入页面第一次渲染
    }

    add() {
        var dat = new Date(); //当前时间
        var nianD = dat.getFullYear(); //当前年份
        var yueD = dat.getMonth(); //当前月
        var tianDs = [0];
        document.getElementById('date').innerHTML = "";
        var nian = dat.getFullYear(); //当前年份
        var yue = dat.getMonth(); //当前月
        var tian = dat.getDate(); //当前天
        var arr = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        document.getElementById('nian').innerText = nian;
        document.getElementById('yue').innerText = arr[yue];
        var setDat = new Date(nian, yue + 1, 1 - 1); //把时间设为下个月的1号 然后天数减去1 就可以得到 当前月的最后一天;
        var setTian = setDat.getDate(); //获取 当前月最后一天
        var setZhou = new Date(nian, yue, 1).getDay(); //获取当前月第一天 是 周几
        for (var i = 0; i < setZhou; i++) { //渲染空白 与 星期 对应上
            var li = document.createElement('li');

            document.getElementById('date').appendChild(li);
        }
        for (var i = 1; i <= setTian; i++) { //利用获取到的当月最后一天 把 前边的 天数 都循环 出来

            var li = document.createElement('li');
            li.innerText = i;
            for (let j = 0; j < tianDs.length; j++) {
                if (nian == nianD && yue == yueD && i == tianDs[j]) {
                    // console.log(tianDs[j], li)
                    li.className = "active";
                }
            }

            document.getElementById('date').appendChild(li);
            // return li;
        }


    }


    render() {
        return <div>
            <div id="data">
                <p>
                    <span id="nian">2017</span>
                    <span>年</span>
                    <span id="yue">一月</span>
                    <span>签到日历</span>
                </p>
                <ul id="title">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                </ul>
                <ul id="date">
                </ul>
            </div>
        </div>
    }
}

export default Datepicker;
