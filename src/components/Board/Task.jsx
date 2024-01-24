import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ data, index }) => {

  const completedSubtasks = data.subtasks.reduce(
    (acc, subtask) => (subtask.isCompleted ? acc + 1 : acc),
    0
  );

  return (
    <Draggable draggableId={data.slug} index={index}>
      {(provided) => (
        <li
          className="group select-none shadow-main px-4 py-6 rounded-lg cursor-pointer ull text-black dark:bg-darkGrey dark:text-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4 className="heading-md mb-2 group-hover:text-mainPurple">
            {data.title}
          </h4>
          <p className="body-md text-mediumGrey">
            {completedSubtasks} of {data.subtasks.length} subtasks
          </p>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
