import React, {useState} from 'react';

const Note = ({ addNote }) => {
    const [tags, setTags] = useState('');
    const [note, setNote] = useState('');

    const handleAddNote = () => {
        const tagArray = tags.split(' ').filter(tag => tag != '');

        addNote({
            tags: tagArray,
            note,
        });
        setTags('');
        setNote('');
    };

    return(
        <div>
            <label htmlFor='tagInput'>Tags</label>
            <input
            type='text'
            id='tagInput'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            />
            <br />

            <label htmlFor='noteInput'>Note:</label>
            <textarea
            id='noteInput'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            />
            <br />

            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}

export default Note;