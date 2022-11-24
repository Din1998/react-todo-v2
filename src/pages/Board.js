import BoardCanvas from "../component/BoardCanvas";
import Drawer from "../component/Drawer";


function Board() {
    return (
      <div className="board__section">
          
          <Drawer />
          <BoardCanvas />
      </div>
    );
  }
  
  export default Board;
  