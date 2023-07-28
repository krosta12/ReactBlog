import { render, screen } from '@testing-library/react';
import Cources from '../Courses';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../../../store/index';

describe('da', () => {
	const coursesBD = [
		{
			title: 'NEW2322',
			description: '21132dssd2',
			duration: 213,
			authors: [
				'b82afc53-804d-407c-8656-b3cdfeb986f1',
				'715de352-9124-448c-9a15-4285c1390999',
			],
			creationDate: '29/06/2023',
			id: '12d98fbc-5789-4811-8732-64857f221155',
		},
		{
			title: 'SEc112',
			description: '1edfsgfs',
			duration: 31124,
			authors: [
				'715de352-9124-448c-9a15-4285c1390999',
				'b82afc53-804d-407c-8656-b3cdfeb986f1',
			],
			creationDate: '13/07/2023',
			id: 'cc7c5455-2836-40bd-932c-e7d9e06de0b6',
		},
	];

	test('test', () => {
		render(
			<Provider store={store}>
				<Cources setPost={jest.fn()} />
			</Provider>
		);
		screen.debug();
		expect();
	});
});
