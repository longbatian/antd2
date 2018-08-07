import React, {Component} from 'react';
import { message } from 'antd';
import InterfaceUtil from "../../../../util/InterfaceUtil";
import $ from "jquery";
import CoojiePage from "../../../../util/CoojiePage";

class Greatvaluecoupon extends Component {
    constructor(props) {
        super(props);
        this.user_id=CoojiePage.getCoojie('user_id');
        this.token=CoojiePage.getCoojie('token');
        this.img = InterfaceUtil.getImgUrl();
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
                    message.success(data.msg);
                }else {
                    alert(data.msg)
                }
            }
        })
    }
    render() {
        const data = this.props.con;
        let con = null;
        con = data.length > 0 ? data.map((item, i) => {
                let startTime = InterfaceUtil.fmtDates(item.start_time);
                let endTime = InterfaceUtil.fmtDates(item.end_time);
                return <li key={item.goods_id}>
                    <img src={this.img + item.image} alt={item.name}/>
                    <div className="ithboxUlRig">
                        <div className="ithboxUlRigtit">
                            <p>{item.name}</p>
                        </div>
                        <div className='ithboxUlRigcon'>
                            <p>参考价: <span className='ithxie'>￥12.56</span></p>
                            <p>积分数：<span className='ithboxUlRigconspan'>{item.integral}积分</span></p>
                            <p>已有<span>{item.user_max}</span>人兑换</p>
                        </div>
                        <button
                            onClick={() => this.exchange(item.goods_id)}
                        >
                            立即兑换
                        </button>
                    </div>
                </li>
            })
            : null;

        return <div>
            <div className="ithbox2">
                <div className="ithboxTit">
                    <i className="ith_bg2"/>
                    <h2>热门兑换</h2>
                </div>
                <ul className="ithboxUl">
                    {/*<li>*/}
                    {/*<img src={require('../../../../images/interl/intergralhome/12.png')} alt=""/>*/}
                    {/*<div className="ithboxUlRig">*/}
                    {/*<div className="ithboxUlRigtit">*/}
                    {/*<p>标题文本标题文本标题文本标题文本标题文本标题文本标题文本</p>*/}
                    {/*</div>*/}
                    {/*<div className='ithboxUlRigcon'>*/}
                    {/*<p>参考价: <span className='ithxie'>￥12.56</span></p>*/}
                    {/*<p>积分数：<span className='ithboxUlRigconspan'>496积分</span></p>*/}
                    {/*<p>已有<span>8888</span>人兑换</p>*/}
                    {/*</div>*/}
                    {/*<button>*/}
                    {/*立即兑换*/}
                    {/*</button>*/}
                    {/*</div>*/}
                    {/*</li>*/}
                    {con}

                </ul>
            </div>
        </div>
    }
}

export default Greatvaluecoupon;
