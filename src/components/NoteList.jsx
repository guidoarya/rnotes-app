import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({
  notes,
  onDelete,
  onArchive,
  onNoteList,
}) {
  return (
    <div className="note-list">
      {notes.map(function (note) {
        return (
          <NoteItem
            {...note}
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onNoteList={onNoteList}
            id={note.id}
          />
        );
      })}
    </div>
  );
}
