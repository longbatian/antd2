import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage2 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        const data = this.props.necessary;
        let list = data ? data.banner.map((item, i) => {
            return <div key={item.id + i}>
                <Link to={item.url}>
                    <img src={item.image} alt=""/>
                </Link>
            </div>
        }) : null;
        let rig1 = data ? <Link to={data.banner_right[0].url}>
            <img src={data.banner_right[0].image} alt=""/>
        </Link> : null;
        let rig2;
        if (data) {
            rig2 = data.banner_right[1] ? <Link to={data.banner_right[1].url}>
                <img src={data.banner_right[1].image} alt=""/>
            </Link> : null;
        }
        // let rig2 = null;
        return (
            <div className='nhbox1'>
                <div className="nhbox2lef">
                    <div className="nhconhead">
                        <h2>
                            明星产品
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>为您定制的甄选品种</span>
                    </div>
                    <div className="nhbox2lefcon">
                        <Carousel autoplay>
                            {list}
                        </Carousel>
                    </div>
                </div>
                <div className="nhbox2rig">
                    <div className="nhconhead">
                        <h2>
                            诊所专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox2lefcon">
                        {rig2}
                    </div>
                </div>
                <div className="nhbox2rig">
                    <div className="nhconhead">
                        <h2>
                            医院专区
                            <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                        </h2>
                        <span>专属你的购物指南</span>
                    </div>
                    <div className="nhbox2lefcon">
                        {rig1}
                    </div>
                </div>
            </div>
        )
    }

}

export default NewHomePage2
