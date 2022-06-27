import React from 'react';

export default function DeleteNotes({ id, onDelete }) {
  return (
    <>
      <button
        type="submit"
        className="btn-delete"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}
