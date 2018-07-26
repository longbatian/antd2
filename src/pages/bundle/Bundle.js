import React from 'react';
import {Link} from 'react-router-dom';


import '../../styles/newjuchuang.css'

class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <img src={require('../../images/redemption/01.png')} className='rdImg' alt=""/>
            <div className="bdbox">
                <ul className='bdboxul'>
                    <li>
                        <div className="bdboxlef">
                            <img src={require('../../images/redemption/01.png')} className='rdImg'/>
                        </div>
                        <div className="bdboxrig">
                            <div className="bdboxrigTit">
                                <span>特惠套餐</span>
                                <h3>3简装仅需dwdwd元</h3>
                            </div>
                            <div className="bdliConBox">
                                <div className="bdliCon">
                                    <span className="bd_bg1"/>
                                    <span className="bdnames">感冒颗粒</span>
                                    <span className="bdnum">255656</span>
                                    <span className="bdchang">厂家厂家厂家厂家厂家</span>
                                    <span className="bdczd">15he</span>
                                    <span className="bdmoy">￥6.50</span>
                                </div>
                                <div className="bdliCon">
                                    <span className="bd_bg1"/>
                                    <span className="bdnames">感冒颗粒</span>
                                    <span className="bdnum">255656</span>
                                    <span className="bdchang">厂家厂家厂家厂家厂家</span>
                                    <span className="bdczd">15he</span>
                                    <span className="bdmoy">￥6.50</span>
                                </div>
                                <div className="bdliCon">
                                    <span className="bd_bg1"/>
                                    <span className="bdnames">感冒颗粒</span>
                                    <span className="bdnum">255656</span>
                                    <span className="bdchang">厂家厂家厂家厂家厂家</span>
                                    <span className="bdczd">15he</span>
                                    <span className="bdmoy">￥6.50</span>
                                </div>
                                <div className="bdliCon">
                                    <span className="bd_bg1"/>
                                    <span className="bdnames">感冒颗粒</span>
                                    <span className="bdnum">255656</span>
                                    <span className="bdchang">厂家厂家厂家厂家厂家</span>
                                    <span className="bdczd">15he</span>
                                    <span className="bdmoy">￥6.50</span>
                                </div>
                                <div className="bdliCon">
                                    <span className="bd_bg1"/>
                                    <span className="bdnames">感冒颗粒</span>
                                    <span className="bdnum">255656</span>
                                    <span className="bdchang">厂家厂家厂家厂家厂家</span>
                                    <span className="bdczd">15he</span>
                                    <span className="bdmoy">￥6.50</span>
                                </div>

                            </div>
                            <div className="bdliFot">
                                <div className="bdliFotlef">
                                    <span className="bd_big">￥356.00</span>
                                    <span className="bd_hen">￥356.00</span>
                                </div>
                                <div className="bdliFotrig">
                                    <div className="bdliFotrigInputBox">
                                        <div className="bdliFotrigInputBoxRig">
                                            <span>+</span>
                                            <span>-</span>
                                        </div>
                                        <input type="text"/>
                                    </div>
                                    <div className="bdliFotrigBut">
                                        加入购物车
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }

}
export default Bundle