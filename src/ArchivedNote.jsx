/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNote({ notes, onDelete, onStatusChange }) {
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <div className="note-list">
            {
                archivedNotes.length === 0 ? (
                    <h2>Tidak ada catatan</h2>
                ) : (
                    archivedNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onStatusChange={onStatusChange}
                            {...note}
                        />
                    ))
                )
            }
        </div>
    );
}

export default ArchivedNote;