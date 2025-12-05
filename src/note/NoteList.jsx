import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note.jsx";
import { NoteContext } from "./NoteContext.jsx";

export default function NoteList() {
    const notes = useContext(NoteContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null)

    const filteredNotes = useMemo(() => {
        console.info("Filtering Notes")
        return notes.filter(note => note.text.includes(search))
    }, [notes, search]);

    function handleSearch() {
        console.info("Search Handle")
        setSearch(searchInput.current.value);
    }

    return (
        <div>
            <input type="text" placeholder="Search" ref={searchInput} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )
}