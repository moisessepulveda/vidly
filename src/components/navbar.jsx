import React from 'react';


const Navbar = ({totalCounters}) => {
    console.log("navbar rendered");
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar <span className="badge bg-secondary">{totalCounters}</span></a>
            </div>
        </nav>
    );
}

/*
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span>{this.props.totalCounters}</span></a>
                </div>
            </nav>
        );
    }
}*/

export default Navbar;
