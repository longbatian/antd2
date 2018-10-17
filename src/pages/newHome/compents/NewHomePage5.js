import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage5 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；

    }


    render() {
        const data = this.props.hierarchy;
        let list = data ? data.map((item, i) => {
            let arrys = item.goods_list.map((it, j) => {
                if (j < 4) {
                    return <li key={it.id}>
                        <Link to={'/Shangpinxiangqing?&id='+it.id}>
                            <img
                                src={it.image}
                                alt=""/>
                        </Link>
                        <div className="nhboxli4rig">
                            <p>{it.name}</p>
                            <p>{it.standard}</p>
                            <p className={'red'}>{it.price}</p>
                        </div>
                    </li>
                }

            });
            return <div className='nhbox1' key={i}>
                <div className="nhconhead">
                    <h2>
                        {item.name}
                        <img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>
                    </h2>
                    <span>为您定制的甄选品种</span>
                </div>
                <div className="nhboxcon3">
                    <div className="nhboxcon3lef">
                        <Link to={item.url}>
                            <img src={item.image} alt=""/>
                        </Link>

                    </div>
                    <ul className="nhboxul4">
                        {arrys}
                    </ul>
                </div>
            </div>
        }) : null;
        return (
            <div>
                {list}
                {/*<div className='nhbox1'>*/}
                {/*<div className="nhconhead">*/}
                {/*<h2>*/}
                {/*当季热销*/}
                {/*<img src="http://www.scjuchuang.com/images/antd/huiyuanzongxin4.png" alt=""/>*/}
                {/*</h2>*/}
                {/*<span>为您定制的甄选品种</span>*/}
                {/*</div>*/}
                {/*<div className="nhboxcon3">*/}
                {/*<div className="nhboxcon3lef"></div>*/}
                {/*<ul className="nhboxul4">*/}
                {/*<li>*/}
                {/*<img*/}
                {/*src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"*/}
                {/*alt=""/>*/}
                {/*<div className="nhboxli4rig">*/}
                {/*<p>名称</p>*/}
                {/*<p>名称</p>*/}
                {/*<p className={'red'}>会员可见</p>*/}
                {/*</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<img*/}
                {/*src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"*/}
                {/*alt=""/>*/}
                {/*<div className="nhboxli4rig">*/}
                {/*<p>名称</p>*/}
                {/*<p>名称</p>*/}
                {/*<p className={'red'}>会员可见</p>*/}
                {/*</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<img*/}
                {/*src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"*/}
                {/*alt=""/>*/}
                {/*<div className="nhboxli4rig">*/}
                {/*<p>名称</p>*/}
                {/*<p>名称</p>*/}
                {/*<p className={'red'}>会员可见</p>*/}
                {/*</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<img*/}
                {/*src="https://public-scjuchuang.oss-cn-shenzhen.aliyuncs.com/image/pl593fc1692bf5d.jpg"*/}
                {/*alt=""/>*/}
                {/*<div className="nhboxli4rig">*/}
                {/*<p>名称</p>*/}
                {/*<p>名称</p>*/}
                {/*<p className={'red'}>会员可见</p>*/}
                {/*</div>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}

            </div>

        )
    }

}

export default NewHomePage5
