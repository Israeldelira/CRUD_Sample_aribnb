$('form.form-propiedad').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/ConPropiedadesTipo',
        data: $('form').serialize(),

        success: function(res) {
            console.log(res);
            if (res.result.length === 0) {
                alert('Ese usuario no existe');
            }
            contenido.innerHTML = null

            for (let usuarios of res.result) {

                contenido.innerHTML += `
                                
                                <tr>
                                    <th scope="row">${ usuarios._id }</th>
                                    <td>${ usuarios.name }</td>
                                    <td>${ usuarios.property_type }</td>
                                    <td>${ usuarios.price.$numberDecimal }</td>
                                    <td>${ usuarios.address.country }</td>
                                    <td>${ usuarios.address.market }</td>
                                    <td>${ usuarios.address.street }</td>
                                    <td>${ usuarios.minimum_nights }</td>
                                    <td>${ usuarios.maximum_nights }</td>




                                </tr>
                                       `
            }
        },
        error: function(err) {
            $('#error').text(err.responseJSON.err.message);
            $('#error').show();

        }
    });
});

$('input').on('focus', function(e) {

    $('#error').hide();
});