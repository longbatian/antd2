import React, {Component} from 'react';
import $ from 'jquery';
import BalancePage1 from './components/BalancePage1'
import BalancePage2 from './components/BalancePage2'
import BalancePage3 from './components/BalancePage3'

import CoojiePage from '../../util/CoojiePage';
import './components/balanceLess.css'
import InterfaceUtil from "../../util/InterfaceUtil";


class Balance extends Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            price:0
        }
    }

    componentDidMount() {
        const _this=this;
        $.ajax({
            type: "post",
            url: InterfaceUtil.getUrl(34),
            data: InterfaceUtil.addTime({
                "token": _this.token,
                "user_id": _this.user_id,
            }),
            dataType: "json",
            success: function (data, status) {
                if (data.code===1){

                    _this.setState({
                        price:data.data.price
                    })
                }
            }
        })
    }

    onChange(e) {
        let index = $(e.target).attr('data-class');
        $('.bl1ul').find('li').removeClass();
        $(e.target).addClass('bl1act');
        $('.blCons').hide();
        $('.' + index).show();
    }

    render() {
        return <div className="blBoxs">
            <div className="blHead">
                <h2>我的余额</h2>
                <ul className="bl1ul">
                    <li
                        onClick={this.onChange}
                        className="bl1act"
                        data-class="a">
                        余额流水
                    </li>
                    <li
                        onClick={this.onChange}
                        data-class="b">
                        充值管理
                    </li>
                    <li
                        onClick={this.onChange}
                        data-class="c">
                        提现管理
                    </li>
                </ul>
            </div>
            <div className='blCons a '>
                <BalancePage1 {...this.state}/>
            </div>
            <div className='blCons b display'>
                <BalancePage2/>
            </div>
            <div className='blCons c display'>
                <BalancePage3 {...this.state}/>
            </div>
        </div>
    }
}

export default Balance;