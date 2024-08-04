document.addEventListener('DOMContentLoaded', function () {
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Meeting with John Doe',
                start: '2024-08-05T10:00:00'
            },
            {
                title: 'Follow-up with Jane Smith',
                start: '2024-08-06T12:00:00'
            },
            // Add more events here
        ]
    });
    calendar.render();

    // Initialize Chart.js
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'pie', // Set chart type to pie
        data: {
            labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
            datasets: [{
                data: [10, 20, 30, 40, 50], // Replace with actual sales data
                backgroundColor: [
                    '#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#fd7e14'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Initialize Users Chart
    var ctxUsers = document.getElementById('userChart').getContext('2d');
    var userChart = new Chart(ctxUsers, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [{
                label: 'Number of Users',
                data: [4, 9, 3, 12],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Display current date and time
    function updateDateTime() {
        var now = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').innerHTML = now.toLocaleDateString('en-US', options);
        document.getElementById('current-time').innerHTML = now.toLocaleTimeString('en-US');
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
