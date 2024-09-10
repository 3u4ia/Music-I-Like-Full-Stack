import { useNavigate } from "react-router-dom";

const LogoutPage = (props) => {
    const {setIsLoggedIn} = props;
    const navigate = useNavigate();

    const handleClick = async(event) => {
        event.preventDefault();
        setIsLoggedIn(false);
        navigate('/');
    }
    return(
        <form method="POST" className="col-md-6" onSubmit={handleClick}>
            <button type="submit" className="btn btn-danger">
                Click Me if You Want to Logout!
            </button>
        </form>
    );
}

export default LogoutPage;