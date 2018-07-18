import React from 'react';
import {Link} from 'react-router-dom';
import './intergarlpage.css';


class Integralpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <div className="iglHead">
                <div className="iglHeadLeft">
                    <img src={require('../../../images/head/logo.png')} alt=""/>
                    <span>积分商城</span>
                </div>
                <ul className="iglHeadRig">
                    <li>
                        <Link to={'/Integral'}>积分首页</Link>
                    </li>
                    <li>
                        <Link to={'/'}>个人中心</Link>
                    </li>
                    <li>
                        <Link to={'/'}>小积分抽大奖</Link>
                    </li>
                    <li>
                        <Link to={'/'}>积分购券</Link>
                    </li>
                    <li>
                        <Link to={'/'}>积分攻略</Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Integralpage;
