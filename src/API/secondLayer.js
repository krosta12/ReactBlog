import { get, post, _delete } from './apiWorker';

export const getAllAuthorsSecondLayer = () => get('authors/all');

export const getUserMeSecondLayer = () => get('/users/me');

export const getAllCoursesSecondLayer = () => get('/courses/all');

export const postAuthorAddSecondLayer = (payload) =>
	post('authors/add/', payload);

export const postLoginSecondLayer = (payload) => post('/login', payload);

export const postCoursesAddSecondLayer = (payload) =>
	post('/courses/add', payload);

export const postRegisterSecondLayer = (payload) => post('/register', payload);

export const deleteSecondLayer = (payload) => _delete(`/courses/${payload}`);

export const deleteLogOutSecondLayer = (payload) => _delete('/logout', payload);
