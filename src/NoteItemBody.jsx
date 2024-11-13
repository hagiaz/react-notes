/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { showFormattedDate } from './data';
 
function NoteItemBody({ id, title, body, archived, createdAt }) {
    const time = showFormattedDate(createdAt);
    return (
        <div className={archived ? "archived-note-item__body" : "note-item__body"}>
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__note">{body}</p>
            <p className="note-item__time">Created on {time}</p>
        </div>
    );
}

 
export default NoteItemBody;