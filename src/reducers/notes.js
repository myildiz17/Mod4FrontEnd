

export default function notes(state = [], action) {
  let updatedNotes = [];
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      return action.notes;
    case "DELETE_NOTE":
      updatedNotes = state.filter((n) => n.id !== action.id);
      return updatedNotes;
    case "ADD_NOTE":
        
      return [...state, action.newNote];
    case "UPDATE_NOTE":
        updatedNotes = state.map(note => {
            if(note.id === action.updatedNote.id){
                return action.updatedNote
            } else {
                return note
            }
        })
      return updatedNotes;
    default:
      return state;
  }
}
