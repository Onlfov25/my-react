import React from 'react';
import { Menu } from 'antd';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTab } from '../actions.js';

class MenuList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick({item, key, keyPath}) {
        // hashHistory.push(key);
       this.props.onClick({key: key, title: item.props.children.props.children}) 
    }

    render() {
        const { subMenus } = this.props;
        const length = subMenus.length - 1;
        return (
            <Menu onClick={this.handleClick}>
                {subMenus.map(subMenu => (
                        <Menu.Item key={subMenu.url}>
                            <Link to={subMenu.url}>{subMenu.title}</Link>
                        </Menu.Item>
                )
                )} 
            </Menu>
        )
    }
}

MenuList.defaultProps = {
    subMenus: []
}
MenuList.propTypes = {
    subMenus: PropTypes.array,
    onClick: PropTypes.func
}


const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    onClick: (obj) => dispatch(addTab(obj))
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
