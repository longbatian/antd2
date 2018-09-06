import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import CoojiePage from "../../util/CoojiePage";
import InterfaceUtil from "../../util/InterfaceUtil";


class IntergralInstructionManual extends React.Component {
    constructor() {
        super();

    }

    render() {

        return (
            <div className='zjBox'>
                <img src={require('../../images/interl/15.png')} className='img1' alt=""/>
            </div>
        );
    }
}

export default IntergralInstructionManual;
