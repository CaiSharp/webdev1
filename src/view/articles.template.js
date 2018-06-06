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
    <form action="/filter" method="post">
        <div class="input-field col s4">
            <input id="filter" type="text" name="filter">
            <label for="filter"></label>
        </div>
        <div class="input-field col s2">
            <button class="btn waves-effect waves-light" type="submit">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
    </form>
    </div>
    <div id="suggestions"></div>
    
    <div class="row">
      {{#fakeData}}    
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src={{image}}>
              <span class="card-title">{{title}}</span>
            </div>
            <div class="card-content">
              <p>{{teaser}}</p>
            </div>
            <div class="card-action">
              <a href="/details/{{id}}">Read more</a>
            </div>
          </div>
        </div>
      {{/fakeData}}   
    </div> 

    </div>
    <script src="/autocomplete.js"></script>
    </body>
  </html>
`;