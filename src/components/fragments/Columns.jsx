import React from "react";

const Columns = () => {
  const items = [
    {
      id: 1,
      title: "iPhone 13",
    },
  ];
  return (
    <>
      {/* {items.map((item) => (
        <React.Fragment key={item.id}>
          <h2>Title</h2>
          <p>{item.title}</p>
        </React.Fragment>
      ))} */}
      <td>Name</td>
      <td>Steve Jobs</td>
    </>
  );
};

export default Columns;
