import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Button, Modal} from 'antd';
import Footer from '../footer'; //尾部
import Headcon from '../../components/header/Headcon';
import HeaderTop from '../../components/header/HeadTop';
import NewHeadBut from './compents/NewHeadBut'

class NewHomePage extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
    }

    render() {
        return <div>
            <div className='container' id='header'>
                <HeaderTop/>
                <Headcon/>
                <NewHeadBut/>
            </div>
            <Footer/>
        </div>
    }
}

export default withRouter(NewHomePage)
