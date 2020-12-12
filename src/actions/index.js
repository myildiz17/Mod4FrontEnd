
export const fetchNotesSuccess = (notes) => {
    return {
        type: "FETCH_NOTES_SUCCESS",
        notes: notes
    }
}

export const deleteNote = (id) => {

    return {
    
        type: "DELETE_NOTE",
        id: id

    }
}

export const addNote = (newNote) => {

    return {
    
        type: "ADD_NOTE",
        newNote

    }
}

export const updateNote = (updatedNote) => {

    return {
        type: "UPDATE_NOTE",
        updatedNote
    }
}