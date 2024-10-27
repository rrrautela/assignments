let todo_category;

function createAddButton() {
    let btn = document.createElement('button');
    btn.className = 'add_btn';
    btn.innerText = 'add new entry';
    btn.addEventListener('click', addTaskWindow); // Assign event directly
    return btn;
}

function addTaskWindow(event) {
    const todo_category = event.target.parentElement;

    // Create a new window or perform actions
    const new_window = document.createElement('div');
    new_window.id = "upperLayerDiv";
    new_window.innerHTML = `
        <h1>Add new task</h1> 
        <input type="text" id="titleInput" placeholder="Add Task Title"> 
        <input type="text" id="descriptionInput" placeholder="Add Task Description"> 
        <button id="add_task_btn">Add Task</button>`;

    // Append or perform any other actions
    document.body.appendChild(new_window);

    const button2 = document.getElementById('add_task_btn');
    button2.addEventListener('click', function() {
        let task_title = document.getElementById('titleInput').value;
        let task_description = document.getElementById('descriptionInput').value;

        let new_entry = document.createElement('div');
        new_entry.className = 'subdiv';
        let title = document.createElement('h3');
        let description = document.createElement('h4');

        title.textContent = task_title;
        description.textContent = task_description;

        new_entry.appendChild(title);
        new_entry.appendChild(description);

        // Append new entry and replace the button
        todo_category.appendChild(new_entry);

        document.getElementById('upperLayerDiv').remove();
        event.target.remove(); // Remove the current button
        todo_category.appendChild(createAddButton()); // Add a new button
    });
}

// Initialize all existing buttons
document.querySelectorAll('.add_btn').forEach(button => {
    button.addEventListener('click', addTaskWindow);
});





//ek fucntion bana jo add_btn create krega har baar
// aur ek fucntion bana jo div ko delete krega aur new entry add krega and add_btn ko firse add krega