import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Home extends React.Component {
	static contextTypes = {
    	store: PropTypes.object
  }
	constructor(props) {
		super(props)
		this.handleOnClick = this.handleOnClick.bind(this)
	}

   handleOnClick() {
   	 	this.props.submit();
   	 	
   }
	render() {
		 const props = this.props;
	    const { store } = this.context;
	    const state = store.getState();
		return (
             <div style={{width: '100px', height: '100px'}}>
               
                 <button type="button" onClick={this.handleOnClick} >提交</button>
                 
             </div>
			)
	}


}
const  mapStateToProps = (state) => {
	return {
		name: state.RootReducer.name
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		submit: () => {dispatch(update())}
	}
}

const update = () => {
	return {
		type: 'UPATE_THEME_NAME',
		payload: 'hello'
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);