import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ jwtToken, redirectPath }) {
	return jwtToken ? <Outlet /> : <Navigate to={redirectPath} />;
}

export default ProtectedRoute;
