import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';
import InterfaceUtil from "../../../util/InterfaceUtil";

class NewHomePage2 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {

        const data = this.props.newrecom;
        const traded = this.props.traded;
        let imgs = data ? <Link to={data.url}>
            <img src={data.image} alt=""/>
        </Link> : null;
        let list = data ? data.goods_list.map((item, i) => {
            return <li key={i + item.id}>
                <Link to={item.url}>
                    <img
                        src={item.image}/>
                </Link>
                <p>{item.name}</p>
                <p className={'red'}>
                    {item.price}
                </p>
            </li>
        }) : null;
        let listtraded = traded ? traded.map((item, i) => {
            let price = item.traded_price || item.price;
            let times=InterfaceUtil.fmtDate(item.end_time);
            console.log(item)
            return <li key={item.id}>
                <p className={'bhul3tit'}>{item.goods_name}</p>
                <p className={'red'}>
                    {price}
                </p>
                <div
                    title={
                        `本次购进本品` +
                        item.goods_num + item.unit + `+`
                        + item.traded_price + `换购本品` +item.traded_goods_num+ item.unit+`活动时间`+
                         times   +`送完截止`
                    }
                    className={'bhul3Tishi'}>
                    换购信息>
                </div>
                <Link to={'/Shangpinxiangqing?&id=' + item.traded_goods_id}>
                    <img
                        src={item.goods_image}/>
                </Link>
            </li>
        }) : null;
        return (
            <div className='nhbox1'>
                <div className="nhbox3lef">
                    <div className="nhconhead">
                        <h2>
                            新品上架
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>为您定制的甄选品种</span>
                    </div>
                    <div className="nhbox3lefcon">
                        <div className="nhbox3lefcondiv">
                            {imgs}
                        </div>
                        <ul className="bhul2">
                            {list}
                        </ul>
                    </div>
                </div>
                <div className="nhbox3rig">
                    <div className="nhconhead">
                        <h2>
                            换购专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox3lefcon">
                        <ul className="bhul3">
                            {/*// <li>*/}
                            {/*<p className={'bhul3tit'}>克林名字</p>*/}
                            {/*<p className={'red'}>*/}
                            {/*会员可见*/}
                            {/*</p>*/}
                            {/*<div title={"我是提示信息"} className={'bhul3Tishi'}>*/}
                            {/*换购信息>*/}
                            {/*</div>*/}
                            {/*<Link to={''}>*/}
                            {/*<img*/}
                            {/*src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/1538304958687.png"/>*/}
                            {/*</Link>*/}
                            {/*</li>*/}
                            {listtraded}

                        </ul>
                    </div>
                </div>

            </div>
        )
    }

}

export default NewHomePage2
