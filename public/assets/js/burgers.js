$(document).on('ready', function(e) {
    
    $('.create-form').on('submit', function(e) {
        e.preventDefault();
        
        var newBurger = {
            burger: $('#burger-input').val().trim()
        };

       $.ajax('/api/burgers', {
           type: 'POST',
           data: newBurger
       }).then(function() {
           console.log('\n================');
           console.log('New burger added');
           console.log('================\n');

           location.reload();
       });
    })

    // $('.devour-burger').on('click', function() {

    // })




})