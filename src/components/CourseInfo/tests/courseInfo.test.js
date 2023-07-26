import { render, screen } from '@testing-library/react';
import CourseInfo from '../CourseInfo';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; //stack-overflow expect(...).toBeInTheDocument is not a function

describe('test case', () => {
	let post = {
		title: 'How to save...',
		creationDate: '24/06/2023',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ma`,
		duration: '106.06',
		id: 'cc0c5455-2836-40bd-932c-e7d9e06de0b6',
		authors: ['AuthorNameNum1', 'AuthorNameNum2'],
	};

	const renderBlock = () =>
		render(
			<BrowserRouter>
				<CourseInfo post={post} />
			</BrowserRouter>
		);

	test('Title Test', () => {
		renderBlock();
		const linkElement = screen.getByText(post.title);
		expect(linkElement).toMatchSnapshot();
	});

	test('Description Test', () => {
		renderBlock();
		const linkElement = screen.getByText(post.description);
		expect(linkElement).toMatchSnapshot();
	});

	test('Duration Test', () => {
		renderBlock();
		const durationElement = screen.getByText(/Duration: \d+\.\d+ Hours/);
		expect(durationElement.textContent).toMatchSnapshot();
	});
	test('Authors List Test', () => {
		const author = renderBlock();
		expect(author).toMatchSnapshot();
	});
	test('Course Card Created Date Test', () => {});
});
