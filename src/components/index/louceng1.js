import React from 'react';
import {Carousel} from 'antd';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';

class Louceng1 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            youtu: [],
            banner: [],
            sp: [],
            louceng: [],
            title: '',
            lujin: InterfaceUtil.getImgUrl(),
        }
    }

    xiangqing1(e) {
        var id = e.target.parentNode.firstChild.getAttribute('value');
        window.location.href = '/Shangpinxiangqing?&id=' + id;
        window.scrollTo(0, 0);
    }


    componentDidMount() {
        var user_id = CoojiePage.getCoojie('user_id');
        var token = CoojiePage.getCoojie('token');
        const that = this;
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(20),
            type: 'post',
            dataType: 'json',
            data: InterfaceUtil.addTime({
                user_id:user_id,
                token:token
            }),
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        youtu: data.data.banner_right,
                        banner: data.data.banner,
                        sp: data.data.goods_list,
                        title:data.data.title
                    });

                }

            }

        })

        //楼层
        $.ajax({
            url: InterfaceUtil.getUrl(25),
            type: 'post',
            dataType: 'json',
            data: InterfaceUtil.addTime({
                user_id:user_id,
                token:token
            }),
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                var data = data;
                console.log(data)
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        louceng: data.data
                    });

                }

            }

        })
    }

    render() {
        let data=this.state;
        // console.log(this.state.louceng)
        // var imgs=this.state.louceng?<img src={this.state.lujin+this.state.louceng.ad} className='marginTop20' alt=""/>:null;
        return (
            <div className='contain'>

                {/*楼层*/}
                <div className='marginTop10'>
                    {/*楼层标题*/}
                    <div className='louceng_bt'>
                        {/*<Link to={}>*/}

                        {/*</Link>*/}
                        <span className='floatleft louceng_bt_title_1 scrollTop1'>{data.title}</span>
                        {/*<div className='floatRight'>*/}
                        {/*<Link to={'index'}>*/}
                        {/*更多产品<img src={require("../../images/index/loucengJT.png")} className='marginLeft10' alt=""/>*/}
                        {/*</Link>*/}
                        {/*</div>*/}
                    </div>
                    {/*楼层内容*/}
                    <div className='louceng_con'>
                        {/*第一行*/}
                        <div className='louceng_con_img'>

                        </div>
                        <div className='louceng_con_lunbo'>
                            <Carousel autoplay>
                                {
                                    this.state.banner.map(function (item) {
                                        return (
                                            <div key={item.image}>
                                                <Link to={item.url}>
                                                    <img src={item.image}/>
                                                </Link>

                                            </div>
                                        )
                                    }, this)
                                }
                            </Carousel>
                        </div>
                        {
                            this.state.youtu.map(function (item,i) {
                                return (
                                    <div key={i + 'youtu'} className='louceng_con_img1'>
                                        <Link to={item.url}>
                                            <img src={this.state.lujin + item.image} alt=""/>
                                        </Link>

                                    </div>
                                )
                            }, this)
                        }
                        {/*第二行*/}
                        <ul className='louceng_con_ul floatleft'>
                            {
                                this.state.sp.map(function (item) {

                                    return (
                                        <li key={item.id + 'loCsp'}>
                                            <input type="hidden" value={item.id} data={item.zxdw}/>
                                            <Link to={'/Shangpinxiangqing?&id=' + item.id}>
                                                <img src={this.state.lujin + item.image} alt=""
                                                    // onClick={(e)=>{this.xiangqing3(e)}}
                                                />
                                            </Link>

                                            <p className='hid oneWeekgive font16'>{item.name}</p>
                                            <p className='hid oneWeekgiveP'>{item.standard}</p>
                                            <p className='hid oneWeekgiveP'>{item.enterprice}</p>
                                            <div className='louceng_con_ul_li_div cursor' onClick={(e) => {
                                                this.xiangqing1(e)
                                            }}>立即购买
                                            </div>
                                        </li>
                                    )
                                }, this)
                            }
                            {/*<li>*/}
                            {/*<img src="../../images/index/loucengIMG.png" alt=""/>*/}
                            {/*<p>止痒消炎水</p>*/}
                            {/*<p>20ml</p>*/}
                            {/*<p>福州XXXXXX</p>*/}
                            {/*<div className='louceng_con_ul_li_div'>立即购买</div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<img src="../../images/index/loucengIMG.png" alt=""/>*/}
                            {/*<p>止痒消炎水</p>*/}
                            {/*<p>20ml</p>*/}
                            {/*<p>福州XXXXXX</p>*/}
                            {/*<div className='louceng_con_ul_li_div'>立即购买</div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<img src="../../images/index/loucengIMG.png" alt=""/>*/}
                            {/*<p>止痒消炎水</p>*/}
                            {/*<p>20ml</p>*/}
                            {/*<p>福州XXXXXX</p>*/}
                            {/*<div className='louceng_con_ul_li_div'>立即购买</div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<img src="../../images/index/loucengIMG.png" alt=""/>*/}
                            {/*<p>止痒消炎水</p>*/}
                            {/*<p>20ml</p>*/}
                            {/*<p>福州XXXXXX</p>*/}
                            {/*<div className='louceng_con_ul_li_div'>立即购买</div>*/}
                            {/*</li>*/}
                            <div className='clear'/>
                        </ul>
                        <div className='clear'/>
                    </div>


                    {/**/}
                    {
                        this.state.louceng.map(function (item, i) {
                            var images = item.top_adv ? <img src={this.state.lujin + item.top_adv} alt=""/> : null;
                            return (
                                <div key={i + 'loShu'}>
                                    {/*楼层标题*/}
                                    <div>
                                        <Link to={item.url} className='marginTop20 louceng_guanggao'>
                                            {/*<img src="../../images/index/loucengGG.png" alt=""/>*/}
                                            {images}
                                        </Link>
                                        <div className={'louceng_bt marginTop20 relative'}>
                                            <span
                                                className={'floatleft louceng_bt_title' + ' ' + 'scrollTop' + [i + 2]}>
                                                {item.name}
                                                </span>
                                            <div className='floatRight'>
                                                <Link to='/Chanpinzhongxin?&zjzx=2'>
                                                    更多产品<img src={require("../../images/index/loucengJT.png")}
                                                             className='marginLeft10' alt=""/>
                                                </Link>
                                            </div>
                                            <span className='louceng_bt_shuzi'>{i + 1}</span>
                                            <div className='clear'/>
                                        </div>
                                    </div>
                                    {/*楼层内容*/}
                                    <div className='louceng_con1'>
                                        <div className='floatleft'>
                                            <Link to={item.url}>
                                                <img src={this.state.lujin + item.image} className='louceng_con1_img'
                                                     alt=""/>
                                            </Link>
                                        </div>
                                        {/*<div className='floatleft'><img src={this.state.lujin+item.zuotu} className='louceng_con1_img' alt=""/></div>*/}
                                        <ul className='floatleft louceng_con1_ul'>
                                            {
                                                this.state.louceng[i].goods_list.map(function (item1, i) {
                                                    return (
                                                        <li key={item1.id + 'loCgs'}>
                                                            {/*<input type="hidden" value={item1.id}/>*/}
                                                            <Link to={'/Shangpinxiangqing?&id=' + item1.id}>
                                                                <img src={this.state.lujin + item1.image} alt=""
                                                                    // onClick={(e)=>{this.xiangqing3(e)}}
                                                                />
                                                            </Link>

                                                            {/*<img src={this.state.lujin+item.image} alt="" onClick={(e)=>{this.xiangqing3(e)}}/>*/}
                                                            <p className='hid font16 oneWeekgive'>{item1.name}</p>
                                                            <p className='hid oneWeekgiveP'>{item1.standard}</p>
                                                            <p className='hid oneWeekgiveP'>{item1.enterprise}</p>
                                                        </li>
                                                    )
                                                }, this)
                                            }
                                        </ul>
                                        <div className='clear'></div>
                                    </div>
                                </div>
                            )
                        }, this)
                    }
                </div>
            </div>
        )
    }
}

export default Louceng1
