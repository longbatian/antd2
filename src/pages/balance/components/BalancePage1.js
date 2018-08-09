import React,{Component} from 'react';

import './balanceLess.css'


class BalancePage1 extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="">
            <div className="bl1Head">
                <div className="bl1Headlef">
                    <p>我的账户余额</p>
                    <p>
                        <span className="bghsmall">￥</span>
                        8888.2
                    </p>
                </div>
                <div className="bl1HeadRig">

                </div>
            </div>
        </div>
    }
}

export default BalancePage1;