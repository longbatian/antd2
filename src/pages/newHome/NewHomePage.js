import React from 'react';
import $ from 'jquery';
import {Link, Redirect, withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import { Modal,Carousel } from 'antd';
import Footer from '../footer'; //尾部
import Headcon from '../../components/header/Headcon';
import HeaderTop from '../../components/header/HeadTop';
import NewHeadBut from './compents/NewHeadBut'
import NewLunboRigPage from './compents/NewLunboRigPage'
import NewHomeDailySelection from './compents/NewHomeDailySelection'
import NewHomePage2 from './compents/NewHomePage2'
import NewHomePage3 from './compents/NewHomePage3'
import NewHomePage4 from './compents/NewHomePage4'
import NewHomePage5 from './compents/NewHomePage5'
import NewHomePage6 from './compents/NewHomePage6'

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
                <div className="nllbimgbox">
                    <div className="nllbimgboxcarousel">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                        <NewLunboRigPage/>
                    </div>

                </div>
                <div className="nhlunbox">


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
            <NewHomePage3/>
            <NewHomePage4/>
            <NewHomePage5/>
            <NewHomePage6/>
            <Footer/>
        </div>
    }
}

export default withRouter(NewHomePage)
