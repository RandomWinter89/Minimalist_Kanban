import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const authContext = useContext(AuthContext);
	const token = useContext(AuthContext).token;

    const HandleLogout = () => {
        authContext.setToken(null);
    }
	
	return (
		<>
			<div className="flex justify-between w-full p-4 border-b-2"> 
				<Link to="/Minimalist_Kanban" className="p-2 font-bold rounded hover:bg-orange-500">Minimalist Kanban</Link>
				
				<div className="flex gap-2">
					{token && <Link className="p-2 font-bold rounded hover:bg-orange-500" to="/Minimalist_Kanban/dashboard">dashboard</Link>}
					{!token && <Link className="p-2 font-bold rounded hover:bg-orange-500" to="/Minimalist_Kanban/login">login</Link>}
					{token && <button className="p-2 font-bold rounded hover:bg-orange-500" onClick={HandleLogout}>Logout</button>}
				</div>
			</div>
			<Outlet/>
		</>
	);
}

export default Navbar;