require('styles/common.css');
require('styles/zhongyao/zhongyao.css');

import React from 'react';

class Zhongyao3 extends React.Component {
  render() {
    return (
      <div className='floatRight marginBottom20'>
        <div className='marginTop20 zhongyao_right'>
          {/*中药养生*/}
          <div>
            <img src={require("../../images/zhongyao/zhongyao_banner3.png")} alt=""/>
          </div>
          {/*中药养生内容*/}
          <div className='marginTop20'>
            {/*中药养生标题*/}
            <div>
              <span className='floatleft'>
                <img src={require("../../images/zhongyao/putong_title.png")} alt=""/></span>
              <span className='floatRight zhongyao_yangsheng_con_span'>查看更多>></span>
              <div className='clear'></div>
            </div>
            {/*中药养生内容*/}
            <div className='zhongyao_yangsheng_con'>
              <div className='floatleft relative'>
                <img src={require("../../images/zhongyao/putong_main_a.png")} alt="" className='zhongyao_yangsheng_con_img'/>
                <div className='zhongyao_yangsheng_con_div'>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>艾叶</span> <span  className='floatleft'>怀起</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>柏树</span> <span  className='floatleft'>枸杞</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>银柴胡段</span> <span  className='floatleft'>青叶</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>淡竹叶</span> <span  className='floatleft'>薄荷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>秦久</span> <span  className='floatleft'>白芷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>净山楂</span> <span  className='floatleft'>首乌藤</span><div className='clear'></div></p>
                </div>
              </div>
              <div className='floatleft'><img src={require("../../images/zhongyao/putong_main_b.png")} alt="" className='zhongyao_yangsheng_con_img1'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/putong_main_c.png")} alt="" className='zhongyao_yangsheng_con_img2'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/putong_main_d.png")} alt="" className='zhongyao_yangsheng_con_img2'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/putong_main_e.png")} alt="" className='zhongyao_yangsheng_con_img3'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/putong_main_f.png")} alt="" className='zhongyao_yangsheng_con_img3'/></div>
              <div className='clear'></div>
            </div>

            {/*————————————————————————————————————————————*/}
            {/*中药瓶装养生*/}
            <div className='marginTop20'>
              <img src={require("../../images/zhongyao/zhongyao_banner.png")} alt=""/>
            </div>
            {/*中药瓶装标题*/}
            <div className='marginTop10'>
              <span className='floatleft'><img src={require("../../images/zhongyao/pingzhuang_title.png")} alt=""/></span>
              <span className='floatRight zhongyao_yangsheng_con_span'>查看更多>></span>
              <div className='clear'></div>
            </div>
            {/*中药瓶装内容*/}
            <div className='zhongyao_yangsheng_con'>
              <div className='floatleft relative'>
                <img src={require("../../images/zhongyao/pingzhuang_main_a.png")} alt="" className='zhongyao_yangsheng_con_img'/>
                <div className='zhongyao_yangsheng_con_div2'>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>柏树</span> <span  className='floatleft'>枸杞</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>银柴胡段</span> <span  className='floatleft'>青叶</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>淡竹叶</span> <span  className='floatleft'>薄荷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>秦久</span> <span  className='floatleft'>白芷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>净山楂</span> <span  className='floatleft'>首乌藤</span><div className='clear'></div></p>
                </div>
              </div>
             <div className='floatleft'><img src={require("../../images/zhongyao/pingzhuang_main_b.png")} alt="" className='marginLeft2'/></div>
             <div className='floatleft'><img src={require("../../images/zhongyao/pingzhuang_main_c.png")} alt="" className='marginLeft2'/></div>
             <div className='floatleft'><img src={require("../../images/zhongyao/pingzhuang_main_d.png")} alt="" className='marginLeft2 marginTop2'/></div>
             <div className='floatleft'><img src={require("../../images/zhongyao/pingzhuang_main_e.png")} alt="" className='marginLeft2 marginTop2'/></div>
              <div className='clear'></div>
            </div>

            {/*————————————————————————————————————————————*/}
            {/*中药贵细养生*/}
            <div className='marginTop20'>
              <img src={require("../../images/zhongyao/zhongyao_banner1.png")} alt=""/>
            </div>
            {/*中药贵细标题*/}
            <div className='marginTop10'>
              <span className='floatleft'><img src={require("../../images/zhongyao/guixi_title.png")} alt=""/></span>
              <span className='floatRight zhongyao_yangsheng_con_span'>查看更多>></span>
              <div className='clear'></div>
            </div>
            {/*中药贵细内容*/}
            <div className='zhongyao_yangsheng_con'>
              <div className='floatleft relative'>
                <img src={require("../../images/zhongyao/guixi_main_a.png")} alt="" className='zhongyao_yangsheng_con_img'/>
                <div className='zhongyao_yangsheng_con_div1'>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>淡竹叶</span> <span  className='floatleft'>薄荷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>秦久</span> <span  className='floatleft'>白芷</span><div className='clear'></div></p>
                  <p className='zhongyao_yangsheng_con_p'><span className='floatleft'>净山楂</span> <span  className='floatleft'>首乌藤</span><div className='clear'></div></p>
                </div>
              </div>
              <div className='floatleft'><img src={require("../../images/zhongyao/guixi_main_b.png")} alt="" className='marginLeft2'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/guixi_main_c.png")} alt="" className='marginLeft2 marginTop2'/></div>
              <div className='floatleft'><img src={require("../../images/zhongyao/guixi_main_d.png")} alt="" className='marginLeft2 marginTop2'/></div>
              <div className='clear'></div>
            </div>

          </div>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default Zhongyao3;
