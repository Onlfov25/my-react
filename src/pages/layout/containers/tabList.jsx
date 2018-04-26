import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { toggleActiveKey, removeTab } from '../actions.js';

const { TabPane } = Tabs;

class TabList extends React.Component {
    constructor(props) {
        super(props)
        this.handleTabChange = this.handleTabChange.bind(this)
        this.handleOnEdit = this.handleOnEdit.bind(this)
    }

    handleTabChange(activeKey) {
        this.props.onChange(activeKey);
        hashHistory.push(activeKey);
    }

    handleOnEdit(activeKey, action) {
        if (action === 'remove') {
            this.props.onEdit(activeKey)
            hashHistory.push("home");
        }
    }

    render() {
        return (
            <Tabs className="tabList" type="editable-card" hideAdd onChange={this.handleTabChange} activeKey={this.props.activeKey} onEdit={this.handleOnEdit}>
                {this.props.panes.map((pane, index) => <TabPane  className={index === 0 ? 'indexTab' : 'no'} tab={pane.title} key={pane.key}></TabPane>)}
            </Tabs>
        )
    }
}

TabList.defaultProps = {
    panes: [],
    activeKey: '1'
}
TabList.propTypes = {
    activeKey: PropTypes.string,
    panes: PropTypes.array,
    onChange: PropTypes.func,
    OnEdit: PropTypes.func
}


const mapStateToProps = (state) => ({
    panes: state.tabList.panes,
    activeKey: state.tabList.activeKey
})
const mapDispatchToProps = (dispatch) => ({
    onChange: (activeKey) => {
        dispatch(toggleActiveKey(activeKey))
    },
    onEdit: (activeKey) => {
        dispatch(removeTab(activeKey))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TabList);