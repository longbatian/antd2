import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';


class Gouwuche1 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {}
    }


    //全选
    quanxuan1(e) {

        var a = $('.buycar_input2').eq(0).prop('checked');
        var che = document.getElementsByClassName('buycar_input1')

        if (a == false) {
            for (var i = 0; i < che.length; i++) {

                che[i].setAttribute('checked', false);
                // $('.contain marginTop20  tishi_anniu')
                // contain marginTop20 tishi_anniu1

            }
            // if($('.car_Heji_div1_span').text())
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu1').show();
            $('.buycar_input').prop('checked', false);
            $('.buycar_input1').prop('checked', false);
            $('.buycar_input2').prop('checked', false);


            var cid = [];
            var ss = document.getElementsByClassName('car_title_div1');
            for (var i = 1; i < ss.length; i++) {
                var ss1 = ss[i].getAttribute('data');
                cid.push(ss1);
            }

            cid = JSON.stringify(cid)

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            const that = this;
            //智能采购
            $.ajax({
                url: InterfaceUtil.getUrl(2),
                type: "post",
                data: {
                    "username": username, "token": token, "cid": cid, "is_check": 0
                },
                dataType: "json",
                success: function (data) {
                    // console.log(data)
                }
            });

            cid = JSON.stringify(cid)


        } else if (a == true) {
            for (var i = 0; i < che.length; i++) {
                che[i].setAttribute('checked', true);
            }

            $('.buycar_input').prop('checked', true);
            $('.buycar_input1').prop('checked', true);
            $('.buycar_input2').prop('checked', true);

            var cid = [];
            var ss = document.getElementsByClassName('car_title_div1');
            for (var i = 1; i < ss.length; i++) {
                var ss1 = ss[i].getAttribute('data');
                cid.push(ss1);
            }

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            const that = this;
            cid = JSON.stringify(cid)
            //智能采购
            $.ajax({
                url: InterfaceUtil.getUrl(3),
                type: "post",
                data: {

                    "username": username, "token": token, "cid": cid, "is_check": 1
                },
                dataType: "json",
                success: function (data) {

                }
            });


        }
        var inp = $('.buycar_input1');
        var heji = 0;
        for (var i = 0; i < inp.length; i++) {
            var check = $('.buycar_input1').eq(i).prop('checked');
            if (check == true) {
                var xiaoji = $('.car_title_div11_xiaoji').eq(i).text();
                xiaoji = xiaoji.slice(1);
                xiaoji = parseFloat(xiaoji);
                heji = parseFloat(heji);
                heji = heji + xiaoji;
                heji = heji.toFixed(2);
                $('.car_Heji_div1_span').text("￥" + heji);
            } else {
                $('.car_Heji_div1_span').text("￥" + heji);

            }
        }
        this.showJiesuan(heji);
        $('.shangpingshuliang').text("已选择" + $('.car_content input:checked').length + "件商品");
    }

    showJiesuan(heji) {
        if (heji >= 200) {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu').show();
        } else {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu1').show();
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='container'>
                <div className='contain car_title'>
                    <div className='car_title_div1'>
                        <input type="checkbox" className='buycar_input2' onClick={(e) => {
                            this.quanxuan1(e)
                        }}/>
                        全选
                    </div>
                    <div className='car_title_div2'>
                        商品
                    </div>
                    <div className='car_title_div3'>
                        规格
                    </div>
                    <div className='car_title_div4'>
                        厂家
                    </div>
                    <div className='car_title_div5'>
                        单位
                    </div>
                    <div className='car_title_div5'>
                        件装量
                    </div>
                    <div className='car_title_div6'>
                        效期
                    </div>
                    <div className='car_title_div7'>
                        库存
                    </div>
                    <div className='car_title_div8'>
                        参与活动
                    </div>
                    <div className='car_title_div9'>
                        会员价
                    </div>
                    <div className='car_title_div10'>
                        数量
                    </div>
                    <div className='car_title_div11'>
                        小计
                    </div>
                    <div className='car_title_div12'>
                        操作
                    </div>

                    <div className='clear'></div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {

    }
}

export default Gouwuche1;
