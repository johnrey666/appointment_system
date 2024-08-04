function toggleEditMode(button) {
    const accountRow = button.closest('.account-row');
    const passwordHeader = document.getElementById('password-header');
    const isEditMode = accountRow.classList.toggle('edit-mode');

    if (isEditMode) {
        passwordHeader.textContent = 'PASSWORD / CONFIRM PASSWORD';
    } else {
        passwordHeader.textContent = 'PASSWORD';
    }
}