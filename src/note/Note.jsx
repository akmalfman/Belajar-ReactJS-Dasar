import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function Note({ note }) {
    const dispatch = useContext(NoteDispatchContext)
    const [isEditing, seIsEditing] = useState(false);

    let component;

    function handleChangeText(e) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.value
        })
    }

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => seIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => seIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            done: e.target.checked,
        })
    }

    function handleDelete(e) {
        dispatch({
            ...note,
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}