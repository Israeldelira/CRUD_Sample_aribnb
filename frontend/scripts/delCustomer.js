//////////////////////////////BORRAR CON NOMBRE//////////
$('form.form-nombre').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/DelCustName',
        data: $('form').serialize(),
        success: function(respuesta) {
            try {

                if (respuesta.resp.status === false) {
                    alert('Se elimino cliente correctamente');
                }
            } catch (err) {
                alert('No se pudo eliminar el cliente o no Existe');

            }
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

///////////////////////////BORRAR CON ID////////////

$('form.form-id').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/DelCustID',
        data: $('form').serialize(),
        success: function(respuesta) {
            console.log(respuesta);
            try {

                if (respuesta.resp.status === false) {
                    alert('Se elimino correctamente');
                }
            } catch (err) {
                alert('Cliente no eliminado');

            }

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