// Quick Notes Board — DOM-focused Starter
// No solutions provided. Complete ONLY the TODOs.

// ------------------------
// State
// ------------------------
// var notes = [];
// var notes = [{ id: 0, title: "first note", text: "my way of doing things!" },{ id: 1, title: "second note", text: "my way of doing things!" }]; // Each note: { id: string, title: string, text: string }
var notes = [
{id: 0, title: 'Groceries', text: 'Milk'},
{id: 1, title: 'todos', text: 'workout'},
{id: 2, title: 'make sure to find', text: 'peace!'},
{id: 3, title: 'Groceries', text: 'Milk'},
{id: 4, title: 'todos', text: 'workout'},
{id: 5, title: 'make sure to find', text: 'peace!'},
{id: 6, title: 'Groceries', text: 'Milk'},
{id: 7, title: 'todos', text: 'workout'},
{id: 8, title: 'make sure to find', text: 'peace!'},
{id: 9, title: 'Groceries', text: 'Milk'},
{id: 10, title: 'todos', text: 'workout'},
{id: 11, title: 'make sure to find', text: 'peace!'},
]
var filterText = "";

// ------------------------
// DOM References
// ------------------------
var notesEl = document.getElementById("notes");
var formEl = document.getElementById("note-form");
var titleInput = document.getElementById("title");
var textInput = document.getElementById("text");
var submitBtn = document.getElementById("submit-btn");
var cancelEditBtn = document.getElementById("cancel-edit");
var editingIdInput = document.getElementById("editing-id");
var titleErrorEl = document.getElementById("title-error");
var filterInput = document.getElementById("filter");
var mutedPara = document.querySelector("#notes .muted");
var noteActions = document.querySelector(".note-actions");
var resetBtn = document.getElementById("reset-btn");
const state = [];

// ------------------------
// Init
// ------------------------
function init() {
  // TODO(1): Render notes from the current state (notes array).
  renderNotes();

  // Events
  formEl.addEventListener("submit", onSubmit);
  cancelEditBtn.addEventListener("click", onCancelEdit);
  filterInput.addEventListener("input", onFilterChange);

  // TODO(2): Add event delegation on the notes container for Edit/Delete buttons.
  // Example: notesEl.addEventListener("click", onNotesClick);
  notesEl.addEventListener("click", onNotesClick);
}
init();

// ------------------------
// Rendering
// ------------------------

function getAllHTMLNotes(noteList) {
  if (!noteList.length) {
    return mutedPara;
  }
  const fragment = document.createDocumentFragment();
  noteList.forEach((note) => {
    let article = document.createElement("article");

    article.id = note.id;
    article.className = "note";
    article.innerHTML = `<h3>${note.title}</h3>
      <p>${note.text}</p>
      <div class="note-actions">
          <button id="${note.id}" class="edit-btn">Edit</button>
          <button id="${note.id}" class="delete-btn">Delete</button>
      </div>`;
    fragment.appendChild(article);
  });
  return fragment;
}

function renderNotes(noteList = notes) {
  // TODO(3): Clear notesEl content before re-rendering.
  notesEl.innerHTML = "";

  // TODO(4): Compute filtered list from notes array using filterText.

  // TODO(5): If no visible notes, show a <p class="muted"> message and return.

  // TODO(6): For each visible note, build the DOM structure using createElement:
  // - <article class="note" data-id="...">
  //   - <h3>Title here</h3>
  //   - <p>Text here</p>
  //   - <div class="note-actions">
  //       <button class="edit-btn">Edit</button>
  //       <button class="delete-btn">Delete</button>
  //     </div>

  // Append each built card to notesEl.
  notesEl.appendChild(getAllHTMLNotes(noteList));
}

// ------------------------
// Events
// ------------------------

resetBtn.onclick = ()=>{
  notes = [];
  renderNotes();
}

function reset(){
  clearError();
  submitBtn.textContent = "Add Note";
  cancelEditBtn.classList.add("hidden");
  titleInput.value = "";
  text.value = "";
}

function push(){
  state.unshift(notes);
}

function pop(){
  notes = state.pop();
}


function addNote(title, text) {
  const newTodo = {
    id: notes.length,
    title,
    text,
  };

  notes.push(newTodo);
}

function addEditedNote(id, title, text) {
  notes.forEach((note)=>{
        if(note.id == id){
            note.title = title;
            note.text = text;
        }
    });

}

// debugger;
function onSubmit(e) {
  e.preventDefault();
  clearError();

  var title = titleInput.value.trim();
  var text = textInput.value.trim();
  var editingId = editingIdInput.value;

  // TODO(7): Validate that title is not empty.
  // - If empty, set titleErrorEl.textContent with a message and return.
  if (!title.length) {
    titleErrorEl.textContent = "Title can't be empty!";
    return;
  }

  if (editingId) {
    pop();
    // EDIT MODE
    // TODO(8): Find the note by id and update its title and text.

    // TODO(9): Reset the form back to "Add Note" mode (editingIdInput, buttons, labels).
    addEditedNote(editingId, title, text);
  } else {
    // ADD MODE
    // TODO(10): Create a new note object with a unique id (e.g., Date.now().toString()).
    // TODO(11): Push the new note into the notes array.
    addNote(title, text);
  }

  reset();
  // TODO(12): Re-render notes and reset the form fields.
  renderNotes();
}

function removeNote(id){
    const newList = [];
    notes.forEach((note)=>{
        if(note.id != id){
            newList.push(note);
        }
    });

    notes = [...newList];
}


function openEdit(id){
    let note = null;
    notes.forEach((n)=>{
        if(n.id == id){
            note = n;
        }
    });

    editingIdInput.value = id;
    removeNote(id);
    renderNotes();
    submitBtn.textContent = "Submit Edit";
    cancelEditBtn.classList.remove("hidden");
    titleInput.value = note.title;
    textInput.value = note.text;
    cancelEditBtn.addEventListener("click", onCancelEdit);
}

function onCancelEdit() {
  // TODO(13): Clear edit state and reset form to "Add Note" mode.
  // - editingIdInput.value = ""
  // - submitBtn text back to "Add Note"
  // - hide cancelEditBtn
  // - clear any error
  pop();
  reset();
  cancelEditBtn.removeEventListener("click", onCancelEdit);
  renderNotes();
}

function findNotes(input){

  const found = notes.filter((note)=>{

    if(note.title.includes(input)){
      return note;
    }
  })

  return found;
}

function onFilterChange(e) {
  // TODO(14): Update filterText from the input value and re-render notes.
  const input = e.target.value.trim();
  if(!input){ 
    renderNotes();
    return 
  };

  const foundNotes = findNotes(input);
  renderNotes(foundNotes);
}

// TODO(15): Implement delegated click handling for Edit/Delete actions on the notes board.
// debugger;
function onNotesClick(e) {
  // - Determine if the click was on .edit-btn or .delete-btn
  const clickedBtn = e.target.className;
  if(!clickedBtn) { return }
  // - Find the closest .note element and read its data-id
  // - For Edit:
  //   - Find the note by id
  //   - Fill form inputs with the note values
  //   - Set editingIdInput.value = id
  //   - Change submit button text to "Save Changes"
  //   - Show cancelEditBtn
  // - For Delete:
  //   - Remove the note from the array by id
  //   - Re-render notes
  if (clickedBtn == "edit-btn") {
    push();
    openEdit(e.target.id);
  } else if (clickedBtn == "delete-btn") {
    removeNote(e.target.id);
}
    renderNotes();
}

// ------------------------
// Helpers
// ------------------------
function clearError() {
  // TODO(16): Clear any validation messages (e.g., titleErrorEl.textContent = "")
  if (titleErrorEl) {
    titleErrorEl.textContent = "";
  }
}

// ------------------------
// Student Checklist
// ------------------------
// [ ] (1) Initial render from state
// [ ] (2) Event delegation for Edit/Delete on #notes
// [ ] (3) Clear container before rendering
// [ ] (4) Filter notes by text (title or body)
// [ ] (5) Empty-state message when no notes
// [ ] (6) Build cards using createElement/appendChild
// [ ] (7) Validate title (required)
// [ ] (8) Edit existing note (update by id)
// [ ] (9) Reset form from edit → add mode
// [ ] (10) Create new note object with unique id
// [ ] (11) Add new note to array
// [ ] (12) Re-render + reset form after submit
// [ ] (13) Cancel edit (restore form)
// [ ] (14) Re-render on filter input
// [ ] (15) Implement onNotesClick for edit/delete
// [ ] (16) Clear validation messages properly
