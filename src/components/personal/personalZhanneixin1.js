// import $ from "../../js/jquery.min";
import $ from 'jquery';
import {withRouter} from 'react-router-dom'
import React from 'react';
import {Input, Button, Select, Pagination, Modal} from 'antd';
import Tuijian from '../common/tuijian';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import LoginPage from '../../util/LoginPage';
import '../../styles/personal/personalZhanneixin.css'

const confirm = Modal.confirm;

class PersonalZhanneixin extends React.Component {

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.loginPage = new LoginPage();
        this.username=CoojiePage.getCoojie('username');
        this.token=CoojiePage.getCoojie('token');
        this.state = {
            znx: [],
            content: '',
            visible: false,
            textLetter:'',
            textTitle:'',
        }
    }


    //全选
    quanxuan(e) {
        var a = $('.quanxuan').eq(0).prop('checked');
        if (a == true) {
            $('.shoucang_inp').prop('checked', true);
            $('.quanxuan1').eq(0).prop('checked', true);
        } else if (a == false) {
            $('.shoucang_inp').prop('checked', false);
            $('.quanxuan1').eq(0).prop('checked', false);
            return;
        }
    }

    quanxuan1(e) {
        var a = $('.quanxuan1').eq(0).prop('checked');
        if (a == true) {
            $('.shoucang_inp').prop('checked', true);
            $('.quanxuan').eq(0).prop('checked', true);
        } else if (a == false) {
            $('.shoucang_inp').prop('checked', false);
            $('.quanxuan').eq(0).prop('checked', false);
            return;
        }
    }


    //切换颜色
    color(e) {
        $('.shoucang_head').removeClass('orange');
        e.target.className = 'shoucang_head orange cursor'
    }

    //未读已读
    value1() {
        var a = $('.ant-select-selection-selected-value').attr('title');
        if (a == '全部信息') {
            var a = ''
        } else if (a == '已读信息') {
            var a = '2'
        } else if (a == '未读信息') {
            var a = '1'
        }

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //站内信
        $.ajax({
            url: InterfaceUtil.getUrl(48),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id,
                "page": 1, "limit": 10, "status": a
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        znx: data.data.list,
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

    guanbi(e) {
        e.target.parentNode.parentNode.className = 'personal_zhanneixin_top_div1 display'
        e.target.parentNode.parentNode.previousSibling.className = 'personal_zhanneixin_top_div display'
    }

    xianshiletter(e) {

    }

    //分页
    fenye(e) {

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //订单ajax
        $.ajax({
            url: InterfaceUtil.getUrl(48),
            type: "post",
            data: {
                "username": username, "token": token, "page": e, "limit": 5, "user_id": user_id
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        dingdan: data.data.list,
                        ddzt0: data.data.ddzt.ddzt0,
                        ddzt1: data.data.ddzt.ddzt1,
                        ddzt2: data.data.ddzt.ddzt2,
                        cons: data.data.cons,
                    });
                    that.refs.dingdan.className = 'display'
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
    componentDidMount() {

        let username = CoojiePage.getCoojie('username');
        let token = CoojiePage.getCoojie('token');
        let user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //站内信
        $.ajax({
            url: InterfaceUtil.getUrl(48),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "page": 1, "limit": 10
            },
            dataType: "json",
            success: function (data) {
                that.loginPage.ajaxLogin(data.status, that.props);
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        znx: data.data.list,
                        cons: data.data.cons,
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
        // ajax.open('post',"http://192.168.1.49/index.php/index/user/get_znx",false);

    }
    showModalZnx = (e,i) => {
        this.setState({
            visible: true,
        });
        this.textLetter(i)
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    textLetter(i){
        let datas=this.state.znx;
        const _this=this;
        if(datas.length===0) return;
        // console.log(datas[i].status)
        if(datas[i].status===1){
            $.ajax({
                url: InterfaceUtil.getUrl(49),
                type: "post",
                data: {
                    "username": _this.username, "token": _this.token, "id": datas[i].id
                },
                dataType: "json",
                success: function (data) {
                    if (data.status === 1) {
                       console.log(data);
                        datas[i].status=2;
                        _this.setState({
                            textLetter:`${datas[i].content}`,
                            znx:datas,
                            textTitle:datas[i].title
                        })
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
        }else {
            this.setState({
                textLetter:`${datas[i].content}`,
                textTitle:datas[i].title
            })
        }

    }
    showConfirm() {
        let id = [];
        confirm({
            title: '温馨提示',
            content: '你确认删除该条留言',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                    let a = $('.shoucang_inp');
                    for (let i = 0; i < a.length; i++) {
                        let xuanzhong = a[i].checked;
                        if (xuanzhong === true) {
                            let id1 = $('.zhanneixin_li').attr('data');
                            id.push(id1);
                        }
                    }

                    // if (id.length === 0) return;
                    let ids = JSON.stringify(id);
                    // console.log(ids)
                    let username = CoojiePage.getCoojie('username');
                    let token = CoojiePage.getCoojie('token');
                    const that = this;
                    //站内信
                    $.ajax({
                        url: InterfaceUtil.getUrl(47),
                        type: "post",
                        data: {
                            "username": username, "token": token, id:ids
                        },
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                            if (data.status === 1) {

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
            },
            onCancel() {
            },
        });
    }

    render() {
        const { visible } = this.state;
        let data = this.state;
        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Wodejifen_title marginBottom20 personal_Wodejifen_title1'>
                    <p className='marginLeft20 fontFamily fontWeight floatleft font20'>站内信</p>
                    <ul>
                        <li className='orange shoucang_head cursor' onClick={(e) => {
                            this.color(e)
                        }}>系统消息
                        </li>
                        {/*<div className='shu floatleft'></div>*/}
                        {/*<li className='shoucang_head cursor' onClick={(e)=>{this.color(e)}}>求购信息</li>*/}
                    </ul>
                </div>
                {/*内容*/}
                <div className='white personal_xiangqing_title relative'>
                    {/*输入框*/}
                    <div className='personal_Dindan_con_inp'>
                        <div className="example-input floatRight marginRight20">
                            <Select defaultValue='全部信息' style={{width: 200}} className='select_value'>
                                <option value="全部信息">全部信息</option>
                                <option value="未读信息">未读信息</option>
                                <option value="已读信息">已读信息</option>
                            </Select>
                            <Button icon="search" style={{marginLeft: 10}} onClick={(e) => {
                                this.value1(e)
                            }}>查询</Button>
                        </div>
                        <div className='clear'/>
                    </div>
                    {/*全选删除*/}
                    <div className='personal_zhanneixin_top'>
                        <div>
                            <p className='personal_zhanneixin_top_span'>
                                <input type="checkbox" className='quanxuan'
                                       onClick={(e) => {
                                           this.quanxuan(e)
                                       }}/></p>
                            <span className='personal_zhanneixin_top_span1'>全选</span>
                            <span className='personal_zhanneixin_top_span2 cursor' onClick={()=>this.showConfirm()}>删除</span>
                        </div>
                    </div>
                    {/*消息*/}
                    <div className='marginLeft20 marginTop20 personal_zhanneixin_msg'>
                        <ul>
                            {
                                data.znx.map(function (item,i) {
                                    let stationLetterClass,stationLetterText;
                                    if(item.status===1){
                                        stationLetterClass='zhanneixin_li';
                                        stationLetterText='未读'
                                    }else if(item.status===2){
                                        stationLetterClass='zhanneixin_li2';
                                        stationLetterText='已读'
                                    }
                                    return (
                                        <li key={item.id} data={item.id} className={stationLetterClass}>
                                            <div className='personal_zhanneixin_top_div display'/>
                                            {/*<div className='personal_zhanneixin_top_div1 display'>*/}
                                                {/*<p className='personal_zhanneixin_top_div_p'>{item.title} <span*/}
                                                    {/*className='personal_zhanneixin_top_div_span floatRight'*/}
                                                    {/*onClick={(e) => {*/}
                                                        {/*this.guanbi(e)*/}
                                                    {/*}}>×</span></p>*/}
                                                {/*<p className='personal_zhanneixin_top_div_p1'*/}
                                                   {/*dangerouslySetInnerHTML={{__html: item.content}}/>*/}
                                            {/*</div>*/}


                                            <div className='personal_zhanneixin_top_span floatleft'><input
                                                type="checkbox" className='shoucang_inp'/></div>
                                            <div>
                                                <div className='personal_zhanneixin_top_span1 floatleft aaaa'
                                                     onChange={(e) => {
                                                         this.status(e)
                                                     }}>{stationLetterText}</div>
                                                <div
                                                    className='personal_zhanneixin_top_span2 floatleft'>{item.title}</div>
                                                <div
                                                    className='personal_zhanneixin_top_span3 floatRight'>[<span>{item.addtime}</span>]
                                                </div>
                                                <br/>
                                                <div className='width930 cursor'
                                                     onClick={(e) =>this.showModalZnx(e,i)}>
                                                    <p className='personal_zhanneixin_top_p'
                                                       dangerouslySetInnerHTML={{__html: item.content1}}/>
                                                </div>
                                            </div>
                                            <div className='clear'/>
                                        </li>

                                    )
                                }, this)
                            }
                            <div className='bottom'/>
                            <div className='xian'/>
                        </ul>
                        <Modal
                            visible={visible}
                            title={`${data.textTitle}`}
                            onCancel={this.handleCancel}
                            footer={null}
                        >
                            <div dangerouslySetInnerHTML={{__html: data.textLetter}}/>
                        </Modal>
                    </div>
                    {/*全选删除*/}
                    <div className='personal_zhanneixin_top1 bgColor marginLeft20'>
                        <p>
                            <span className='personal_zhanneixin_top_span'>
                                <input type="checkbox" className='quanxuan1'
                                       onClick={(e) => {
                                           this.quanxuan1(e)
                                       }}/></span>
                            <span className='personal_zhanneixin_top_span1'>全选</span>
                            <span className='personal_zhanneixin_top_span2 cursor' onClick={() =>this.showConfirm()}>删除</span>
                        </p>
                    </div>
                    {/*分页*/}
                    <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                        <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination
                            showQuickJumper={true} defaultCurrent={1} defaultPageSize={5} total={data.cons}
                            onChange={(e) => {
                                this.fenye(e)
                            }}/></span>
                        <div className='clear'/>
                    </div>
                </div>
                {/*推荐*/}
                <Tuijian data='5'/>

            </div>
        );
    }


    componentDidUpdate() {
        //将状态转化成已读未读显示在页面上
        // var a = document.getElementsByClassName('aaaa');
        // for (var i = 0; i < a.length; i++) {
        //     if (a[i].innerHTML == '1') {
        //         a[i].innerHTML = '未读';
        //         a[i].className = 'personal_zhanneixin_top_span1 floatleft aaaa red';
        //     } else if (a[i].innerHTML == '2') {
        //         a[i].innerHTML = '已读';
        //         a[i].className = 'personal_zhanneixin_top_span1 floatleft aaaa';
        //     }
        // }
    }
}


export default withRouter(PersonalZhanneixin);
