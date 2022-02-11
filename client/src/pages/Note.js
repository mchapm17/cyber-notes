import React from 'react';
import NoteList from '../components/Note';
import { useQuery } from '@apollo/client';
import { QUERY_NOTES } from '../utils/queries';

const Note = () => {
  const { loading, data } = useQuery(QUERY_NOTES);
  const notes = data?.notes || [];
console.log(data)
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList
              notes={notes}
              title="Your CyberNotes"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Note;