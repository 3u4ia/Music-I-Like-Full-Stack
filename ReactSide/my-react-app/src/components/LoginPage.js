import {useNavigate} from "react-router-dom";
import {useState} from "react";

function LoginForm(props) {
    const {setIsLoggedIn} = props;

    const {setUserId} = props;

    const navigate = useNavigate();
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ wrongPasswordVisibility, setWrongPasswordVisibility ] = useState(false);
    const [ noUserVisibility , setNoUserVisibility ] = useState(false);

    const handleSubmit = async (event) => {


        try {
            event.preventDefault();
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password } )
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if(status === 200){
                setUserId(responseJson.id);
                console.log('Authentication successful: ', responseJson.id);
                setWrongPasswordVisibility(false);
                setNoUserVisibility(false);
                setIsLoggedIn(true);
                navigate('/');
            }
            else if(status === 401){
                 setWrongPasswordVisibility(true);
                 setNoUserVisibility(false);
                console.log("status", status, "error", responseJson);
            }
            else if(status === 400){
                console.log("status: ", status);
                setNoUserVisibility(true);
            }

        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="col-md-12 text-center">Login</h1>
                        <div className="col-md-3"></div>
                        <form method="POST" className="col-md-6" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={userName}
                                    id="username"
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pwd" value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox"/> Remember me</label>
                            </div>
                            {wrongPasswordVisibility && !noUserVisibility &&
                                <p className="text-danger">Password is incorrect</p>
                            }
                            {noUserVisibility &&
                                <p className="text-danger">No username found</p>
                            }
                            <button type="submit" className="btn btn-success">Submit</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </form>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </>
        );
}

export default LoginForm;