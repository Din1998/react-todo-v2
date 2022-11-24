import BoardContent from "./BoardContent";
import BoardHeader from "./BoardHeader";


function BoardCanvas () {

    return (
        <div className="main__board__canvas">
            <BoardHeader />
            <div className="board__canvas">
                <BoardContent />
            </div>
        </div>
    )
    
}

export default BoardCanvas;