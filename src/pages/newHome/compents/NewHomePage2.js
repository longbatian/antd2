import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
class NewHomePage2 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        return (
            <div className='nhbox1'>
                <div className="nhbox2lef">
                    <div className="nhconhead">
                        <h2>
                            每日精选
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>为您定制的甄选品种</span>
                    </div>
                    <div className="nhbox2lefcon">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                </div>
                <div className="nhbox2rig">
                    <div className="nhconhead">
                        <h2>
                            诊所专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox2lefcon">
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className="nhbox2rig">
                    <div className="nhconhead">
                        <h2>
                            医院专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox2lefcon">
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewHomePage2
