function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    document.querySelector('.container').classList.toggle('sidebar-closed');
}

function sendEmail() {
    window.location.href = "mailto:dentist@creativesmile.com?subject=Inquiry&body=Dear%20Dentist%2C%0A%0A";
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('closed');
});
function cancelAppointment(button) {
// Handle cancel appointment logic here
const appointmentItem = button.closest('.list-group-item');
const appointmentDetails = appointmentItem.textContent.trim();
if (confirm(`Are you sure you want to cancel the appointment?\n${appointmentDetails}`)) {
    // Remove the appointment from the list
    appointmentItem.remove();
    alert('Appointment canceled successfully.');
}
}

function rescheduleAppointment(button) {
// Handle reschedule appointment logic here
const appointmentItem = button.closest('.list-group-item');
const appointmentDetails = appointmentItem.textContent.trim();
alert(`Rescheduling feature will be implemented for:\n${appointmentDetails}`);
}