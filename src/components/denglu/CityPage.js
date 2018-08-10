import React,{Component} from 'react';
import $ from 'jquery';
import InterfaceUtil from '../../util/InterfaceUtil';




class CityPage extends Component{
  constructor(props) {
    super(props);
    this.json=[];
      this.index={
      provinceIndex: -1,
        cityIndex: -1
    };
    this.state = {
      json:[],
      index:{
        provinceIndex: -1,
        cityIndex: -1
      }
    }

  }
  componentDidMount(){
    // $(function () {
    // console.log(this.state.index)
    var _this=this;
      $.ajax({
        url:InterfaceUtil.getUrl(15),
        type:'post',
        dataType:'json',
        async:false,
        data:InterfaceUtil.addTime({}),
        beforeSend:function(xhr){
        },
        success:function(data,textStatus,jqXHR){

          _this.setState({
            json:data.data,
          })
        }
      })
    // })
  }
  provinceOption(){
    return this.state.json.map(function(array, index){
      return (<option key={index} data-index={index} id={array.Id}>{array.name}</option>);
    });
  }
  cityOption(){
    if(this.state.index.provinceIndex == -1){
      return false;
    }else{
      return this.state.json[this.state.index.provinceIndex].next.map(function(array, index){
        return (<option key={index} data-index={index} id={array.Id}>{array.name}</option>);
      });
    }
  }
  countyOption(){
    if(this.state.index.cityIndex == -1){
      return false;
    }else{
      return this.state.json[this.state.index.provinceIndex].next[this.state.index.cityIndex].next.map(function(array, index){
        return (<option key={index} data-index={index} id={array.Id}>{array.name}</option>);
      });
    }
  }

  getInitialState(){
    return ({
      city: this.cityOption(),
      county: this.countyOption()
    });
  }
  provinceChange(event){
    var e = event.target;
    this.state.index.provinceIndex = e.options[e.selectedIndex].getAttribute("data-index");
    this.state.index.cityIndex = -1;
    this.setState({
      city: this.cityOption(),
      county: this.countyOption()
    });
    this.refs.city.value = "-1";
    this.refs.county.value = "-1";
  }
  cityChange(event){
    var e = event.target;
    this.state.index.cityIndex = e.options[e.selectedIndex].getAttribute("data-index");
    this.setState({
      county: this.countyOption()
    });
    this.refs.county.value = "-1";
  }
  render() {
    return (
      <span className="relative marginLeft5 sanji">
                    <select name={this.props.provinceName ? this.props.provinceName : "province"} style={this.style}
                            onChange={this.provinceChange.bind(this)} className="province">
                        <option key="-1" value="-1" data-index="-1">省份</option>
                      {this.provinceOption()}
                    </select>
                    <select name={this.props.cityName ? this.props.cityName : "city"} style={this.style}
                            onChange={this.cityChange.bind(this)} ref="city" className="city">
                        <option key="-1" value="-1" data-index="-1">地级市</option>
                      {this.state.city}
                    </select>
                    <select name={this.props.countyName ? this.props.countyName : "county"}
                            style={this.style} ref="county" className="county">
                        <option key="-1" value="-1" data-index="-1">市、县级市</option>
                      {this.state.county}
                    </select>
            <span className='red1 font18 fontWeight xingxing1'>*</span>
            <span className='red1 font14  tishi4 dw'></span>
                </span>
    );
  }
}
export default CityPage;
