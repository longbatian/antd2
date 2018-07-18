import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../util/InterfaceUtil';
import $ from 'jquery';
import InterlpageHead from './integral/components/InterlpageHead';
import LotteryCon from './integral/LotteryPage';

import Footer from './footer'
class Integralpage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return  <div>
            <InterlpageHead/>
            <LotteryCon/>

            <Footer/>
        </div>
    }
}
export default Integralpage;
