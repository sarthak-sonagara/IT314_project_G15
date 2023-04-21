var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Navbar</title>
        <link rel="stylesheet" href="Navbar.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="nav" style={{fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif'}}>
          <a href="#home">ADMIN</a>
          <a href="#about">USERS</a>
          <a href="#contact">ORGANIZATIONS</a>
          <i className="fa fa-search" /><input type="text" placeholder="Search.." />
          <a className="active2" href="#home">LOGOUT</a>
        </div>
      </div>
    );
  }
});