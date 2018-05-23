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
        <div class="col s12">
          <div class="card">
            <div class="card-image">
              <img src={{image}}>
              <span class="card-title">{{title}}</span>
            </div>
            <div class="card-content">
              <p><b>{{published}}</b></p>
              <br>
              <p>{{articletext}}</p>
              <br>
              <h5>{{author}}</h5>
            </div>
          </div>
        </div> 
    </div> 

    </div>
    </body>
  </html>
`;