import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Report from "./Report";

const FRMS = () => {
	return (
		<Routes>
			<Route index element={<Navigate to="dashboard" replace />} />
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="report" element={<Report />} />
		</Routes>
	);
};

export default FRMS;
