import React from 'react';

export default function ArchiveNotes({ id, onArchive }) {
  return (
    <>
      <button
        type="submit"
        className="btn-archive"
        onClick={() => onArchive(id)}
      >
        Archive
      </button>
    </>
  );
}
