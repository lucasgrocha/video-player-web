import React from 'react';

import {
  AiFillCloseCircle as CloseIcon,
  AiFillEdit as EditIcon,
  AiFillEye as ShowIcon,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import './styles.css';

function Actions(props) {
  const navigate = useNavigate();

  return (
    <div className="actions-wrapper">
      <div className="action-button">
        <ShowIcon
          id="show-icon"
          onClick={() => navigate(`/videos/${props.id}`)}
        />
      </div>

      <div className="action-button">
        <EditIcon id="edit-icon" onClick={() => navigate(`/editVideo/${props.id}`)}/>
      </div>

      <div
        className="action-button"
        onClick={() => props.deleteClicked(props.id)}
      >
        <CloseIcon id="close-icon" />
      </div>
    </div>
  );
}

export default Actions;
