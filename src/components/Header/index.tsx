import React from "react";
import "./style.scss";

interface IHeader {}

const Header: React.FC<IHeader> = (props: IHeader) => {

  return (
    <header className="header">
      <h1 className="container header__title">{`Task Management > ${'Home'}`}</h1>
    </header>
  );
};

export default Header;