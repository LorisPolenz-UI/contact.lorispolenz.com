<?php


    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    if($_POST['functionname'] == 'sendMail') {  
        mail('loris.polenz@gmail.com', 'New Contact Request',$_POST['arguments'], $headers);
    }

?>