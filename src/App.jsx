import { useState } from 'react';
import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Cources from './components/Courses/Courses';
import Regitration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
	const [jwtToken, setJwtToken] = useState(localStorage.getItem('token'));

	const [post, setPost] = useState({});
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<ProtectedRoute jwtToken={false} redirectPath='/corces' />}
				/>
				<Route
					path='/corces'
					element={
						<ProtectedRoute jwtToken={jwtToken} redirectPath={'/login'} />
					}
				>
					<Route
						path='*'
						element={<Header isLogin={setJwtToken} token={jwtToken} />}
					>
						<Route
							index
							element={
								<div className='App'>
									<Cources setPost={setPost} />
								</div>
							}
						/>
						<Route path={`courses/:id`} element={<CourseInfo post={post} />} />
					</Route>
				</Route>
				<Route
					path='/'
					element={<Header isLogin={setJwtToken} token={jwtToken} />}
				>
					<Route path='/registration' element={<Regitration />} />
					<Route path='/login' element={<Login setJwtToken={setJwtToken} />} />
				</Route>
				<Route
					path='*'
					element={<ProtectedRoute jwtToken={false} redirectPath='/corces' />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
