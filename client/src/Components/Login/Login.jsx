import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {GoogleLogin} from 'react-google-login';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

const clientId = '716114519644-a97rcavg05ls553aaoul6tgdp4jrvpia.apps.googleusercontent.com';
const onSuccess =(res)=>{
	// TODO set token from response into localStorage
	localStorage.setItem("token", res.data);
	window.location = "/";
	console.log('Success');
	refreshTokenSetup(res);
};

const onFailure =(res)=>{
	console.log('Failure');
	console.log(res);
};


//Refresh Token (nedded for google login)

export const refreshTokenSetup = (res) => {
	// Timing to renew access token
	let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
	const refreshToken = async () => {
	  const newAuthRes = await res.reloadAuthResponse();
	  refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
	  console.log('newAuthRes:', newAuthRes);
	  // saveUserToken(newAuthRes.access_token);  <-- save new token
	  localStorage.setItem('authToken', newAuthRes.id_token);
  
	  // Setup the other timer after the first one
	  setTimeout(refreshToken, refreshTiming);
	};
  
	// Setup first refresh timer
	setTimeout(refreshToken, refreshTiming);
  };





const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://flitrr.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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


	//Captcha 
	const handleCaptcha = (value) => {
		// const body = {
		// 	secret:"6LdtMt0gAAAAAH0Z8RZkq31x-ZAA5GkNl2Ag7qps",
		// 	response:value
		// }
		
		// axios.post('https://www.google.com/recaptcha/api/siteverify', body)
		// .then((res) => {
		// 	console.log(res);
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });
	}

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}

						
						<GoogleReCaptchaProvider reCaptchaKey="6LdtMt0gAAAAAH0Z8RZkq31x-ZAA5GkNl2Ag7qps">
							<GoogleReCaptcha onVerify={handleCaptcha}></GoogleReCaptcha>
						</GoogleReCaptchaProvider>



						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					
						<div>
							<GoogleLogin
							clientId= {clientId}
							buttonText="Sign in with Google"
							onSuccess={onSuccess}
							onFailure={onFailure}
							cookiePolicy={'single_host_origin'}
							style={{marginTop:'100px'}}
							isSignedIn={true}
							/>
						</div>


					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;