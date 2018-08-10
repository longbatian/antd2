import React, {Component} from 'react';
import {Button, Col, Form, Icon, Input, Row,Pagination  } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
class Shoppinglist2 extends Component {
   constructor(props){
       super()
       this.state={

       }
   }

    render() {

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
                    <tr></tr>
                    </tbody>
                </table>
                <div className="paginationbox">
                    <Pagination showQuickJumper defaultCurrent={1} total={1} />
                </div>
            </div>

        </div>
    }
}

export default Shoppinglist2