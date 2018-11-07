import React from 'react';

const Header = props => {
    return (
        <div className="container" style={{marginTop:'5px'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="#">
                    <img src='./images/logo.png' style={{width:"50px", height:"70px"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="search_form">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đăng nhập</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;