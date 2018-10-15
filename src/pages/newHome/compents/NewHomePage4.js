import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage4 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        const data=this.props.giveup;
        let list=data?data.map((item,i)=>{
            return <li key={item.id}>
                <Link to={'/Shangpinxiangqing?&id='+item.goods_id}>
                    <img
                        src={item.image}
                        alt=""/>
                </Link>

                <div className="bhul4div">
                    <span>活动</span>
                    <p>{item.content}</p>
                </div>
                <p>{item.name}</p>
                <p>{item.min_buy}*{item.unit}</p>
                <p className="red">{item.price}</p>
            </li>
        }):null
        return (
            <div className='nhbox1'>
                <div className="nhconhead">
                    <h2>
                        超值赠送
                        <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                    </h2>
                    <span>为您定制的甄选品种</span>
                </div>
                <ul className="bhul4">
                    {list}
                </ul>
            </div>
        )
    }

}

export default NewHomePage4
