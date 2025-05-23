import clsx from "clsx";
import React from "react";

const TaskTitle = ({ label, className, bgClassName }) => {
  return (
    <div
      className={`w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between ${bgClassName}`}
    >
      <div className="flex gap-2 items-center">
        <div className={clsx("w-4 h-4 rounded-full ", className)} />
        <p className="text-sm md:text-base text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default TaskTitle;
