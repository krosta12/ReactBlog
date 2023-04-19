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
					element={<ProtectedRoute jwtToken={false} redirectPath='/courses' />}
				/>
				<Route
					path='/courses'
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
					</Route>
				</Route>
				<Route
					path={`/courses/:id=${post.id}`}
					element={<CourseInfo post={post} />}
				/>
				{/*  */}
				<Route
					path='/'
					element={<Header isLogin={setJwtToken} token={jwtToken} />}
				>
					<Route path='/registration' element={<Regitration />} />
					<Route path='/login' element={<Login setJwtToken={setJwtToken} />} />
				</Route>
				<Route
					path='*'
					element={<ProtectedRoute jwtToken={false} redirectPath='/courses' />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
