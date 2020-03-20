$('form').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/GetCustNom',
        data: $('form').serialize(),

        success: function(res) {
            console.log(res);
            if (res.customers.length === 0) {
                alert('Usuario no encontrado');
            }
            contenido.innerHTML = null

            for (let usuarios of res.customers) {

                contenido.innerHTML += `
                                
                                <tr>
                                    <th scope="row">${ usuarios.id }</th>
                                    <td>${ usuarios.firstName }</td>
                                    <td>${ usuarios.lastName }</td>
                                    <td>${ usuarios.address }</td>
                                    <td>${ usuarios.country }</td>
                                    <td>${ usuarios.city }</td>
                                    <td>${ usuarios.district }</td>



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