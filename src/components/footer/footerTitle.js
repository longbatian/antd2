import React from 'react';
import '../../styles/footer.css';

class FooterTitle extends React.Component {
  render() {
    return (
      <div className='container jcFooter'>
        <div className='contain'>
        <div className='jcFooter_h100'>
          <div className='jcFooter_div1 bordorRight'>
            <p className='font14 bold marginBtm0'>全正品</p>
            <p className='font12 gray'>品质保证假一赔十</p>
          </div>
          <div className='jcFooter_div2 bordorRight'>
            <p className='font14 bold marginBtm0'>免运费</p>
            <p className='font12 gray'>购物满500元</p>
          </div>
          <div className='jcFooter_div3 bordorRight'>
            <p className='font14 bold marginBtm0'>保品质</p>
            <p className='font12 gray'>层层筛选</p>
          </div>
          <div className='jcFooter_div4 bordorRight'>
            <p className='font14 bold marginBtm0'>品种全</p>
            <p className='font12 gray'>超过1万种</p>
          </div>
          <div className='jcFooter_div5'>
            <p className='font14 bold marginBtm0'>开箱验</p>
            <p className='font12 gray'>放心付款</p>
          </div>
        </div>
        </div>
        <div className='clear'></div>
      </div>
    );
  }
}


export default FooterTitle;
