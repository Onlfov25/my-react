import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions.js';
const { addTab } = actions;

class MenuList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClcik = this.handleClcik.bind(this)
    }

    handleClcik({item, key, keyPath}) {
        console.log(item)
       this.props.onClick({key: key, title: item.props.children.props.children}) 
    }

    render() {
        const { subMenus } = this.props;
        const length = subMenus.length - 1;
        return (
            <Menu onClick={this.handleClcik}>
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
    onClick: (text) => dispatch(addTab(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
