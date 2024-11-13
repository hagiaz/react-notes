/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function DeleteButton({ id, onDelete }) {
    return <button className='note-item__delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;