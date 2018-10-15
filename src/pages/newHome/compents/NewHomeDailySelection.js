import React from 'react';
import {Link} from 'react-router-dom';

class NewHomeDailySelection extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        const data=this.props.dayrecom;
        let list=data?data.map((item,i)=>{
            return<li key={i}>
                <Link to={item.url}>
                    <img
                        src={item.image}
                        alt=""/>
                </Link>

            </li>
        }):null;
        return (
            <div className='nhbox1'>
                <div className="nhconhead">
                    <h2>
                        每日精选
                        <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                    </h2>
                    <span>为您定制的甄选品种</span>
                </div>
                <ul className="bhul1">
                    {list}

                </ul>
            </div>
        )
    }

}

export default NewHomeDailySelection
