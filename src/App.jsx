import Header from './components/Header/Header';
import Cources from './components/Courses/Courses';
import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom';
import Regitration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useEffect, useState } from 'react';
import ProtectedRoute from './helpers/ProtectedRoute';
import axios from 'axios';
import getTockens from './helpers/getTockens';

function App() {
	const [jwtToken, setJwtToken] = useState(localStorage.getItem('token'));

	const [post, setPost] = useState({});

	// getTockens();
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
