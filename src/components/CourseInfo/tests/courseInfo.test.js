import { render, screen } from '@testing-library/react';
import CourseInfo from '../CourseInfo';
import { BrowserRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import { title } from 'process';
import '@testing-library/jest-dom/extend-expect'; //stack-overflow expect(...).toBeInTheDocument is not a function

describe('test case', () => {
	let post = {};
	beforeEach(() => {
		post.title = Math.random().toString();
		post.creationDate = `${Math.random()}/${Math.random()}/${Math.random()}`;
		post.description = Math.random().toString();
		post.duration = Math.random().toFixed(2);
		post.id = v4();
		post.authors = [
			Math.random().toFixed(3).toString(),
			Math.random().toFixed(3).toString(),
		];
	});

	test('Title Test', () => {
		render(
			<BrowserRouter>
				<CourseInfo
					post={{
						authors: post.authors,
						creationDate: post.creationDate,
						description: post.description,
						duration: post.duration,
						id: post.id,
						title: post.title,
					}}
				/>
			</BrowserRouter>
		);
		const linkElement = screen.getByText(post.title);
		expect(linkElement).toBeInTheDocument;
	});

	test('Description Test', () => {
		render(
			<BrowserRouter>
				<CourseInfo
					post={{
						authors: post.authors,
						creationDate: post.creationDate,
						description: post.description,
						duration: post.duration,
						id: post.id,
						title: post.title,
					}}
				/>
			</BrowserRouter>
		);
		const linkElement = screen.getByText(post.description);
		expect(linkElement).toBeInTheDocument;
	});

	test('Title Test', () => {
		render(
			<BrowserRouter>
				<CourseInfo
					post={{
						authors: post.authors,
						creationDate: post.creationDate,
						description: post.description,
						duration: post.duration,
						id: post.id,
						title: post.title,
					}}
				/>
			</BrowserRouter>
		);
		const linkElement = screen.getByText(post.title);
		expect(linkElement).toBeInTheDocument;
	});

	test('Duration Test', () => {
		render(
			<BrowserRouter>
				<CourseInfo
					post={{
						authors: post.authors,
						creationDate: post.creationDate,
						description: post.description,
						duration: post.duration,
						id: post.id,
						title: post.title,
					}}
				/>
			</BrowserRouter>
		);
		const durationElement = screen.getByText(/Duration: \d+\.\d+ Hours/);
		expect(durationElement.textContent).toEqual(
			`Duration: ${post.duration} Hours`
		);
	});
	test('Authors List Test', () => {
		render(
			<BrowserRouter>
				<CourseInfo
					post={{
						authors: post.authors,
						creationDate: post.creationDate,
						description: post.description,
						duration: post.duration,
						id: post.id,
						title: post.title,
					}}
				/>
			</BrowserRouter>
		);
		const author = screen.getByText(post.authors[0]);
		expect(author).toBeInTheDocument();
	});
});
