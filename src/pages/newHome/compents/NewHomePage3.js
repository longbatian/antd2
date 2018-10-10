import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage2 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        return (
            <div className='nhbox1'>
                <div className="nhbox3lef">
                    <div className="nhconhead">
                        <h2>
                            新品上架
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>为您定制的甄选品种</span>
                    </div>
                    <div className="nhbox3lefcon">
                        <div className="nhbox3lefcondiv">

                        </div>
                        <ul className="bhul2">
                            <li>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>

                                <p>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                            </li>
                            <li>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>

                                <p>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                            </li>
                            <li>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>

                                <p>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nhbox3rig">
                    <div className="nhconhead">
                        <h2>
                            换购专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox3lefcon">
                        <ul className="bhul3">
                            <li>
                                <p className={'bhul3tit'}>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                                <div title={"我是提示信息"} className={'bhul3Tishi'}>
                                    换购信息>
                                </div>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>
                            </li>
                            <li>
                                <p className={'bhul3tit'}>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                                <div title={"我是提示信息"} className={'bhul3Tishi'}>
                                    换购信息>
                                </div>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>
                            </li>
                            <li>
                                <p className={'bhul3tit'}>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                                <div title={"我是提示信息"} className={'bhul3Tishi'}>
                                    换购信息>
                                </div>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>
                            </li>
                            <li>
                                <p className={'bhul3tit'}>克林名字</p>
                                <p className={'red'}>
                                    会员可见
                                </p>
                                <div title={"我是提示信息"} className={'bhul3Tishi'}>
                                    换购信息>
                                </div>
                                <Link to={''}>
                                    <img
                                        src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        )
    }

}

export default NewHomePage2
