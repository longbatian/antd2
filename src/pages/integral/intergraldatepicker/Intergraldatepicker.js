import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';

import './components/intergraldatepicker.css';


class ComInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <div className="ipd">
                <div className="ipdHead">
                    <div className="ipdHeadLef">

                    </div>
                    <div className="ipdHeadRig">

                    </div>
                </div>
            </div>
        </div>
    }
}

export default ComInfoPage;
