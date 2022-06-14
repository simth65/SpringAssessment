const todoControl = new TodoController();
const tday = new Date();
const minDate = tday.getFullYear() + "-" + (tday.getMonth() + 1).toString().padStart(2, '0') + "-" + tday.getDate(); //
//console.log(tday);
//console.log("date " + minDate);
// set the min date selection to today
document.getElementById("newdate").setAttribute("min", minDate);


// eventlistener for submit button
newTodoItem.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTitle = document.querySelector('#newtitle');
    const newDescription = document.querySelector('#newdescription');
    const newDate = document.querySelector('#newdate');


    const title = newTitle.value;
    const description = newDescription.value;

    // convert date to yyyy/mm/dd format to store into db
    let tdate = new Date(Date.parse(newDate.value));
    const datestr = tdate.getFullYear()+ "/" + (tdate.getMonth() + 1) + "/" + tdate.getDate() ;

    /* Validation */
    if (title == "") {
        alert("Title cannot be blank.");
        return;
    }
    if (description == "") {
        alert("Description cannot be blank.");
        return;
    }
//    console.log("***********" + tdate);
    if ( isNaN(tdate) ) {
        alert("Select a valid date.");
        return;
    }

    // Clear the form
    newTitle.value = '';
    newDescription.value = '';
    newDate.value = '';

    // Add to db
    todoControl.addItem(title, description, datestr);
});
