$(document).ready(function() {
    $('#example').DataTable({
        //disable sorting on last column
        "columnDefs": [
            { "orderable": false, "targets": 3 }
        ],
        language: {
            //customize pagination prev and next buttons: use arrows instead of words
            'paginate': {
                'previous': '<span class="fa fa-chevron-left"></span>',
                'next': '<span class="fa fa-chevron-right"></span>'
            },
            //customize number of elements to be displayed
            "lengthMenu": 'Display <select class="form-control input-sm">'+
                '<option value="5">5</option>'+
                '<option value="10">10</option>'+
                '<option value="15">15</option>'+
                '<option value="20">20</option>'+
                '<option value="-1">All</option>'+
                '</select> results'
        }
    });

    // Apply alternating row colors
    $('#example tbody tr:odd').css('background-color', '#e0eef9');
    $('#example tbody tr:even').css('background-color', '#aecbd6');
});
