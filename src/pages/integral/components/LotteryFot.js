import React from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";
import InterfaceUtil from "../../../util/InterfaceUtil";


class LotteryFot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(72),
            type: "post",
            data: InterfaceUtil.addTime({
                page:1,pageSize:6
            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if(data.code===1){
                    _this.setState({
                        list:data.data.list
                    })
                }
            }
        })
    }
    render() {
        const data=this.state.list;
        let list=data.length>0?data.map((data)=>{
            let times=InterfaceUtil.fmtDate(data.created_time)
            return  <li key={data.id}>
                <span>{data.username}</span>
                <span>{data.value}</span>
                <span>{times}</span>
            </li>
        }):null;
        return <div className='intFotBox'>
            <div className="intFotBoxLef">
                <img src={require('../../../images/interl/14.png')} alt=""/>
                <ul>
                    <li>
                        <span>1</span>
                        <p>
                            .聚创淘药网会员每次抽奖需要扣除200积分，扣除的积分不退还，每天参与的次数不限。
                        </p>

                    </li>
                    <li>
                        <span>2</span>
                        <p>
                            .用户获得的失误奖品公司同一时间发放，虚拟奖品即刻可用，过期概不退还积分。
                        </p>

                    </li>
                    <li>
                        <span>3</span>
                        <p>
                            .如本活动因不可抗力等原因无法执行，本网有权取消、终止、修改或暂停本活动。
                        </p>

                    </li>
                </ul>
            </div>
            <div className="intFotBoxRig">
                <h1>中奖达人名单</h1>
                <div className='intredboxs'>
                    <ul>
                        {/*<li>*/}
                            {/*<span>juchuang</span>*/}
                            {/*<span>抽中100元优惠券</span>*/}
                            {/*<span>20180506 08:00:00</span>*/}
                        {/*</li>*/}
                        {list}
                    </ul>
                </div>
            </div>

        </div>
    }
}

export default LotteryFot;
