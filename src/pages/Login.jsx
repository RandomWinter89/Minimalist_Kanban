import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);
	
	const login = () => {
		const isCorrectUsername = username === "guest";
		const isCorrectPassword = password === "1234";
		
		if (isCorrectUsername && isCorrectPassword) {
			authContext.setToken("1234");
			navigate("/Minimalist_Kanban/dashboard");
		}
	}
	
	return (
		<div className="w-96 my-auto">
			<h1 className="text-4xl my-3">Login to your account</h1>
			<form onSubmit={login} className="flex flex-col gap-1">
				<label className="text-xl">Email Address</label>
				<input 
					className="text-black h-12 p-3 rounded"
					type="text" 
					placeholder="Enter email" 
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<p className="text-sm italic">We&apos;ll never share your email with anyone else</p>
				
				<label className="text-xl mt-2">Password</label>
				<input
					className="text-black h-12 p-3 rounded"
					type="password"
					placeholder="Key in your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="bg-blue-500 text-lg mt-4 h-12 rounded" type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;