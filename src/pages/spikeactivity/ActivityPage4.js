import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Header1 from '../Header1'
import Footer from '../footer'
import InterfaceUtil from "../../util/InterfaceUtil";

class ActivityPage4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }


    render() {

        return <div>
            <div className="athead">
                <ul>
                    <li>
                        <Link to={''}>
                            预存定金翻倍用
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            爆款轮番秒杀
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            特价品种直降10%
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            诊所爆品专区
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            雾化爆品专区
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            抽大奖赢好礼
                        </Link>
                    </li>
                </ul>
            </div>
            <Header1/>
            <div className="atbox">
                <img src="http://www.scjuchuang.com/images/antd/015.png" alt="" className={'atimg1'}/>
            </div>
            <div className="atbox1">
                <div>
                    <div className="atcon1">
                        <img src="http://www.scjuchuang.com/images/antd/006.png" alt=""/>
                        <img src="http://www.scjuchuang.com/images/antd/007.png" alt=""/>
                    </div>
                    <ul className="atcon2">
                        <li>
                            <Link to={''}>
                                <img src="http://www.scjuchuang.com/images/antd/010.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                                <img src="http://www.scjuchuang.com/images/antd/010.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                                <img src="http://www.scjuchuang.com/images/antd/010.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                                <img src="http://www.scjuchuang.com/images/antd/010.png" alt=""/>
                            </Link>
                        </li>
                    </ul>
                    <div className="atcon3">
                        <Link to={''}>
                            <img src="http://www.scjuchuang.com/images/antd/011.png" alt=""/>
                        </Link>

                    </div>
                    <div className="atcon4">
                        <Link to={''}>
                            <img src="http://www.scjuchuang.com/images/antd/012.png" alt=""/>
                        </Link>
                    </div>
                    <div className="atcon5">
                        <Link to={''}>
                            <img src="http://www.scjuchuang.com/images/antd/013.png" alt=""/>
                        </Link>
                    </div>
                    <div className="atcon6">
                        <Link to={''}>
                            <img src="http://www.scjuchuang.com/images/antd/008.png" alt=""/>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="atrig">
                <ul>
                    <li>
                        <Link to={''}>
                            预存翻倍
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            爆品秒杀
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            特价直降
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            诊所专区
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            雾化专区
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            抽奖赢礼
                        </Link>
                    </li>
                </ul>
                <img
                    onClick={()=>InterfaceUtil.goTop()}
                    src="http://www.scjuchuang.com/images/antd/009.png" alt=""/>
            </div>
            <Footer/>
        </div>
    }
}

export default withRouter(ActivityPage4);
