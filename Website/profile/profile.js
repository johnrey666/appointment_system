function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    document.querySelector('.container').classList.toggle('sidebar-closed');
}

function updateProfilePic(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('mainProfilePic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function downloadRecords() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Patient Records", 20, 20);
    doc.text("Name: Paolo Marana", 20, 30);
    doc.text("Last Visit: June 10, 2024", 20, 40);
    doc.text("Upcoming Visit: July 22, 2024", 20, 50);
    doc.text("Treatment History:", 20, 60);
    doc.text("  - June 10, 2024: Cleaning", 20, 70);
    doc.text("  - April 15, 2024: Filling", 20, 80);
    doc.text("  - February 20, 2024: Checkup", 20, 90);

    doc.save('Patient_Records.pdf');
}

function openEditModal() {
    $('#editModal').modal('show');
}

function saveChanges() {
    // Here you can add logic to save the changes, for example, send data to the server.
    $('#editModal').modal('hide');
    document.getElementById('information').querySelector('p:nth-child(1) strong').nextSibling.textContent = ' ' + document.getElementById('editName').value;
    document.getElementById('information').querySelector('p:nth-child(2) strong').nextSibling.textContent = ' ' + document.getElementById('editGender').value;
    document.getElementById('information').querySelector('p:nth-child(3) strong').nextSibling.textContent = ' ' + document.getElementById('editContact').value;
    document.getElementById('information').querySelector('p:nth-child(4) strong').nextSibling.textContent = ' ' + document.getElementById('editBirthdate').value;
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('closed');
});

