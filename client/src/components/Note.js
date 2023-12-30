import React, { useState, useEffect } from 'react';

const Note = ({ addNote }) => {
    const [tags, setTags] = useState('');
    const [note, setNote] = useState('');
    const [displayedNotes, setDisplayedNotes] = useState([]);

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleAddNote = () => {
        const tagArray = tags.split(' ').filter(tag => tag != '');
        // saveNoteToMongoDB({
        //     tags: tagArray,
        //     note,
        // });

        setDisplayedNotes([...displayedNotes, { tags: tagArray, note }]);

        setTags('');
        setNote('');
    };

    return (
        <div>
            <label htmlFor='tagInput'>Tag:</label>
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
            <div>
                <h2>Displayed Notes:</h2>
                <ul>
                    {displayedNotes.map((displayedNote, index) => (
                        <li key={index}>
                            Tags: {displayedNote.tags.join(', ')} | Note: {displayedNote.note}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Note;