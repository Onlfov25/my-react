import React from 'react';
import { connect } from 'react-redux';
import TopNav from './containers/topNav.jsx';
import TabList from './containers/tabList.jsx';

import './index.less';

class Layout extends React.Component {
    constructor(props) {
        super(props)
      
     
    }

    render() {
        return (
            <div>
                <TopNav />
                <TabList />
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.userinfo.name,
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Layout);