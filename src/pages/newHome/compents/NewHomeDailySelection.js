import React from 'react';
import {Link} from 'react-router-dom';

class NewHomeDailySelection extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        return (
            <div className='nhbox1'>
                <div className="nhconhead">
                    <h2>
                        每日精选
                        <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                    </h2>
                    <span>为您定制的甄选品种</span>
                </div>
                <ul className="bhul1">
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                    <li>
                        <img
                            src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"
                            alt=""/>
                    </li>
                </ul>
            </div>
        )
    }

}

export default NewHomeDailySelection
