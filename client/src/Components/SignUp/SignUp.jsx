import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import jwt_decode from "jwt-decode";



const SignUp = () => {

	// Setting up variables.
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	

	//Do not pass CP to the back end.
	const [data, setData] = useState({
		fullName: "",
		email: "",
        phoneNumber:"",
		password: "",
	});
	
	// Storing the user.
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	// Submiting the form.
	const handleSubmit = async (e) => {
		e.preventDefault();

		if(data.password !== confirmPassword){
			setError("Passwords do not match");
			console.log(data.password);
			console.log(confirmPassword);
			return;
		}
		try {
			const url = "http://localhost:8000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	// Captcha 
	function handleOnChange(value) {
		console.log("Captcha value:", value);
	  }
	
	// Gmail authenthication. 
	  function handleCallbackResponse(response){
			console.log( "Encoded JWT ID token" + response.credential);
			var userObject = jwt_decode(response.credential);
			console.log(userObject);
			setUser(userObject);
	  }

	  useEffect(() => {
		
	  /*global google*/

	  google.accounts.id.initialize({
		client_id:"223704466325-2a0hlhdg7gaqeb0grpl36udrb75hq9pr.apps.googleusercontent.com",
		callback: handleCallbackResponse

	  })
		google.accounts.id.renderButton(
			document.getElementById("singInDiv"),
			{theme: "outline", size:"large"}
		)
	  }, [])
	
	  //If we have no user: sign in button
	  // if we have user: show the log out 
	 

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create an account</h1>
						<input
							type="text"
							placeholder="Full Name"
							name="fullName"
							onChange={handleChange}
							value={data.fullName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Phone number"
							name="phoneNumber"
							onChange={handleChange}
							value={data.phoneNumber}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>

						<input
							type="password"
							placeholder="Confirm password"
							name="confirmPassword"
							onChange={p => setConfirmPassword(p.currentTarget.value)}
							value={confirmPassword}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}

						or

						<div id="singInDiv">
						</div>
						
						
						<ReCAPTCHA style={{marginTop:'15px'}}
							sitekey="6LfN84sgAAAAACQ3yQIavTYVBV_zuXcmVKTuLaBQ"
							onChange={handleOnChange}
						/>,
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

