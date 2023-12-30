import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Note = () => {
    const [tags, setTags] = useState('');
    const [note, setNote] = useState('');
    const [displayedNotes, setDisplayedNotes] = useState([]);

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleAddNote = async () => {
        const tagArray = tags.split(' ').filter(tag => tag != '');
    try{
        await axios.post('/newnote', {tags:tagArray, note});
        fetchAllNotes();
    }catch(error){
        console.error('Error adding note:', error);
    }

        setTags('');
        setNote('');

};
    const fetchAllNotes = async () => {
        try{
            const response = await axios.get('/home');
            const allNotes = response.data;

            setDisplayedNotes(allNotes);
        }catch(error){
            console.error('Error fetching notes:', error)
        };
    };

    useEffect(() => {
        fetchAllNotes();
    }, []);

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
    );
};

export default Note;