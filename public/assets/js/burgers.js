$(function () {
    $('#submit').on('click', function (e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $('#burger-input').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('***New burger created***');
            location.reload();
        })
    });

    $('.devour-burger').on('click', function(e) {
        var id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then(function() {
            console.log('***Burger devoured***');
            location.reload();
        })
    });
});