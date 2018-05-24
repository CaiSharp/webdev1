module.exports = `
<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link rel="stylesheet" type="text/css" href="/materialize.css">
      <link rel="stylesheet" type="text/css" href="/style.css">
    </head>

    <body>

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">My Blog</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">All Articles</a></li>
          <li><a href="/new">Add Article</a></li>
        </ul>
      </div>
    </nav>

    
    <div class="container">

    <div class="row">  
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <form id="new-article" action="/add-article/" method="post">

                <div class="row">
                  <div class="col s6">
                  <label for="author">Author</label>
                    <input id="author" name="author" type="text" class="validate">
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                  <label for="title">Title</label>
                    <input id="title" name="title" type="text" class="validate">
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                  <label for="image">Image Link</label>
                    <input id="image" name="image" type="text" class="validate">
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="teaser">Teaser</label>
                    <textarea id="teaser" name="teaser" class="materialize-textarea"></textarea>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="articletext">Artikel</label>
                    <textarea id="articletext" name="articletext" class="materialize-textarea"></textarea>
                  </div>
                </div>

                <input class="btn" type="submit" value="Submit">
              </form>
              </div>
          </div>
        </div> 
    </div> 

    </div>
    </body>
  </html>
`;