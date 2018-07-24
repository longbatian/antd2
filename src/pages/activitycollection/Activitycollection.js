import React from 'react';
import {Link} from 'react-router-dom';


import './components/activitycollection.css'

class Activitycollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <img src={require('../../images/activitycollection/01.png')} alt="" className="acImg"/>
            <div className="acbox">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/10.png')}/>
                </div>

                <ul className="acul">
                    <li>
                        <div className="acBig">
                            <span>¥</span>
                            <p>30</p>
                        </div>
                        <div className='acP'>
                            <span className="acLei">文本文</span>
                            <span className="acYuan">文本文本文本文本文本</span>
                        </div>
                        <p className="acUse">文本文本文本文本文本</p>
                        <p className="acTime">121212212121212</p>
                        <button>立即领取</button>
                    </li>
                    <li>
                        <div className="acBig">
                            <span>¥</span>
                            <p>30</p>
                        </div>
                        <div className='acP'>
                            <span className="acLei">文本文</span>
                            <span className="acYuan">文本文本文本文本文本</span>
                        </div>
                        <p className="acUse">文本文本文本文本文本</p>
                        <p className="acTime">121212212121212</p>
                        <button>立即领取</button>
                    </li>
                    <li>
                        <div className="acBig">
                            <span>¥</span>
                            <p>30</p>
                        </div>
                        <div className='acP'>
                            <span className="acLei">文本文</span>
                            <span className="acYuan">文本文本文本文本文本</span>
                        </div>
                        <p className="acUse">文本文本文本文本文本</p>
                        <p className="acTime">121212212121212</p>
                        <button>立即领取</button>
                    </li>
                    <li>
                        <div className="acBig">
                            <span>¥</span>
                            <p>30</p>
                        </div>
                        <div className='acP'>
                            <span className="acLei">文本文</span>
                            <span className="acYuan">文本文本文本文本文本</span>
                        </div>
                        <p className="acUse">文本文本文本文本文本</p>
                        <p className="acTime">121212212121212</p>
                        <button>立即领取</button>
                    </li>

                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg1"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox">
                <img src={require('../../images/activitycollection/04.png')} className='acImg'/>
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/05.png')}/>
                </div>
                <ul className="acUl2">
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy">立省:15515</div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>限购：<span className="colred">500he</span></p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy">立省:15515</div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>限购：<span className="colred">500he</span></p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy">立省:15515</div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>限购：<span className="colred">500he</span></p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy">立省:15515</div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>限购：<span className="colred">500he</span></p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox acbox2">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/06.png')}/>
                </div>
                <div className="acTishi">
                    <img src={require('../../images/activitycollection/07.png')}/>
                </div>
                <ul className="acUl2">
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p className="colred">效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p className="colred">效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p className="colred">效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p className="colred">效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox acbox3">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/09.png')}/>
                </div>
                <ul className="acUl2">
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy2">
                            <span>每次购买本品5个</span>
                            <span>+0.01文本文本文本文本文本文本文本文本</span>
                        </div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy2">
                            <span>每次购买本品5个</span>
                            <span>+0.01文本文本文本文本文本文本文本文本</span>
                        </div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy2">
                            <span>每次购买本品5个</span>
                            <span>+0.01文本文本文本文本文本文本文本文本</span>
                        </div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/activitycollection/05.png')}/>
                        <div className="acUl2Titmoy2">
                            <span>每次购买本品5个</span>
                            <span>+0.01文本文本文本文本文本文本文本文本</span>
                        </div>
                        <div className="acul2Con">
                            <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>
                            <p>公司公司公司公司公司</p>
                            <p>规格：232</p>
                            <p>效期：12121212121</p>
                            <p>价格：
                                <span className="acbigs colred">5000.00</span>
                                <span className="acYuan">原价：150.00</span>
                            </p>
                            <div className="acul2ConFot">
                                <div className="acul2ConFotLef">
                                    <div className="acul2ConFotLefspan">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="acul2ConFotbut">
                                    加入购物车
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
        </div>
    }
}

export default Activitycollection;
