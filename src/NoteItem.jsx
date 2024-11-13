/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ id, title, body, archived, createdAt, onDelete, onStatusChange }) {
    return (
        <div className={archived ? "archived-note-item" : "note-item"}>
            <NoteItemBody id={id} title={title} body={body} archived={archived} createdAt={createdAt} />
            <ArchiveButton id={id} onStatusChange={onStatusChange} isArchived={archived} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItem;