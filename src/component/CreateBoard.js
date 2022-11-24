import { Link } from "react-router-dom";

function CareteBoard() {
    return (
      <div className="createboard__card">
        <Link className="links_1" to={'/login'}>
          <h1 className='card__header'>Create Board</h1>
          <button className="btn">Login</button>
        </Link>
      </div>
    );
  }
  
  export default CareteBoard;
  