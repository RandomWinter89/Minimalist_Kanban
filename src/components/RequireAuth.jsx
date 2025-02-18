import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth( { children } ) {
	const token = useContext(AuthContext).token;
	
	if (!token) {
		return <Navigate to="/Minimalist_Kanban" replace />;
	}
	
	return children;
}