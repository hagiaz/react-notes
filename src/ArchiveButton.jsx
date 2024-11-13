/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ArchiveButton({ id, onStatusChange, isArchived }) {
    return (
        <button className='note-item__archive' onClick={() => onStatusChange(id)}>
            {isArchived ? "Unarchive" : "Archive"}
        </button>
    );
}


export default ArchiveButton;