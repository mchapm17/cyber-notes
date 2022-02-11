import React from 'react';
import { useQuery } from '@apollo/client';

const NoteList = ({ notes, title }) => {
  if (!notes.length) {
    return <h3>No Notes Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {notes &&
          notes.map((note) => (
            <div key={note._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {note.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                  </span>
                  <p>{note.noteData}</p>
                  <p>author: {note?.userId?.username}</p>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NoteList;