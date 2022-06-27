import React from 'react';

export default function ActiveNotes({ id, onNoteList }) {
  return (
    <>
      <button
        type="submit"
        className="btn-archive"
        onClick={() => onNoteList(id)}
      >
        Add to Note List
      </button>
    </>
  );
}
