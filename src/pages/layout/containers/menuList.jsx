import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class MenuList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClcik = this.handleClcik.bind(this)
    }

    handleClcik({item, key, keyPath}) {
        
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
    subMenus: PropTypes.array
}


const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    onClick: dispatch()
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
