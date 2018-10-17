import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

class NewHomePage6 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            isTrue: true
        }
    }
    handclick(){
        this.setState({
            isTrue:!this.state.isTrue
        })
    }

    render() {
        const data = this.props.produce;
        let list = data ? data.map((item, i) => {
            let arrys = item.goods_list.map((it, j) => {
                return <div className="nhul5conli6">
                    <Link to={'/Shangpinxiangqing?&id=' + it.id}>
                        <img
                            src={it.image}
                            title={it.name}
                            alt=""/>
                    </Link>
                    <p>{it.name}</p>
                    <p className={'red'}>{it.price}</p>
                </div>
            })
            return <li key={item.produce_id}>
                <div className="nhul5Tit">
                    <Link to={''}>
                        查看全部
                    </Link>
                    <img
                        src={item.image}/>
                </div>
                <div className="nhul5con">
                    {arrys}
                </div>
            </li>
        }) : null;
        let layer = this.state.isTrue ? <div className="footlayer">
                <Link to={'/Lingqu'}>
                    <img
                        className={'footlayerimg1'}
                        src={'http://www.scjuchuang.com/images/antd/003.png'} alt=""/>
                </Link>

            <div
                className={'footlayerimg2'}
            >
                <img
                    onClick={()=>this.handclick()}
                    src={'http://www.scjuchuang.com/images/antd/002.png'} alt=""/>
            </div>
        </div> : <div className="riglayr">
            <img
                onClick={()=>this.handclick()}
                src={'http://www.scjuchuang.com/images/antd/001.png'} alt=""/>
        </div>
        return (
            <div className='nhbox1'>
                <div className="nhhead">
                    <h2>厂家推荐</h2>
                    <p>品牌厂家,优质推荐</p>
                </div>
                <ul className="nhul5">
                    {list}
                </ul>
                {layer}
            </div>
        )
    }

}

export default NewHomePage6
