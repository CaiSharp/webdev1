const fakeData = require('../init');

//ADD NEW ARTICLE && ADD TO FAKE DATA STRUCTURE
let addArticleController = (req,res) => {

  let newId = fakeData.length;
  let title = req.body.title;
  let teaser = req.body.teaser;
  let articletext = req.body.articletext;
  let author = req.body.author;
  let published = new Date();
  let image = req.body.image;
  
  newArticle = {
    id: newId,
    title: title,
    teaser: teaser,
    articletext: articletext,
    author: author,
    published: published,
    image: image,
  };
  
  fakeData.unshift(newArticle);

  res.redirect('/');
};

module.exports = addArticleController;