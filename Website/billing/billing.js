function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    document.querySelector('.container').classList.toggle('sidebar-closed');
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('closed');
});

function saveInvoice() {
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
        console.error("jsPDF is not loaded properly");
        return;
    }
    const doc = new jsPDF();
    doc.html(document.getElementById('invoice-box'), {
        callback: function (doc) {
            doc.save('invoice.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 800
    });
}