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
          <li><a href="/categories">All Categories</a></li>
          <li><a href="/entries">All Entries</a></li>
        </ul>
      </div>
    </nav>

    
    <div class="container">
 
    <div class="row">
      {{#data}}    
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
            <span class="card-title">{{name}}</span>
            </div>
            <div class="card-action">
              <a href="/categories/{{name}}">Show Entries</a>
            </div>
          </div>
        </div>
      {{/data}}   
    </div> 

    </div>
    </body>
  </html>
`;