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
                <div className="nhbox3lef">
                    <div className="nhconhead">
                        <h2>
                            每日精选
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>为您定制的甄选品种</span>
                    </div>
                    <div className="nhbox3lefcon">
                       <div className="nhbox3lefcondiv">

                       </div>

                    </div>
                </div>
                <div className="nhbox3rig">
                    <div className="nhconhead">
                        <h2>
                            诊所专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox3lefcon">

                    </div>
                </div>

            </div>
        )
    }

}

export default NewHomePage2
