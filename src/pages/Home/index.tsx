import React, { Fragment } from "react";
import Tasks from "src/components/Tasks";
import NewTask from "src/components/NewTask";

interface IHome {}

const Home: React.FC<IHome> = (props: IHome) => {
  return (
    <Fragment>
      <NewTask />
      <Tasks />
    </Fragment>
  );
};

export default Home;