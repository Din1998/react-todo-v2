import BoardContent from "./BoardContent";
import BoardHeader from "./BoardHeader";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function BoardCanvas () {

    return (
        <div className="main__board__canvas">
            <BoardHeader />
            <div className="board__canvas">
                <DndProvider backend={HTML5Backend}>
                    <BoardContent />
                </DndProvider>
                
            </div>
        </div>
    )
    
}

export default BoardCanvas;