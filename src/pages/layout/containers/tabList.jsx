import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class TabList extends React.Component {
    constructor(props) {
        super(props)
        this.handleTabChange = this.handleTabChange.bind(this)
        this.handleOnEdit = this.handleOnEdit.bind(this)
    }

    handleTabChange(activeKey) {
        this.props.onChange(activeKey);
    }
    handleOnEdit(activeKey, action) {
       this.props.onEdit(activeKey, action)
    }

    render() {
        return (
            
            <Tabs type="editable-card" hideAdd onChange={this.handleTabChange} activeKey={this.props.activeKey} onEdit={this.handleOnEdit}>
                {this.props.panes.map(pane => <TabPane tab={panel.title} key={panel.key}></TabPane>)}
            </Tabs>
        )
    }
}

TabList.defaultProps = {
    panes: []
}
TabList.propTypes = {
    activeKey: PropTypes.string,
    panes: PropTypes.array,
    onChange: PropTypes.func,
    OnEdit: PropTypes.func
}


const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    onChange: (activeKey) => {
        dispatch()
    }

})

export default TabList;