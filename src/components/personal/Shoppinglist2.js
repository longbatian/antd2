import React, {Component} from 'react';
import {Button, Col, Form, Icon, Input, Row, Pagination, message} from 'antd';
import $ from "jquery";
import InterfaceUtil from "../../util/InterfaceUtil";
import CoojiePage from "../../util/CoojiePage";

const FormItem = Form.Item;
const { TextArea } = Input;
class Shoppinglist2 extends Component {
   constructor(props){
       super()
       super(props);
       this.user_id = CoojiePage.getCoojie('user_id');
       this.token = CoojiePage.getCoojie('token');
       this.state={
           arry:[],
           cons:1,
       }
   }
    componentDidMount() {
        this.twoAjax()
    }
    twoAjax() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(78),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id,
                token: _this.token,
                page: 1,
                pageSize: 10

            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.code === 1) {
                    data = data.data;
                    _this.setState({
                        arry: data.list,
                        cons: data.count,
                    })
                } else {
                    message.error(data.msg)
                }
            }
        })
    }
    changeHandle(e){
        this.setState({
            page:e
        },()=>{
            this.twoAjax()
        })
    }
    render() {
        const data=this.state;
        let arrys=data.arry.length>0?data.arry.map((item,i)=>{
            return  <tr key={item.id}>
                <td>{item.buy_name}</td>
                <td>{item.produce}</td>
                <td>{item.standard}</td>
                <td>{item.buy_num}</td>
                <td>{item.valid_time}</td>
                <td></td>
            </tr>
        }):null;
        return <div className="blBoxs">
            <div className="blCons">
                <table className="nTable">
                    <thead>
                    <tr>
                        <th>商品名称</th>
                        <th>生产厂家</th>
                        <th>规格</th>
                        <th>求购有效期</th>
                        <th>求购数量</th>
                        <th>回复</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arrys}
                    </tbody>
                </table>
                <div className="paginationbox">
                    <Pagination showQuickJumper defaultCurrent={1} total={data.cons}
                    onChange={(e)=>this.changeHandle(e)}
                    />
                </div>
            </div>

        </div>
    }
}

export default Shoppinglist2
