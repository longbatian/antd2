import React from 'react';
import {Link} from 'react-router-dom';
import Fenlei from '../../../components/index/fenlei1';
import $ from 'jquery';

require('./newHome.css');

class Headbutt extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

        this.state = {
            fenlei: true,
        }
    }

    fenlei(e) {
        if (this.state.fenlei) {
            $('.fenlei').addClass('display');
            this.setState({
                fenlei: false,
            })
        } else {
            $('.fenlei').removeClass('display');
            this.setState({
                fenlei: true,
            })
        }
    }

    render() {
        let props = this.state.props;
        console.log(props)
        return (
            <div className='container newHomes'>
                <div className='contain relative header_fenlei'>
                    {/*药品分类*/}
                    <div className='floatleft header_allfenlei'>
                        <div
                            className='header_allfenlei_div'
                            onClick={(e) => {
                                this.fenlei(e)
                            }}>全部商品分类
                        </div>
                    </div>
                    {/*菜单栏*/}
                    <div className="newHomescd floatleft">
                        <ul>
                            <li>
                                <Link to="/NewIndex">
                                    聚创首页
                                </Link>
                            </li>
                            <li><Link to="/Chanpinzhongxin?&zjzx=1">医院专享</Link></li>
                            <li><Link to="/Chanpinzhongxin?&zjzx=2">药店专享</Link></li>
                            <li><Link to="/Chanpinzhongxin">诊所专享</Link></li>
                            <li><Link to="/Integral/home">采购直通车</Link></li>
                            <li>
                                <a href='http://new.scjuchuang.com/guanyuwomen.html' target='_target'>
                                    聚创社区
                                    {/*<img src={"http://www.scjuchuang.com/images/antd/juchuangshequ.png"}*/}
                                         {/*className='header_allfenlei_img' alt=""/>*/}
                                </a>
                            </li>
                            {/*<li>聚创金融</li>*/}
                            {/*<li>特惠专区</li>*/}
                            {/*<li>积分商城</li>*/}
                            <div className='clear'></div>
                        </ul>
                    </div>
                    {/*聚创社区*/}
                    {/*<div className='floatRight header_allfenlei'>*/}
                    {/*<a href='http://new.scjuchuang.com/guanyuwomen.html' target='_target'>*/}
                    {/*<img src={"http://www.scjuchuang.com/images/antd/juchuangshequ.png"} className='header_allfenlei_img' alt=""/>*/}
                    {/*</a>*/}

                    {/*</div>*/}
                    {/*分类*/}
                    <Fenlei/>
                    <div className="clear"/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        $('.fenlei').show();
    }
}

export default Headbutt
