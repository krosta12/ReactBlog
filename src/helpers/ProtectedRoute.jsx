import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ jwtToken, redirectPath }) {
	console.log(jwtToken);
	// // console.log(!jwtToken); //null
	// if (localStorage.getItem('token')) {
	// 	// if (jwtToken) {
	// 	return <Outlet />;
	// }
	// return <Navigate to='/login' />; //твой код

	return jwtToken ? <Outlet /> : <Navigate to={redirectPath} />;
}

export default ProtectedRoute;
