import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import { NoteContext, NoteDispatchContext } from "./NoteContext.jsx";


let id = 0;
const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: true },
    { id: id++, text: "Learn Javascript", done: false },
    { id: id++, text: "Learn ReactJS", done: false },
]

function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false
        })
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text
        notes[index].done = action.done
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes)



    return (
        <div>
            <NoteContext.Provider value={notes}>
                <NoteDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NoteDispatchContext.Provider>
            </NoteContext.Provider>
        </div>
    )
}