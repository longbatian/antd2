import React from 'react';
import $ from 'jquery';
import {Link, Redirect, withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Modal, Carousel} from 'antd';
import Footer from '../footer'; //尾部
import Headcon from '../../components/header/Headcon';
import HeaderTop from '../../components/header/HeadTop';
import NewHeadBut from './compents/NewHeadBut'
import NewLunboRigPage from './compents/NewLunboRigPage'
import NewHomeDailySelection from './compents/NewHomeDailySelection'
import NewHomePage2 from './compents/NewHomePage2'
import NewHomePage3 from './compents/NewHomePage3'
import NewHomePage4 from './compents/NewHomePage4'
import NewHomePage5 from './compents/NewHomePage5'
import NewHomePage6 from './compents/NewHomePage6'

class NewHomePage extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            banner: null,
            spcarea: null,
            spcadv: null,
            dayrecom:null,
            necessary:null,
            newrecom:null,
            traded:null,
            giveup:null,
            hierarchy:null,
            produce:null,
        }

    }

    componentDidMount() {
        let user_id = CoojiePage.getCoojie('user_id');
        let token = CoojiePage.getCoojie('token');
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(79),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: user_id,
                token: token,
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    data = data.data;
                    _this.setState({
                        banner: data.banner,
                        spcarea: data.spcarea,
                        adv: data.adv,
                        spcadv: data.spcadv,

                    })
                }
            }
        })
        $.ajax({
            url: InterfaceUtil.getUrl(80),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: user_id,
                token: token,
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    data=data.data;
                    _this.setState({
                        dayrecom:data.dayrecom,
                        necessary:data.necessary,
                        newrecom:data.newrecom,
                        traded:data.traded,
                        giveup:data.giveup,
                    })
                }
            }
        })
        $.ajax({
            url: InterfaceUtil.getUrl(81),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: user_id,
                token: token,
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    data=data.data;
                    _this.setState({
                        hierarchy:data.hierarchy,
                        produce:data.produce,
                    })
                }
            }
        })
    }

    render() {
        const data = this.state;
        let banner = data.banner ? data.banner.map((item, i) => {
            return <div key={i}>
                <Link to={item.url}>
                    <img src={item.image} alt=""/>
                </Link>
            </div>
        }) : null;
        let spcarea = data.spcarea ? data.spcarea.map((item, i) => {
            if (i < 3) {
                return <Link key={i} to={item.url}>
                    <img src={item.image} alt=""/>
                </Link>
            }
        }) : null;
        // let spcadv
        let spcadv = data.spcadv ? <Link to={data.spcadv[0].url}>
            <img src={data.spcadv[0].image}/>
        </Link> : null;
        return <div>
            <div className='container' id='header'>
                <HeaderTop/>
                <Headcon/>
                <NewHeadBut/>
            </div>
            <div className="nhlon">
                <div className="nllbimgbox">
                    <div className="nllbimgboxcarousel">
                        <Carousel autoplay>
                            {banner}
                        </Carousel>
                        <NewLunboRigPage {...data.adv}/>
                    </div>

                </div>
                <div className="nhlunbox">
                    <div className="nhlunfot">
                        {spcarea}
                    </div>
                </div>
            </div>
            <div className="nhimg1">
                {spcadv}
            </div>
            <NewHomeDailySelection dayrecom={data.dayrecom}/>
            <NewHomePage2 necessary={data.necessary}/>
            <NewHomePage3 newrecom={data.newrecom} traded={data.traded}/>
            <NewHomePage4 giveup={data.giveup}/>
            <NewHomePage5 hierarchy={data.hierarchy}/>
            <NewHomePage6 produce={data.produce}/>
            <Footer/>
        </div>
    }
}

export default withRouter(NewHomePage)
