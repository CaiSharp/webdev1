// VARIABLES
let articles;

// EVENT HANDLER
document.querySelector('.list').addEventListener('click', listController);
document.querySelector('.new').addEventListener('click', newController);

// FUNCTIONS
function listController() {
	fetch('http://localhost:8000/spa_list', {
		method: 'GET',
		mode: 'cors'
	})
	.then((res) => res.json())
	.then((data) => {
		articles = data;
	})
	.then(() => {
		router.navigate('/list');
	})
}

function newController() {
	router.navigate('/new');
	document.querySelector('.add-new-article').addEventListener('submit', submitForm);
}

function submitForm(event) {
	event.preventDefault();

	fetch('http://localhost:8000/spa_new', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: this.querySelector('#title').value,
			author: this.querySelector('#author').value
		})
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	})
	.then(() => {
		listController();
	})
}

// TEMPLATES
templates.load();

let rootElement = document.querySelector('main');
let router = new Router(rootElement);

router
.register('/list', function (el) {
	let tmpl = templates.get('template-list');
	el.innerHTML = tmpl({
		title: 'All Articles',
		articles: articles
	});
})
.register('/new', function (el) {
	let tmpl = templates.get('template-new');
	el.innerHTML = tmpl({
		title: 'Add Article'
	});
});

router.start('/list');