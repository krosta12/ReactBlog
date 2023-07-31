import { fireEvent, render, screen } from '@testing-library/react';
import Cources from '../Courses';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../../../store/mockedIndex';
import { BrowserRouter } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import CreateCource from '../../CreateCourse/CreateCourse';
import userEvent from '@testing-library/user-event';

describe('Cources Tests', () => {
	test('Courses should display amount of CourseCard equal length of courses array', async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Cources setPost={jest.fn()} /> {/*replace jest.fn()*/}
				</Provider>
			</BrowserRouter>
		);
		const listOfCources = await screen.findAllByTestId('courceCard');
		expect(listOfCources.length).toEqual(2);
	});
	// test('Courses should display Empty container if courses array length is 0', async () => {
	// 	let isFilled;
	// 	render(
	// 		<BrowserRouter>
	// 			<Provider store={store}>
	// 				<Cources setPost={jest.fn()} /> {/*replace jest.fn()*/}
	// 			</Provider>
	// 		</BrowserRouter>
	// 	);

	// 	if (await screen.queryByTestId('courceCard')) {
	// 		isFilled = true;
	// 	}
	// 	expect(isFilled === false);
	// });
	test('s', async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Cources setPost={jest.fn()} /> {/*replace jest.fn()*/}
				</Provider>
			</BrowserRouter>
		);
		const listOfCources = await screen.findAllByTestId('CreateCourceButton');
		userEvent.click(listOfCources[0].firstChild);
		const EditComponent = await screen.findByTestId('EditTest');
		expect(EditComponent);
	});
});
