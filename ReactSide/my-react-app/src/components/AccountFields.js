import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function AccountForm(props) {
    const {userId} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();




    useEffect(() => {
        const plsDoStuff = async () => {
            const response = await fetch('http://localhost:8080/account?userId=' + userId);
            //console.log("hello", response.json());
        }
        const something = plsDoStuff();

    }
    , [userId]);


    const handleAccountDetailSubmission = async (event) =>{
        try {
            event.preventDefault();
            const getResponse = await fetch('http://localhost:8080/account?userId='+userId)
            if(getResponse.status===204){
                const postResponse = await fetch('http://localhost:8080/account', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userId, firstName, lastName, address1, address2,
                                                city, state, zipCode, phoneNumber, email})

                });
                console.log("User Created new Account details", postResponse.json());

            }
            else if(getResponse.status === 200){
                const putResponse = await fetch ('http://localhost:8080/account', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userId, firstName, lastName, address1, address2,
                                                city, state, zipCode, phoneNumber, email})
                });
                console.log('User Updated Account details', putResponse.json());
            }



        } catch (e) {
            alert(`Error: ${e.message}`);
        }

    }









    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Account</h1>
                </div>
            </div>





            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-3"></div>
                    <form method="GET"  className="col-md-6" onSubmit={handleAccountDetailSubmission}>
                        <input
                            type="hidden"
                            value={userId}
                        />
                        <div className="form-group">
                            <label>First Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="FirstName"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-8">
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="LastName"
                                className="form-control"
                                id="LastName"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address line 1:</label>
                            <input
                                type="text"
                                name="Address1"
                                className="form-control"
                                id="Address1"
                                value={address1}
                                onChange={(e)=>setAddress1(e.target.value)}
                            />
                        </div>
                        <div className="from-group">
                            <label>Address line 2:</label>
                            <input
                                type="text"
                                name="Address2"
                                className="form-control"
                                id="Address2"
                                value={address2}
                                onChange={(e)=>setAddress2(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input
                                type="text"
                                name="City"
                                className="form-control"
                                id="City"
                                value={city}
                                onChange={(e)=>setCity(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>State:</label>
                            <select
                                id="state"
                                name="State"
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                            >
                                <option value="">Select state</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AS">American Samoa</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="VI">United States Virgin Islands</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="ZipCode">Zip Code:</label>
                            <input
                                type="number"
                                name="ZipCode"
                                id="ZipCode"
                                value={zipCode}
                                onChange={(e)=>setZipCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phoneNumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="checkbox">
                            <label><input type="checkbox"/>Remember me</label>
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" className="btn btn-default btn-secondary">Reset</button>

                    </form>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default AccountForm;