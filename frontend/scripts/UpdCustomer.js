$('form.form-actualizar').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/UpdCustomer',
        data: $('form').serialize(),
        success: function(respuesta) {
            console.log(respuesta);
            alert('Se modofico correctamente el cliente');
        },

        error: function(err) {
            alert(err.responseJSON.err.message);
            $('#error').text(err.responseJSON.err.message);
            $('#error').show();

        }
    });
});

$('input').on('focus', function(e) {

    $('#error').hide();

});