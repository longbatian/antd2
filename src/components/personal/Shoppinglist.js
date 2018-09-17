import React, {Component} from 'react';
import {Button, Col, Form, Icon, Input, Pagination, Row, message} from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';

const FormItem = Form.Item;
const {TextArea} = Input;

class Shoppinglist extends Component {

    handleSearch = (e) => {
        e.preventDefault();
        const _this = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var data = values;
                data[`user_id`] = _this.user_id;
                data[`token`] = _this.token;
                console.log(data)
                $.ajax({
                    url: InterfaceUtil.getUrl(40),
                    type: "post",
                    data: InterfaceUtil.addTime(data),
                    dataType: "json",
                    success: function (data) {
                        if (data.code === 1) {
                            message.success(data.msg)
                        } else {
                            message.error(data.msg)
                        }
                    }
                })
            } else {
                message.warning('请填写全部必填项！')
            }

        });

    }
    handleReset = () => {
        this.props.form.resetFields();
    }
    toggle = () => {
        const {expand} = this.state;
        this.setState({expand: !expand});
    }

    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            expand: false,
            list: [{
                name: '药品名称',
                id: `buy_name`,
            }, {
                name: `生产厂家`,
                id: `produce`,
            }, {
                name: `规格`,
                id: `standard`,
            }, {
                name: `求购有效期`,
                id: `valid_time`,
            }, {
                name: `求购数量`,
                id: `buy_num`,
            }, {
                name: `求购价格`,
                id: `price`,
            }, {
                name: `联系人`,
                id: `name`,
            }, {
                name: `联系电话`,
                id: `tel`,
            }],
            arry: [],
            cons: 1,
            page:1,
        }
    }

    getFields() {
        const count = this.state.expand ? 10 : 6;
        const {getFieldDecorator} = this.props.form;
        const children = [];
        let list = this.state.list;
        for (let i = 0; i < list.length; i++) {
            children.push(
                <Col span={8} key={i} style={{display: i < count ? 'block' : 'none'}}>
                    <FormItem label={` ${list[i].name}`}>
                        {getFieldDecorator(`${list[i].id}`, {
                            rules: [{
                                required: true,
                                message: `${list[i].name}`,
                            }],
                        })(
                            <Input placeholder={list[i].name}/>
                        )}
                    </FormItem>
                </Col>
            );
        }
        return children;
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
                page: _this.state.page,
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
        const {getFieldDecorator} = this.props.form;
        const data = this.state;
        let arrys = data.arry.length > 0 ? data.arry.map((item, i) => {
            let time=InterfaceUtil.fmtDate(item.created_time);
            return <li key={item.id}>
                <span className="znConulTit">药品名称：</span>
                <span className="znConulCon">{item.buy_name}</span>
                <span className="znConulTit">联系人：</span>
                <span className="znConulCon">{item.name}</span>
                <span className="znConulTit">电话：</span>
                <span className="znConulCon">{item.tel}</span>
                <span className="znConulTit">生产厂家：</span>
                <span className="znConulCon">{item.produce}</span>
                <span className="znConulTit">规格：</span>
                <span className="znConulCon">{item.standard}</span>
                <span className="znConulTit">留言：</span>
                <span className="znConulCon">{item.content}</span>
                <span className="znConulTit">数量：</span>
                <span className="znConulCon">{item.buy_num}</span>
                <span className="znConulTit">价格：</span>
                <span className="znConulCon">{item.price}</span>
                <span className="znConulTit">有效期：</span>
                <span className="znConulCon">{item.valid_time}</span>
                <span className="znConulTit">创建时间：</span>
                <span className="znConulCon">{time}</span>
            </li>
        }) : null;
        return <div className="blBoxs">
            <div className="blCons">
                <div className="bods">
                    <div className="znHead">
                        发布求购信息
                    </div>
                    <div className="znCon">
                        <Form
                            className="ant-advanced-search-form"
                            onSubmit={this.handleSearch}
                        >
                            <Row gutter={24}>{this.getFields()}</Row>
                            <Row gutter={24}>
                                <FormItem>
                                    {getFieldDecorator('content', {
                                        rules: [{message: '备注!'}],
                                        initialValue: ``
                                    })(
                                        <TextArea placeholder="备注"/>
                                    )}
                                </FormItem>
                            </Row>

                            <Row>
                                <Col span={24} style={{textAlign: 'right'}}>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                        重置
                                    </Button>
                                    <a style={{marginLeft: 8, fontSize: 12}} onClick={this.toggle}>
                                        顯示全部 <Icon type={this.state.expand ? 'up' : 'down'}/>
                                    </a>
                                </Col>
                            </Row>
                        </Form>
                    </div>


                </div>
                <div className="bods znbox2">
                    <div className="znHead">
                        求购药品信息
                    </div>
                    <div className="znCon">
                        <ul className="znConul">
                            {arrys}
                            {/*<li>*/}
                            {/*<span className="znConulTit">药品名称：</span>*/}
                            {/*<span className="znConulCon">药品名称</span>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="paginationbox">
                        <Pagination
                            showQuickJumper
                            defaultCurrent={1}
                            total={data.cons}
                            onChange={(e)=>this.changeHandle(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Form.create()(Shoppinglist);
