import React from "react";
import { ITask } from "src/contexts/TaskContext";
import editIcon from "src/static/svg/edit.svg";
import "./style.scss";
import {Link} from "react-router-dom";

interface ICard extends Partial<ITask> {
  className?: string;
}

const Card: React.FC<ICard> = (props: ICard) => {
  const { title, description, status, id, className = '' } = props;

  return (
    <div className={`card ${className}`}>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__footer">
        <div className="card__status">{status}</div>
        <Link to={`/edit/${id}`}>
          <img className="card__edit" src={editIcon} alt="Edit"/>
        </Link>
      </div>
    </div>
  );
};

export default Card;