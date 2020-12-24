var selectedRow = null

function onFormSubmit()
{
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{
    var formData = {};
    formData['Name'] = document.getElementById('name').value;
    formData['Email'] = document.getElementById('email').value;
    formData['Phone'] = document.getElementById('phone').value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById('candidate-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="btn btn-success btn-sm edit"><span class="glyphicon glyphicon-pencil" style="pointer-events: none;"></span></a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><span class=" glyphicon glyphicon-trash" style="pointer-events: none;"></span></a>`;
}
function resetForm()
{
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Phone;
}
function onDelete(td)
{
    row = td.parentElement.parentElement;
    document.getElementById('candidate-list').deleteRow(row.rowIndex);
    resetForm();
}