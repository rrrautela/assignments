//THIS IS SOMETHING i AM DOING TO MAKE IT MORE FUN, ITS NOT NECESAARY TO DO IT


// Function to create a delete button
function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.id = 'self_destruct_button'
    deleteButton.textContent = 'Delete Me';
    
    // Event listener for button click
    deleteButton.addEventListener('click', function() {
        // Directly access the two previous siblings
        this.previousElementSibling.remove();
        this.previousElementSibling.remove(); // Remove the second previous sibling
        this.previousElementSibling.remove(); // Remove the immediate previous sibling
        
        // Remove the button itself
        this.remove();
    });
    
    return deleteButton;
}



// **********************************************************************************************************************************
let btn1 = document.getElementById("add_field_btn");
let  newentry;
btn1.onclick = function(){
    const fieldLabel = document.getElementById('field_label').value;
    const fieldType = document.getElementById('options_dropdown').value;

    if (!fieldLabel) {
        alert("Please enter a field label.");
        return; // Stop if label is empty
    }
    const parentDiv = document.getElementById('div2');

    const newEntryLabel = document.createElement('h4'); // Create a new div
    newEntryLabel.textContent = fieldLabel;         // Set its text content
    
    if(fieldType == "text_option"){
        newEntry = document.createElement('input')
        newEntry.type = 'text';
        newEntry.placeholder = "Add text here"
    }
    else if((fieldType == "checkbox_option")){
        newEntry = document.createElement('input')
        newEntry.type = 'checkbox';
        newEntry.placeholder = 'checkbox';
    }
    else{
        newEntry = document.createElement('input')
        newEntry.type = 'radio';
    }
    parentDiv.appendChild(document.createElement('hr'))
    parentDiv.appendChild(newEntryLabel);     
    parentDiv.appendChild(newEntry);
    parentDiv.appendChild(createDeleteButton()); //just a little extra

}