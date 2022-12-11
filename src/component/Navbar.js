import { Link } from "react-router-dom";


function Navbar({user}) {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

    return (
      <div className="navbar">
        <h1 className="app__logo">Task_M.</h1>
        { user ? (
        <ul className="nav__ul nav">
            <img
                src={user.photos[0].value}
                alt="avatar"
                className="avatar"
                referrerPolicy="no-referrer"
            />
            <li className="nav__list">{user.displayName}</li>
            
            {/* <Link className="links" to={'/board'}>
              <li>ToDo</li>
            </Link> */}
            
            <li className="nav__list" onClick={logout}>Logout</li>
        </ul>
        ) : (
          <Link className="links loginout__link" to={'/login'}>Login</Link>
        )}
      </div>
    );
  }
  
  export default Navbar;
  