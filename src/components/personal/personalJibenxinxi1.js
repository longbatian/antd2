import React, {Component} from 'react';
import Tuijian from '../common/tuijian';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import {Button, Modal, Upload, Icon, Form, Row, Col, Input} from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import '../../styles/personal/personalJibenxinxi.css'

const FormItem = Form.Item;

class PersonalJibenxinxi extends Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.username = CoojiePage.getCoojie('username');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            jbxx: [],
            lujin: InterfaceUtil.getImgUrl(),
            jynr: [],
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    // handleOk = () => {
    //     this.setState({loading: true});
    //     this.handleSubmit();
    //     // setTimeout(() => {
    //     //     this.setState({loading: false, visible: false});
    //     // }, 3000);
    // };
    handleCancel = () => {
        this.setState({visible: false});
    };

    xianshi1(e) {
        var a = document.getElementsByClassName('xiugaimima')
        var b = document.getElementsByClassName('xiugaimima_div')
        a[0].className = 'xiugaimima'
        b[0].className = 'xiugaimima_div'
    }

    yingcang(e) {
        var a = document.getElementsByClassName('xiugaimima')
        var b = document.getElementsByClassName('xiugaimima_div')
        a[0].className = 'xiugaimima display'
        b[0].className = 'xiugaimima_div display'
    }

    baocun(e) {
        var a = document.getElementsByClassName('xiugaimima_div_p_inp');
        var tishi = document.getElementsByClassName('xiugaimima_div_p3');
        var old = a[0].value;
        var new1 = a[1].value;
        var new2 = a[2].value;
        if (old == '') {
            tishi[0].className = 'xiugaimima_div_p3 red'
            tishi[0].innerText = '旧密码不能为空'
        }
        else if (new1 === ''||new1 === ' ') {
            tishi[0].className = 'xiugaimima_div_p3 red'
            tishi[0].innerText = '新密码不能为空'
        }
        else if (new1.length < 6 || new1.length > 15) {
            tishi[0].className = 'xiugaimima_div_p3 red'
            tishi[0].innerText = '密码长度为6到15位'
        }
        else if (new2 === '') {
            tishi[0].className = 'xiugaimima_div_p3 red'
            tishi[0].innerText = '两次密码不一致'
        }
        else if (new1 != new2) {
            tishi[0].className = 'xiugaimima_div_p3 red'
            tishi[0].innerText = '两次密码不一致'
        }

        if (new1 == new2) {

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            const that = this;
            //我的收藏
            $.ajax({
                url: InterfaceUtil.getUrl(39),
                type: "post",
                data: {
                    "username": username, "token": token, "userpass": old, "new_userpass": new1
                },
                dataType: "json",
                success: function (data) {
                    if (data.status === 0) {
                        tishi[0].className = 'xiugaimima_div_p3 red'
                        tishi[0].innerText = '旧密码错误'
                    } else {
                        alert(data.info);
                        let a = document.getElementsByClassName('xiugaimima')
                        let b = document.getElementsByClassName('xiugaimima_div')
                        a[0].className = 'xiugaimima display'
                        b[0].className = 'xiugaimima_div display'
                        tishi[0].className = 'xiugaimima_div_p3 red display'
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
        }

    }

    componentDidMount() {
        this.ajaxJibenXinX();
    }

    ajaxJibenXinX() {

        const that = this;
        //我的收藏
        $.ajax({
            url: InterfaceUtil.getUrl(40),
            type: "post",
            data: {
                "username": that.username, "token": that.token
            },
            dataType: "json",
            success: function (data) {
                // if(data.data.shzt=)
                console.log(data)
                if (data.data.length == 0) {

                } else {
                    if (data.data.shzt !== '审核通过') {
                        that.props.history.push('/InformationPage');
                        return;
                    }
                    that.setState({
                        jbxx: data.data,
                        jynr: data.data.jynr,
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息
                console.log(textStatus);
            }
        });
    }

    handleSubmit = (e) => {
        const _this = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.setState({loading: true});
            // if (!err) {
            //     console.log('Received values of form: ', values);
            // }
            $.ajax({
                url: InterfaceUtil.getUrl(60),
                type: "post",
                data: {
                    "username": _this.username, "token": _this.token, 'shr': values.username,
                    'shdz': values.address, 'shdh': values.phonenumber, 'shyb': values.zipCode,

                },
                dataType: "json",
                success: function (data) {
                    // console.log(data);
                    //     this.handleSubmit();
                    if (data.status === 1) {
                        setTimeout(() => {
                            _this.setState({loading: false, visible: false});
                        }, 2000);
                        _this.ajaxJibenXinX();
                    } else {
                        alert(data.info)
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
        });


    };

    render() {
        const {visible, loading} = this.state;
        const {getFieldDecorator} = this.props.form;
        let data = this.state.jbxx;
        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Wodejifen_title marginBottom20'>
                    <p className='marginLeft20 fontFamily fontWeight floatleft font20'>基本信息</p>
                </div>
                {/*内容*/}
                <div className='white personal_xiangqing_title'>
                    <div className='xian'/>
                    {/*基本信息*/}
                    <div className='marginLeft20 personal_Jibenxinxi_title'>
                        <p className='personal_Jibenxinxi_title_p'>会员基本信息 - 资料审核通过后只能进行密码修改</p>
                    </div>
                    <div className='personal_Jibenxinxi_title_con'>
                        <p className='personal_Jibenxinxi_title_p1'>
                            <span>会员账号：</span>
                            <span className='personal_Jibenxinxi_title_span'>{data.username}</span>
                            <span className='marginLeft10'>{data.shzt}</span>
                        </p>
                        <p className='personal_Jibenxinxi_title_p1'><span>会员类型：</span><span
                            className='personal_Jibenxinxi_title_span'>{data.mjtp}</span></p>
                        <p className='personal_Jibenxinxi_title_p1'>
                            <span>会员密码：</span>
                            <input type="password"
                                   style={{background: '#f7f7f7'}}
                                   className='personal_Jibenxinxi_title_inp' disabled value={'111111'}/>
                            <span className='blue fontWeight' onClick={(e) => {
                                this.xianshi1(e)
                            }}>修改密码</span>
                        </p>
                    </div>

                    {/*修改密码*/}
                    <div className='xiugaimima display'/>
                    <div className='xiugaimima_div display'>
                        <p className='xiugaimima_div_p'>修改密码</p>
                        <p className='xiugaimima_div_p2'><span
                            className='xiugaimima_div_p_span'>当前密码：</span><input type="password"
                                                                                 className='xiugaimima_div_p_inp'/>
                        </p>
                        <p className=''><span className='xiugaimima_div_p_span'>新密码：</span><input
                            type="password" className='xiugaimima_div_p_inp' placeholder='密码长度为6-15位'/></p>
                        <p className='xiugaimima_div_p4'><span
                            className='xiugaimima_div_p_span'>确认密码：</span><input type="password"
                                                                                 placeholder='请确认密码'
                                                                                 className='xiugaimima_div_p_inp'/>
                        </p>
                        <p className='red xiugaimima_div_p3 display'>密码不能为空</p>
                        <p className='xiugaimima_div_p1'><span className='xiugaimima_div_p_span1'
                                                               onClick={(e) => {
                                                                   this.baocun(e)
                                                               }}>保存</span><span
                            className='xiugaimima_div_p_span2' onClick={(e) => {
                            this.yingcang(e)
                        }}>取消</span></p>
                    </div>


                    {/*收货信息*/}
                    <div className='marginLeft20 personal_Jibenxinxi_title'>
                        <p className='personal_Jibenxinxi_title_p'>收货信息</p>
                    </div>
                    <div className='marginLeft20 personal_Jibenxinxi_title_con paddingBottom20 relative'>
                        <p className='personal_Jibenxinxi_title_p1'><span>收&nbsp;货&nbsp;&nbsp;人：</span>
                            <span className='personal_Jibenxinxi_title_span'>{data.shr}</span></p>
                        <p className='personal_Jibenxinxi_title_p1'><span>收货地址：</span>
                            <span className='personal_Jibenxinxi_title_span'>{data.shdz}</span></p>
                        <p className='personal_Jibenxinxi_title_p1'><span>收货电话：</span>
                            <span className='personal_Jibenxinxi_title_span'>{data.shdh}</span></p>
                        <div className='personal_Jibenxinxi_title_p1'><span>收货邮编：</span>
                            <span className='personal_Jibenxinxi_title_span'>{data.shyb}</span></div>
                        <div>
                            <a className='setAddress' type="primary" onClick={this.showModal}>
                                修改信息
                            </a>

                            <Modal
                                visible={visible}
                                title="修改收货地址"
                                onOk={this.handleSubmit}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>取消</Button>,
                                    <Button key="submit" type="primary" loading={loading}
                                            onClick={this.handleSubmit}>
                                        确认
                                    </Button>,
                                ]}
                            >
                                <Form onSubmit={this.handleSubmit}>
                                    <Row gutter={24}>
                                        {/*<Col >*/}
                                        <FormItem
                                            label="收货人："
                                            labelCol={{span: 6}}
                                            wrapperCol={{span: 15}}
                                        >
                                            {getFieldDecorator('username', {
                                                rules: [{required: true, message: '请填写收货人！'}],
                                                initialValue: `${data.shr}`
                                            })(
                                                <Input placeholder='请填写收货人'/>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="收货地址："
                                            labelCol={{span: 6}}
                                            wrapperCol={{span: 15}}
                                        >
                                            {getFieldDecorator('address', {
                                                rules: [{required: true, message: '请输入收货地址!'},],
                                                initialValue: `${data.shdz}`
                                            })(
                                                <Input placeholder="收货地址"/>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="收货地址："
                                            labelCol={{span: 6}}
                                            wrapperCol={{span: 15}}
                                        >
                                            {getFieldDecorator('phonenumber', {
                                                rules: [{required: true, message: '请输入收货电话!'}],
                                                initialValue: `${data.shdh}`
                                            })(
                                                <Input placeholder="收货电话" maxLength="11"/>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="邮编："
                                            labelCol={{span: 6}}
                                            wrapperCol={{span: 15}}
                                        >
                                            {getFieldDecorator('zipCode', {
                                                rules: [{required: true, message: '请输入邮编!'}],
                                                initialValue: `${data.shyb}`
                                            })(
                                                <Input placeholder="邮编" maxLength="6"/>
                                            )}
                                        </FormItem>
                                        {/*</Col>*/}
                                    </Row>
                                </Form>
                            </Modal>
                        </div>
                    </div>
                    {/*经营范围*/}
                    <div className='marginLeft20 personal_Jibenxinxi_title'>
                        <p className='personal_Jibenxinxi_title_p'>经营范围</p>
                    </div>

                    <div className='marginLeft20 personal_Jibenxinxi_title_con paddingBottom20'>
                        <div className='personal_Jibenxinxi_title_con_p2 marginLeft10'>
                            {
                                this.state.jynr.map(function (item, i) {
                                    return (
                                        <div key={item.title + i}
                                             className='personal_Jibenxinxi_title_con_p2_span'>
                                            <input type="checkbox" disabled checked/>{item.title}</div>
                                    )
                                }, this)
                            }
                        </div>

                    </div>

                    {/*证件资料上传*/}
                    <div className='marginLeft20 personal_Jibenxinxi_title'>
                        <p className='personal_Jibenxinxi_title_p'>证件资料上传</p>
                    </div>
                    <div
                        className='marginLeft20 personal_Jibenxinxi_title_conxiugaimima_div_p_span2 paddingBottom20'>
                        <p className='relative'>
                            <span className='personal_Jibenxinxi_title_con_span2'>营业执照：</span>


                        </p>
                        <p className='relative'>
                            <span className='personal_Jibenxinxi_title_con_span2'>医疗机构执业许可证：</span>


                        </p>
                        <p className='relative'>
                            <span className='personal_Jibenxinxi_title_con_span2'>采购人身份证：</span>
                        </p>
                        <p className='relative'>
                            <span className='personal_Jibenxinxi_title_con_span2'>法人授权采购委托书：</span>

                        </p>
                        <p className='relative'>
                            <span className='personal_Jibenxinxi_title_con_span2'>收货委托书：</span>

                        </p>

                    </div>
                </div>

                {/*推荐*/}
                <Tuijian data='5'/>

            </div>

        );
    }
}


export default Form.create()(withRouter(PersonalJibenxinxi));
