import { fireEvent, render, screen } from '@testing-library/react';
import store from '../mockedIndex';
import CreateCource from '../../components/CreateCourse/CreateCourse';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Input from '../../common/Input/input';
import * as Redux from 'react-redux';
import mockedActionCreators, {
	getAllCourses,
	setCreatedCource,
} from '../courses/mockedActionCreators';
import { post } from '../../API/apiWorker';
import { setAuthorsToList } from '../authors/mockedActionCreators';

const mockedCources = {
	title: 'NewTitleForTest',
	description: 'NewDescriptionForTest',
	duration: 123,
	authors: ['b82afc53-804d-407c-8656-b3cdfeb986f1'],
	creationDate: '00/00/0000',
	id: '12d98fbc-5789-4811-8732-64857f221155',
};

describe('Reducers tests', () => {
	test('reducer should return the initial state', async () => {
		const initialState = store.getState();
		expect(initialState).toMatchSnapshot();
	});
	// test(`CourseForm 'Create author' click button should call dispatch`, async () => {
	// 	dispatch = jest.fn();

	// 	jest.mock('../../API/apiWorker', () => {
	// 		post: jest.fn();
	// 		get: jest.fn();
	// 	});
	// 	render(
	// 		<Provider store={store}>
	// 			<CreateCource inputAuthorName={'name'} setInputAuthorName={jest.fn()} />
	// 		</Provider>
	// 	);
	// 	const container = screen.getByText('Create author');
	// 	expect(container).toMatchSnapshot();
	// 	userEvent.dblClick(container);
	// 	expect(setAuthorsToList).toHaveBeenCalled();
	// });
	test('reducer should handle SAVE_COURSE and returns new state', async () => {
		store.dispatch(setCreatedCource(mockedCources));
		mockedActionCreators({ initialList: [] }, setCreatedCource(mockedCources));
		const saveUserHandller = store.getState();
		expect(saveUserHandller).toMatchSnapshot();
	});
	test('reducer should handle GET_COURSES and returns new state', async () => {
		store.dispatch(getAllCourses([mockedCources]));
		const saveUserHandller = store.getState();
		expect(saveUserHandller).toMatchSnapshot();
	});

	test(`CourseForm 'Add author' button click should add an author to course authors list`, async () => {
		render(
			<Provider store={store}>
				<CreateCource inputAuthorName={'name'} setInputAuthorName={jest.fn()} />
			</Provider>
		);
		const oldAuthorsList = screen.findAllByTestId('AddAuthorTest');
		expect(oldAuthorsList.length).toEqual(undefined);
		const container = screen.getAllByText('Add author');
		fireEvent.click(container[0]);
		const newAuthorList = screen.getAllByTestId('AddAuthorTest');
		expect(newAuthorList.length).toEqual(1);
	});

	test(`CourseForm 'Delete author' button click should delete an author from the course list`, () => {
		render(
			<Provider store={store}>
				<CreateCource inputAuthorName={'name'} setInputAuthorName={jest.fn()} />
			</Provider>
		);

		const addContainer = screen.getAllByText('Add author');
		fireEvent.click(addContainer[0]);
		const oldAuthorsList = screen.findAllByTestId('AddAuthorTest');
		expect(oldAuthorsList.length).toEqual(undefined);
		const deleteContainer = screen.getAllByText('Delete author');
		fireEvent.click(deleteContainer[0]);
		const newAplAuthorList = screen.findAllByText('Delete author');
		expect(newAplAuthorList.length).toEqual(undefined);
	});
});
