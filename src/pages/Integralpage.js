import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../util/InterfaceUtil';
import $ from 'jquery';
import InterlpageHead from './integral/components/InterlpageHead';

import Footer from './footer'
class Integralpage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return  <div>
            <InterlpageHead/>

            <Footer/>
        </div>
    }
}
export default Integralpage;
