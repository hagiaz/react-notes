/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onStatusChange }) {
    const unarchivedNotes = notes.filter(note => !note.archived);

    return (
        <div className="note-list">
            {
                unarchivedNotes.length === 0 ? (
                    <h2>Tidak ada catatan</h2>
                ) : (
                    unarchivedNotes.map((note) => (
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

export default NoteList;