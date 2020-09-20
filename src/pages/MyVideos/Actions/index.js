import React from 'react';

import {
  AiFillCloseCircle as CloseIcon,
  AiFillEdit as EditIcon,
  AiFillEye as ShowIcon,
} from 'react-icons/ai';

import './styles.css';

function Actions(props) {
  return (
    <div className="actions-wrapper">
      <div className="action-button">
        <CloseIcon id="close-icon" />
      </div>
      <div className="action-button">
        <EditIcon id="edit-icon" />
      </div>

      <div className="action-button">
        <ShowIcon id="show-icon" />
      </div>
    </div>
  );
}

export default Actions;
