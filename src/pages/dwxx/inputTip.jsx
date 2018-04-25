import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Icon, Input } from 'antd';

class InputTip extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <Tooltip  defaultVisible={true} title={<span><Icon  style={{color: 'red'}} type="exclamation-circle"/>{this.props.title}</span>}>
		               <Icon style={{fontSize: '20px', position: 'absolute',top: '2px', right: '-22px', color: 'red'}} type="exclamation-circle" />
               </Tooltip>
        )
    }
}

InputTip.propTypes = {
	title: PropTypes.string
}
InputTip.defaultProps = {
	title: '错误'
}
export default InputTip;