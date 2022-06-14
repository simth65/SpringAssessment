const todoControl = new TodoController();

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newTodoItem.addEventListener('submit', (event) => {
    // Prevent default action
    // 1. for validation
    // 2. sending data over to backend using REST API
    event.preventDefault();
    // Select the inputs
    const newTitle = document.querySelector('#newtitle');
    const newDescription = document.querySelector('#newdescription');
    const newDate = document.querySelector('#newdate');


    // Get the values of the inputs - variable names to be same as MySQL columns
    const title = newTitle.value;
    const description = newDescription.value;
    const targetdate = newDate.value;
    /*
        Do the Validation code here
    */
    if (title == "") {
        alert("Title cannot be blank.");
        return;
    }
    if (description == "") {
        alert("Description cannot be blank.");
        return;
    }

    // Clear the form
    newTitle.value = '';
    newDescription.value = '';
    newDate.value = '';

    // Add the task to the task manager
    todoControl.addItem(title, description, targetdate);
});

// select file input
//const input = document.querySelector('#newItemImageFile');

// add event listener
//input.addEventListener('change', () => {
//    storeImage = input.files[0];
//});
//
//newItemImageFile.addEventListener('change', () => {
//    storeImage = input.files[0];
//});
