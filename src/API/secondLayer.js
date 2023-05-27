import { get, post, _delete } from './apiWorker';

export const protectedGetAllAuthors = () => get('authors/all');

export const protectedGetUserMe = () => get('/users/me');

export const protectedGetAllCourses = () => get('/courses/all');

export const protectedPostAuthorAdd = (inputDate) =>
	post('authors/add/', inputDate);

export const protectedPostLogin = (inputDate) => post('/login', inputDate);

export const protectedPostCoursesAdd = (inputDate) =>
	post('/courses/add', inputDate);

export const protectedPostRegister = (inputDate) =>
	post('/register', inputDate);

export const protectedDelete = (inputDate) => _delete(`/courses/${inputDate}`);

export const protectedDeleteLogOut = (inputDate) =>
	_delete('/logout', inputDate);
