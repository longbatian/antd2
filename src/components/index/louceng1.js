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

        let user_type = CoojiePage.getCoojie('user_type');
        const that = this;
        //搜索条件ajax
        $.ajax({
            // url:'http://192.168.1.49/index.php/index/user/user_reg',
            url: InterfaceUtil.getUrl(24),
            type: 'post',
            dataType: 'json',
            data: {
                user_type: user_type,

            },
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data)
                // console.log(data)
                // data=JSON.parse(data);
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        youtu: data.data.banner_1,
                        banner: data.data.banner,
                        sp: data.data.goods,
                        title:data.data.title
                    });

                }

            }

        })

        //楼层
        $.ajax({
            // url:'http://192.168.1.49/index.php/index/user/user_reg',
            url: InterfaceUtil.getUrl(25),
            type: 'post',
            dataType: 'json',
            data: {
                user_type: user_type,

            },
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                var data = data;
                // console.log(data)
                // data=JSON.parse(data);
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
                                                <Link to={item.href}>
                                                    <img src={this.state.lujin + item.image}/>
                                                </Link>

                                            </div>
                                        )
                                    }, this)
                                }
                            </Carousel>
                        </div>
                        {
                            this.state.youtu.map(function (item) {
                                return (
                                    <div key={item.banner_name + 'youtu'} className='louceng_con_img1'>
                                        <Link to={item.href}>
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
                                                <img src={this.state.lujin + item.sp_image} alt=""
                                                    // onClick={(e)=>{this.xiangqing3(e)}}
                                                />
                                            </Link>

                                            <p className='hid oneWeekgive font16'>{item.title}</p>
                                            <p className='hid oneWeekgiveP'>{item.sku}</p>
                                            <p className='hid oneWeekgiveP'>{item.scqy}</p>
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
                            var images = item.ad ? <img src={this.state.lujin + item.ad} alt=""/> : null;
                            return (
                                <div key={item.id + 'loShu'}>
                                    {/*楼层标题*/}
                                    <div>
                                        <Link to={item.title_href} className='marginTop20 louceng_guanggao'>
                                            {/*<img src="../../images/index/loucengGG.png" alt=""/>*/}
                                            {images}
                                        </Link>
                                        <div className={'louceng_bt marginTop20 relative'}>
                                            <span
                                                className={'floatleft louceng_bt_title' + ' ' + 'scrollTop' + [i + 2]}>{item.title}</span>
                                            <div className='floatRight'>
                                                <Link to='/Chanpinzhongxin?&zjzx=2'>
                                                    更多产品<img src={require("../../images/index/loucengJT.png")}
                                                             className='marginLeft10' alt=""/>
                                                </Link>
                                            </div>
                                            <span className='louceng_bt_shuzi'>{i + 1}</span>
                                            <div className='clear'></div>
                                        </div>
                                    </div>
                                    {/*楼层内容*/}
                                    <div className='louceng_con1'>
                                        <div className='floatleft'>
                                            <Link to={item.img_href}>
                                                <img src={this.state.lujin + item.zuotu} className='louceng_con1_img'
                                                     alt=""/>
                                            </Link>
                                        </div>
                                        {/*<div className='floatleft'><img src={this.state.lujin+item.zuotu} className='louceng_con1_img' alt=""/></div>*/}
                                        <ul className='floatleft louceng_con1_ul'>
                                            {
                                                this.state.louceng[i].gs.map(function (item1, i) {
                                                    return (
                                                        <li key={item1.id + 'loCgs'}>
                                                            {/*<input type="hidden" value={item1.id}/>*/}
                                                            <Link to={'/Shangpinxiangqing?&id=' + item1.id}>
                                                                <img src={this.state.lujin + item1.image} alt=""
                                                                    // onClick={(e)=>{this.xiangqing3(e)}}
                                                                />
                                                            </Link>

                                                            {/*<img src={this.state.lujin+item.image} alt="" onClick={(e)=>{this.xiangqing3(e)}}/>*/}
                                                            <p className='hid font16 oneWeekgive'>{item1.title}</p>
                                                            <p className='hid oneWeekgiveP'>{item1.sku}</p>
                                                            <p className='hid oneWeekgiveP'>{item1.scqy}</p>
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
