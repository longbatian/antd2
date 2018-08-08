import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router-dom';
import InterfaceUtil from "../../../util/InterfaceUtil";
import CoojiePage from "../../../util/CoojiePage";


class Integralpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // page:1
        }
        this.user_id=CoojiePage.getCoojie('user_id');
        this.token=CoojiePage.getCoojie('token');
    }
    componentDidMount(){

    }
    render() {
        return <div className='boderBottom'>
            <div className="iglHead">
                <div className="iglHeadLeft">
                    <Link to='/Index'>
                        <img src={require('../../../images/head/logo.png')} alt=""/>
                    </Link>
                    <span>积分商城</span>
                </div>
                <ul className="iglHeadRig">
                    <li>
                        <Link to={'/Integral/home'}>积分首页</Link>
                    </li>
                    <li>
                        <Link to={'/Integral/us'}>个人中心</Link>
                    </li>
                    <li>
                        <Link to={'/Integral/lottery'}>小积分抽大奖</Link>
                    </li>
                    {/*<li>*/}
                    {/*<Link to={'/Integral/pay'}>积分购券</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to={'/Integral/IntergralPay'}>积分攻略</Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Integralpage;
