import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SaveUser } from './store/user/actionCreators';
import { useDispatch } from 'react-redux';
import { get } from './API/apiWorker';

import Header from './components/Header/Header';
import Cources from './components/Courses/Courses';
import Regitration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

import ProtectedRoute from './helpers/ProtectedRoute';
import { UserGetter } from './store/asyncAPI/ReduxAsyncRequests';

function App() {
	const dispatch = useDispatch();

	const [jwtToken, setJwtToken] = useState(localStorage.getItem('token'));

	dispatch(UserGetter());

	const [post, setPost] = useState({});
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Header isLogin={setJwtToken} token={jwtToken} />}>
					<Route
						path='/'
						element={
							<ProtectedRoute jwtToken={false} redirectPath='/courses' />
						}
					/>
					<Route
						path='/courses'
						element={
							<ProtectedRoute jwtToken={jwtToken} redirectPath={'/login'} />
						}
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
					<Route
						path={`/courses/:id=${post.id}`}
						element={<CourseInfo post={post} />}
					/>
					{/* fix protected Rote! */}
					<Route path='/registration' element={<Regitration />} />
					<Route path='/login' element={<Login setJwtToken={setJwtToken} />} />

					<Route
						path='*'
						element={
							<ProtectedRoute jwtToken={false} redirectPath='/courses' />
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
