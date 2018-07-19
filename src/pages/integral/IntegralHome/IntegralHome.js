import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';
import './conponents/integralHome.css'

class IntegralHome extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){

    }
    render(){
        return  <div>
            <div className="ithHead">
                <div className="ithHeadBox">
                    <div className="ithHeadrig">
                        <div className="ithHeadrigcon">
                            <div className="ithHeadrigcontit">
                                <i className="ith_bg1"/>
                                <h2>四川聚创医药有限公司</h2>
                            </div>
                            <div className="ithStrip">
                                <span>3156/10000</span>
                            </div>
                            <p>还差6844积分即可升级成为金牌会员</p>
                        </div>
                        <div className="ithHeadrigrig">
                            <div>
                                <p>可用积分</p>
                                <p className="bigred">4698</p>
                            </div>
                        </div>
                        <div className="ithHeadrigImg">
                            <img src={require('../../../images/morenhead.png')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="ithconBoxs">
                <div className="ithconbox">
                    <div className="ithconshopping">
                        <h2>购物</h2>
                        <p>成功下单并收货可获得积分奖励</p>
                        <Link to="Integral/home">
                            去购物
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default IntegralHome;
