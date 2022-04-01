import React from "react";

const FilterData = () => {
  const array = [23, 45, 67, 89, 12];
  const show = array.filter((number) => {
    return number > 60;
  });

  //   const tasks = [
  //     {
  //       taskId: 1,
  //       taskName: "UI design",
  //       taskStatus: "Complete",
  //     },
  //     {
  //       taskId: 2,
  //       taskName: "Apply hooks",
  //       taskStatus: "To do",
  //     },
  //   ];
  //   return (
  //     <ul>
  //       {" "}
  //       To-do list:
  //       {tasks
  //         .filter((task) => task.taskStatus === "To do")
  //         .map((task) => (
  //           <li key={task.taskId}>{task.taskName}</li>
  //         ))}
  //     </ul>
  //   );

  return (
    <ul>
      {" "}
      Number greater than 60:
      {show.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
};

export default FilterData;
