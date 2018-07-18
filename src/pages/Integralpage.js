import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../util/InterfaceUtil';
import $ from 'jquery';

import LotteryFot from './integral/components/LotteryFot';
import LotteryCon from './integral/LotteryPage';
import './integral/components/intergarlpage.css'


class Integralpage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return  <div>

            <div className='intBg'>
                <LotteryCon/>
                <LotteryFot/>
                <div className='ingInfo'>
                    如有问题请拨打028-83211111，活动最终解释权归聚创淘药网所有
                </div>
            </div>

        </div>
    }
}
export default Integralpage;
