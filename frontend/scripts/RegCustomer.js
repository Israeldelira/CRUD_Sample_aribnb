$('form').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/RegCustomer',
        data: $('form').serialize(),
        success: function(respuesta) {
            console.log(respuesta);
            alert('Registro exitoso');
        },

        error: function(err) {
            alert('No se pudo completar el registro');
            $('#error').text(err.responseJSON.err.message);
            $('#error').show();

        }
    });
});

$('input').on('focus', function(e) {

    $('#error').hide();

});