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
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            jbxx: [],
            lujin: InterfaceUtil.getImgUrl(),
            jynr: [],
            loading: false,
            visible: false,
            info:{
                username:'',
                level: ``,
            }
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
            tishi[0].className = 'xiugaimima_div_p3 red';
            tishi[0].innerText = '旧密码不能为空';
            return;
        }
        else if (new1 === ''||new1 === ' ') {
            tishi[0].className = 'xiugaimima_div_p3 red';
            tishi[0].innerText = '新密码不能为空';
            return;
        }
        else if (new1.length < 6 || new1.length > 15) {
            tishi[0].className = 'xiugaimima_div_p3 red';
            tishi[0].innerText = '密码长度为6到15位';
            return;
        }
        else if (new2 === '') {
            tishi[0].className = 'xiugaimima_div_p3 red';
            tishi[0].innerText = '两次密码不一致';
            return;
        }
        else if (new1 != new2) {
            tishi[0].className = 'xiugaimima_div_p3 red';
            tishi[0].innerText = '两次密码不一致';
            return;
        }

        if (new1 == new2) {

            let username = CoojiePage.getCoojie('username');
            let token = CoojiePage.getCoojie('token');
            let user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //我的收藏
            $.ajax({
                url: InterfaceUtil.getUrl(39),
                type: "post",
                data:InterfaceUtil.addTime( {
                    "user_id": user_id, "token": token, "password": old, "new_password": new1
                }),
                dataType: "json",
                success: function (data) {
                    if (data.code === 0) {
                        tishi[0].className = 'xiugaimima_div_p3 red'
                        tishi[0].innerText = '旧密码错误'
                    } else {
                        alert(data.msg);
                        let a = document.getElementsByClassName('xiugaimima')
                        let b = document.getElementsByClassName('xiugaimima_div')
                        a[0].className = 'xiugaimima display'
                        b[0].className = 'xiugaimima_div display'
                        tishi[0].className = 'xiugaimima_div_p3 red display'
                    }
                }
            });
        }

    }

    componentDidMount() {
        this.ajaxJibenXinX();
    }

    ajaxJibenXinX() {

        const that = this;
        $.ajax({
            url: InterfaceUtil.getUrl(34),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": that.user_id, "token": that.token
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    let datas = that.state.jbxx;
                    datas[`dwmc`] = data.data.enterprise;
                    datas[`lxr`] = data.data.username;
                    that.setState({
                        info: data.data,
                        jbxx: datas,

                    })
                }

            }
        });

        $.ajax({
            url: InterfaceUtil.getUrl(56),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": that.user_id, "token": that.token
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    let datas = that.state.jbxx;
                    datas[`shdz`] = data.data.user_address.address||``;
                    datas[`shr`] = data.data.user_address.name||``;
                    datas[`shdh`] = data.data.user_address.tel||``;
                    datas[`shyb`] = data.data.user_address.shyb||``;
                    // let jynrs=that.state.jynr;
                    // jynrs= data.data.shop_operate;
                    that.setState({
                        jynr: data.data.shop_operate,
                        jbxx: datas,
                        user_shop_operate: data.data.user_shop_operate,
                    })
                }


            }
        });
    }

    handleSubmit = (e) => {
        const _this = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.setState({loading: true});

            let checkboxs=_this.state.user_shop_operate.join(',');
            $.ajax({
                url: InterfaceUtil.getUrl(60),
                type: "post",
                data: InterfaceUtil.addTime({
                    "user_id": _this.user_id, "token": _this.token, 'name': values.username,
                    'address': values.address, 'tel': values.phonenumber,
                    'shop_operate': checkboxs
                }),

                dataType: "json",
                success: function (data) {
                    if (data.code === 1) {
                        setTimeout(() => {
                            _this.setState({loading: false, visible: false});
                        }, 2000);
                        _this.ajaxJibenXinX();
                    } else {
                        alert(data.msg)
                    }
                }
            });
        });


    };

    render() {
        const {visible, loading} = this.state;
        const {getFieldDecorator} = this.props.form;
        let data = this.state.jbxx;
        let datas=this.state;
        let isChec = this.state.user_shop_operate;
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
                    <div className='personal_Jibenxinxi_title_con4'>
                        <p className='personal_Jibenxinxi_title_p1'>
                            <span>会员账号：</span>
                            <span className='personal_Jibenxinxi_title_span'>{datas.info.username}</span>
                            <span className='marginLeft10'>{data.shzt}</span>
                        </p>
                        <p className='personal_Jibenxinxi_title_p1'><span>会员类型：</span><span
                            className='personal_Jibenxinxi_title_span'>{datas.info.level}</span></p>
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
                    <div className='personal_Jibenxinxi_title_con4'>
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
                                            label="收货电话："
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

                    <div className=' personal_Jibenxinxi_title_con4'>
                        <div className='personal_Jibenxinxi_title_con_p2 marginLeft10'>
                            {
                                this.state.jynr.map(function (item, i) {
                                    let status = false;
                                    if (isChec.length > 0) {
                                        isChec.map((it, i) => {
                                            if (item.id == it) {
                                                status = true;
                                                false
                                            }
                                            // status = item.id == it ? true : false;
                                        })
                                    }
                                    return (
                                        <div key={item.id + i}
                                             className='personal_Jibenxinxi_title_con_p2_span'>
                                            <input type="checkbox" disabled checked={status}/>{item.name}</div>
                                    )
                                }, this)
                            }
                        </div>

                    </div>

                    {/*证件资料上传*/}
                    <div className='marginLeft20 personal_Jibenxinxi_title'>
                        <p className='personal_Jibenxinxi_title_p'>证件资料上传</p>
                    </div>
                    <div className=' personal_Jibenxinxi_title_con4'>
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
