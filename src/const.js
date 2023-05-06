export const Texts = {
	addNewCource: 'Add new Cource',
	showCource: 'Show Cource',
	search: 'Search',
	title: 'Title',
	createCource: 'Create Cource',
	description: 'Description',
	authorName: 'Author name',
	createAuthor: 'Create author',
	addAuthor: 'Add author',
	deleteAuthor: 'Delete author',
	duration: 'Duration',
	logOut: 'Log out',
};

export const URL = 'http://localhost:4000';

const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book. It has survived 
    not only five centuries, but also the leap into electronic
    typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const mockedAuthorsList = [
	{
		id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

let ReadyInfo = mockedCoursesList;

function help(promose, name) {
	ReadyInfo.map((el, i) =>
		el.authors.map((el, index) => {
			if (el == promose) {
				ReadyInfo[i].authors[index] = name;
			}
		})
	);
}

mockedAuthorsList.map((el) => help(el.id, el.name));

export default ReadyInfo;
