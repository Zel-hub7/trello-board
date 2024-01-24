import { DragDropContext } from "react-beautiful-dnd";
import { useBoards } from "@src/context";
import Column from "./Column";
import Task from "./Task";

const Board = () => {
  const { currentBoard, dragTask } = useBoards();

  function handleOnDragEnd(result) {
    const { source, destination } = result;
    dragTask(source, destination);
  }

  return (
    <main className="overflow-y-hidden board  flex-1 p-4 space-x-4 bg-lightGrey dark:bg-veryDarkGrey flex">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {currentBoard.columns.map((column, i) => (
          <Column data={column} key={i}>
            {column.tasks.map((taskId, j) => {
              const task = currentBoard.tasks.filter(
                (task) => task.id === taskId
              )[0];
              return <Task data={task} index={j} key={taskId} />;
            })}
          </Column>
        ))}

        <style jsx>{`
           :global(.flex > .column:last-child) {
            display: none;
          }
        `}</style>
      </DragDropContext>
    </main>
  );
};
export default Board;
