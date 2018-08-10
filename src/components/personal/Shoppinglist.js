import React, {Component} from 'react';
import {Button, Col, Form, Icon, Input, Row } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
class Shoppinglist extends Component {
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
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
        super(props)
        this.state = {
            expand: false,
            list: [{
                name: '药品名称',
                id: 0,
            }, {
                name:`生产厂家`,
                id: 1,
            }, {
                name:`规格`,
                id: 2,
            }, {
                name:`求购有效期`,
                id: 3,
            }, {
                name:`求购数量`,
                id: 4,
            }, {
                name:`求购价格`,
                id: 5,
            }, {
                name:`联系人`,
                id: 6,
            }, {
                name:`联系电话`,
                id: 7,
            }],
        }
    }

    getFields() {
        const count = this.state.expand ? 10 : 6;
        const {getFieldDecorator} = this.props.form;
        const children = [];
        let list=this.state.list;
        for (let i = 0; i<list.length; i++) {
            children.push(
                <Col span={8} key={i} style={{display: i < count ? 'block' : 'none'}}>
                    <FormItem label={` ${list[i].name}`}>
                        {getFieldDecorator(`field-${list[i].id}`, {
                            rules: [{
                                required: true,
                                message: ` ${list[i].name}`,
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

    render() {
        const {getFieldDecorator} = this.props.form;
        return <div className="blBoxs">
            <div className="blCons bods">
                <div className="znHead">
                    发布求购信息
                </div>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row gutter={24}>
                        <FormItem>
                            {getFieldDecorator('contacts', {
                                rules: [{ required: true,message: '备注!'}],
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
    }
}

export default Form.create()(Shoppinglist);