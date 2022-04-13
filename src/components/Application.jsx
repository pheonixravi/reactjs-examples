import React from "react";

export const Application = () => {
  const userName = "Steve Jobs";
  return <Layout userName={userName}>Main content</Layout>;
};

const Layout = ({ children, userName }) => {
  return (
    <div>
      <Header userName={userName} />
      <main>{children}</main>
    </div>
  );
};

const Header = ({ userName }) => {
  return (
    <header>
      <UserInfo userName={userName} />
    </header>
  );
};

const UserInfo = ({ userName }) => {
  return <span>{userName}</span>;
};
