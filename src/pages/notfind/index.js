import React from 'react';
import { Link } from 'react-router';

class Notfind extends React.Component {

    render() {
        return (
            <div>
                <h2>404</h2>  
                <Link to="/">回到首页</Link>
            </div>
        )
    }
}
export default Notfind;