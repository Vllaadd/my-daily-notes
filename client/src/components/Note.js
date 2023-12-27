import React, {useState} from 'react';

const Note = ({ addNote }) => {
    const [tags, setTags] = useState('');
    const [note, setNote] = useState('');

    const handleTagsChange = (e) => {
        setTags(e.target.value);
      };
    
      const handleNoteChange = (e) => {
        setNote(e.target.value);
      };
    
      const handleAddNote = () => {
        // Process the tags and note data as needed
        // ...
    
        // Reset the input fields
        setTags('');
        setNote('');
      };

    return(
        <div>
            <label htmlFor='tagInput'>Tags</label>
            <input
            type='text'
            id='tagInput'
            value={tags}
            onChange={handleTagsChange}
            />
            <br />

            <label htmlFor='noteInput'>Note:</label>
            <textarea
            id='noteInput'
            value={note}
            onChange={handleNoteChange}
            />
            <br />

            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}

export default Note;