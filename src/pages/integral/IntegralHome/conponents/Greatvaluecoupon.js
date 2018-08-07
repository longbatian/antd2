import React, {Component} from 'react';
import CoojiePage from "../../../../util/CoojiePage";
import InterfaceUtil from "../../../../util/InterfaceUtil";
import $ from "jquery";
class Greatvaluecoupon extends Component {
    constructor(props) {
        super(props);
        this.user_id=CoojiePage.getCoojie('user_id');
        this.token=CoojiePage.getCoojie('token');
        this.state = {}
    }

    componentDidMount() {

    }
    exchange(e){
        const _this=this;
        $.ajax({
            url: InterfaceUtil.getUrl(71),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id,goods_id:e
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    alert(data.msg)
                }else {
                    alert(data.msg)
                }
            }
        })
    }
    render() {
        const data=this.props.integralArray;
        let integralArray=null;
        integralArray=data.length>0?data.map((item,i)=>{
            let startTime=InterfaceUtil.fmtDates(item.start_time);
            let endTime=InterfaceUtil.fmtDates(item.end_time);
            return <li key={item.id}>
                <div className="ithboxUlLef">
                    <span>￥</span>
                    <p>{item.name}</p>
                </div>
                <div className="ithboxUlRig">
                    <div className="ithboxUlRigtit">
                        <span>兑换券</span>
                        {/*部分商品可用*/}
                        {item.describe}
                    </div>
                    <p>有效期【{startTime}-{endTime}】</p>
                    <div className='ithboxUlRigcon'>
                        <p>满{item.use_condition}元可用</p>
                        <p>积分数：<span className='ithboxUlRigconspan'>{item.integral}</span></p>
                        <p>已有<span>{item.user_max}</span>人兑换</p>
                    </div>
                    <button
                    onClick={()=>this.exchange(item.goods_id)}
                    >
                        立即兑换
                    </button>
                </div>
            </li>
        }):null;
        return <div>
            <div className="ithbox2">
                <div className="ithboxTit">
                    <i className="ith_bg2"/>
                    <h2>超值好券</h2>

                </div>
                <ul className="ithboxUl">
                    {/*<li>*/}
                        {/*<div className="ithboxUlLef">*/}
                            {/*<span>￥</span>*/}
                            {/*<p>658</p>*/}
                        {/*</div>*/}
                        {/*<div className="ithboxUlRig">*/}
                            {/*<div className="ithboxUlRigtit">*/}
                                {/*<span>兑换券</span>*/}
                                {/*部分商品可用*/}
                            {/*</div>*/}
                            {/*<p>有效期【2018.10.30-2018.12.30】</p>*/}
                            {/*<div className='ithboxUlRigcon'>*/}
                                {/*<p>满6593元可用</p>*/}
                                {/*<p>积分数：<span className='ithboxUlRigconspan'>496积分</span></p>*/}
                                {/*<p>已有<span>8888</span>人兑换</p>*/}
                            {/*</div>*/}
                            {/*<button>*/}
                                {/*立即兑换*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {integralArray}
                </ul>
            </div>
        </div>
    }
}

export default Greatvaluecoupon;
