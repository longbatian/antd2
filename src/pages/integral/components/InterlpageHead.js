import React from 'react';
import {Link} from 'react-router-dom';


class Integralpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div className='boderBottom'>
            <div className="iglHead">
                <div className="iglHeadLeft">
                    <img src={require('../../../images/head/logo.png')} alt=""/>
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
                        <Link to={'/'}>积分攻略</Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Integralpage;
