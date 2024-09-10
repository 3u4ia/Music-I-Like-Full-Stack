import {Link, Outlet} from "react-router-dom";
import Logo from "../Images/Logo.png";
import {useEffect} from "react";

const Layout = (props) => {
    const {isLoggedIn} = props;
    const {userId} = props;


    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/"><img src={Logo} style={{width: 30}} alt="logo"/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            {!isLoggedIn &&
                                <li><Link to="/registration">Register an account</Link></li>
                            }
                            {isLoggedIn &&
                                <li><Link to="/accountFields">Account</Link></li>
                            }

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {isLoggedIn &&
                                <li><Link to="/logout">Logout</Link></li>

                            }
                            {!isLoggedIn &&
                                <li>
                                    <Link to="/loginPage" ><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;