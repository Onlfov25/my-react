import React from 'react';
import { connect } from 'react-redux';
import TopNav from './topNav.jsx';
import TabList from './tabList.jsx';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            panes: []
        }
    }

    render() {
        return (
            <div>
                <TopNav />
                <TabList panes={this.state.panes}/>
                {this.props.children}
                <span>{this.props.name}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.userinfo.name
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Layout);