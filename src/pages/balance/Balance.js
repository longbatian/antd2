import React,{Component} from 'react';
import BalancePage1 from './components/BalancePage1'
import './components/balanceLess.css'


class Balance extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="blBoxs">
            <div className="blHead">
                <h2>我的余额</h2>
                <ul>
                    <li>余额流水</li>
                    <li>充值管理</li>
                    <li>体现管理</li>
                </ul>
            </div>
            <div className='blCons'>
                <BalancePage1/>
            </div>

        </div>
    }
}

export default Balance;