import { Provider } from 'react-redux';
import store from '../../../store/mockedIndex';
import Header from '../Header';
import { findByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

test('nameOfTest', async () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Header isLogin={jest.fn()} token={'jwtToken'} />
			</BrowserRouter>
		</Provider>
	);

	const nameBlock = await screen.findByTestId('nameTest');
	expect(nameBlock).toMatchSnapshot();
});
