///////////////////////////////FUNCION OBTENER NOMBRE/////////////////////////////
$('form.form-nombre').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/GetCustNom',
        data: $('form').serialize(),

        success: function(res) {
            console.log(res);
            if (res.customers.length === 0) {
                alert('No se encontro ningun usuario por nombre');
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
/////////////////////////////////////////FUNCION OBTENER POR PAIS////////////
$('form.form-pais').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/GetCustCountry',
        data: $('form').serialize(),
        success: function(respuesta) {
            console.log(respuesta);
            if (respuesta.customers.length === 0) {
                alert('No se encontro a nadie con ese pais');
            }
            contenido.innerHTML = null

            for (let usuarios of respuesta.customers) {

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
            alert(err.responseJSON.err.message);
            $('#error').text(err.responseJSON.err.message);
            $('#error').show();

        }
    });
});

////////////////////////////////FUNCION OBTENER ID//////////////////////////
$('form.form-id').on('submit', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/GetCustID',
        data: $('form.form-id').serialize(),
        success: function(respuesta) {
            console.log(respuesta);
            if (respuesta.customers.length === 0) {
                alert('No se encontro ningun usuario con el id');
            }
            contenido.innerHTML = null

            for (let usuarios of respuesta.customers) {

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
            //  alert('Cliente registrado con exito');
        },

        error: function(err) {
            alert(err.responseJSON.err.message);
            $('#error').text(err.responseJSON.err.message);
            $('#error').show();

        }
    });
});