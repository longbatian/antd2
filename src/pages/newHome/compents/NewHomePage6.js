import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage5 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        return (
            <div className='nhbox1'>
                <div className="nhhead">
                    <h2 className={'nhhead'}>厂家推荐</h2>
                    <p>品牌厂家,优质推荐</p>
                </div>
                <ul className="nhul5">
                    <li>
                        <div className="nhul5Tit">
                            <Link to={}>
                                查看全部
                            </Link>
                            <img
                                src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1536569301708.png"
                                alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default NewHomePage5
