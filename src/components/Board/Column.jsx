import { Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from 'react';

const Column = ({ data, onDelete, children }) => {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  return (
    <div className="column car w-[280px] shrink-0">
      <div className="flex items-center justify-between mb-5">
        <h3 className="heading-sm uppercase">
          <span className="task-status inline-block h-3 w-3 rounded-full mr-3"></span>
          {data.name} ({data.tasks.length})
        </h3>
        {onDelete && (
          <button onClick={() => onDelete(data.name)} className="text-red-500">
            Delete
          </button>
        )}
      </div>
      {winReady ? (
        <Droppable droppableId={data.name}>
          {(provided) => (
            <ul
              className="scrollbar-thin ull  scrollbar-track-transparent overflow-y-scroll h-full pb-12 flex flex-col gap-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {children}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      ) : null}
    </div>
  );
};

export default Column;
