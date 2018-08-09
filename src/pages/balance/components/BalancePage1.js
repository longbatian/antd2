import React,{Component} from 'react';
import { Pagination } from 'antd';
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
                    <div className="bl1HeadRiglef">
                        <p>充值余额:$555</p>
                        <p>赠送余额:$555</p>
                    </div>
                    <div className="bl1HeadRigrig">
                        <button>充值</button>
                        <button>提现</button>
                    </div>
                </div>
            </div>
            <table className="nTable">
                <thead>
                    <tr>
                        <th>类型</th>
                        <th>时间</th>
                        <th>金额</th>
                        <th>余额</th>
                        <th>备注信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>退款</td>
                        <td>201811111</td>
                        <td>+金额</td>
                        <td>5555</td>
                        <td>啦啦啦啦啦</td>
                    </tr>
                </tbody>
            </table>
            <div className='paginationbox'>
                <Pagination showQuickJumper defaultCurrent={2} total={10}  />
            </div>

        </div>
    }
}

export default BalancePage1;