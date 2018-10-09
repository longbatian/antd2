import React from 'react';
import $ from 'jquery';
import {Link, Redirect, withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Button, Modal} from 'antd';
import Footer from '../footer'; //尾部
import Headcon from '../../components/header/Headcon';
import HeaderTop from '../../components/header/HeadTop';
import NewHeadBut from './compents/NewHeadBut'
import NewLunboRigPage from './compents/NewLunboRigPage'
import NewHomeDailySelection from './compents/NewHomeDailySelection'
import NewHomePage2 from './compents/NewHomePage2'

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
            <div className="nhlon">
                <div className="nhlunbox">
                    <img src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1536887387466.jpg"
                         alt=""
                    className='nhlunboximg1'
                    />
                    <NewLunboRigPage/>
                    <div className="nhlunfot">
                        <img src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1534904292964.png" alt=""/>
                        <img src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1534904292964.png" alt=""/>
                        <img src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1534904292964.png" alt=""/>

                    </div>
                </div>

            </div>
            <div className="nhimg1">
                <img
                    src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png" alt=""/>
            </div>

            <NewHomeDailySelection/>
            <NewHomePage2/>
            <Footer/>
        </div>
    }
}

export default withRouter(NewHomePage)
