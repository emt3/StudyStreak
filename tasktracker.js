const formEl = document.querySelector('form');

    const tbodyEl = document.querySelector('tbody');

    const tableEl = document.querySelector('table');

    function addRow(e){
    e.preventDefault();
    //alert("this works");
    const course = document.getElementById('Course').value;
    const task = document.getElementById('Task').value;
    const due_date = document.getElementById('Due Date').value;

    const notes = document.getElementById('Notes').value;
    //alert(course+task+due_date+completion_status+notes);
    tbodyEl.innerHTML += `
    <tr>
        <td>${course}</td>
        <td>${task}</td>
        <td>${due_date}</td>
         
        <td>${notes}</td>
        <td><button class = "deleteBtn">Yes</button></td>
    </tr>
    `
}


    function deleteRow(e){
        if (!e.target.classList.contains('deleteBtn')){
            return;  
        }
        const btn = e.target;
        btn.closest('tr').remove();
    }

    formEl.addEventListener("submit", addRow);
    tableEl.addEventListener('click', deleteRow);