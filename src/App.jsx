import Header from './components/Header/Header';
import Cources from './components/Courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regitration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import getTockens from './helpers/getTockens';

function App() {
	const [jwtToken, setJwtToken] = useState(false);

	const [post, setPost] = useState({});

	// getTockens();
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Header isLogin={setJwtToken} token={jwtToken} />}
				>
					<Route
						path='/corces'
						element={
							<div className='App'>
								<Cources setPost={setPost} />
							</div>
						}
					/>
					<Route path='registration' element={<Regitration />} />
					<Route index element={<Login />} />

					<Route path={`courses/:id`} element={<CourseInfo post={post} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
