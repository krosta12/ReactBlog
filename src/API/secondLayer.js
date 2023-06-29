import { get, post, _delete, put } from './apiWorker';

export const allAuthorsGetter = () => get('authors/all');

export const userMeGetter = () => get('/users/me');

export const allCoursesGetter = () => get('/courses/all');

export const authorAdd = (inputDate) => post('authors/add/', inputDate);

export const login = (inputDate) => post('/login', inputDate);

export const coursesAdd = (inputDate) => post('/courses/add', inputDate);

export const registration = (inputDate) => post('/register', inputDate);

export const deleteCourse = (inputDate) => _delete(`/courses/${inputDate}`);

export const logOut = (inputDate) => _delete('/logout', inputDate);

export const getCourseById = (id) => get(`/courses/${id}`);

export const updateCouse = (post, id) => put('/courses', post, id);
