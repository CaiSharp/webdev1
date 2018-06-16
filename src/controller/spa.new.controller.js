let fakeData = require('../init');

SPAFormController = (req, res) => {

    let newId = fakeData.length;
    let title = req.body.title;
    let teaser = req.body.teaser;
    let articletext = req.body.articletext;
    let author = req.body.author;
    let published = new Date();
    let image = req.body.image;

	let newArticle = {
        id: newId,
        title: title,
        teaser: teaser,
        articletext: articletext,
        author: author,
        published: published,
        image: image,
	};

	fakeData.unshift(newArticle);

	res.set('Content-Type', 'application/javascript');
	res.json({status: "done"});

};

module.exports = SPAFormController;