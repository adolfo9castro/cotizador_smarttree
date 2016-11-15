<?php
    //Nota. Cuerpo o contenido del mensaje.
    
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];

    $cuerpo = "Posible cliente\n\n";
    $cuerpo .= "Nombre: " . $nombre . " \n\n";
    $cuerpo .= "Correo electrónico: " . $email . " \n\n";
    $cuerpo .= "Teléfono: " . $telefono . " \n\n";

    //Nota. Cabeceras para el envió en formato HTML.
    $headers = "MIME-Version: 1.0rn";
    $headers .= "Content-type: text/html; charset=iso-8859-1rn";

    //Nota. Dirección del remitente.
    $headers .= "From: " . $email . "n";

    //Nota. Dirección de respuesta.
    $headers .= "Reply-To: " . $email . "n";

    //Nota. Ruta del mensaje desde origen a destino.
    $headers .= "Return-path: " . $email . "n";

    //Nota. Funcion Mail de PHP:
    mail("adolfo.dimmu@gmail.com","Contacto de:",$cuerpo,$headers);


    //Confirmación de envio del mensaje.
    echo "El comentario se ha enviado con exito, te contactaremos en la brevedad!";
?>