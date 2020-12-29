
$(document).ready(function() {
    $(document).on('submit', 'contactForm', function() {
      
        var data = getDataFromForm();

        console.log(validateInputs(data));
        console.log("here")
    
        if (validateInputs(data) != 'undefined') {
            console.log("here")
            var clearedData = escapeHtml(data);
            console.log("clearedData" + clearedData);
    
            var mail = createEmail(clearedData);
    
            console.log("Mail: " + mail)
    
            postReqest(mail);
        }


      return false;
     });
});



function getDataFromForm () {
    var values = [];

    for (var i = 0; i < 4; i++) {
        values.push(document.getElementById('contactForm').elements[i].value);
    }
    
    return values;
} 


function validateInputs (inputs) {
    var errors = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].length == 0) {
            errors.push("All values have to be entered!");
        }
    }    
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].length > 1000) {
            errors.push("The max. length is 1000 chars!")
        }
    }

    if (validateEmail(inputs[1] == false)) {
        errors.push("Please enter a valid E-Mail!")
    }

    return errors[0];

}

function validateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true)
  }
    return (false)
}

function escapeHtml(inputs) {

    var clearedInputs = [];

    for (var i = 0; i < inputs.length; i++) {
        var text = inputs[i];

        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        text.replace(/[&<>"']/g, function (m) { 
            clearedInputs.push(map[m]); 
        });
    }

    return clearedInputs;
}


function createEmail (inputs) {

    console.log(inputs);

    var mail = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                display: flex;
                flex-direction: column;
            }
        </style>
    </head>
    <body>
        <h1>Hallo Loris</h1>
    
        <h2>Du hast einen neue Nachricht von ${inputs[0]}:${inputs[1]}. </h2>
    
        <h3>${inputs[2]}</h3>
        <h4>${inputs[3]}</h4>
        ${inputs}
    </body>
    </html>`;

    return mail;
}

function postReqest (mail) {
    jQuery.ajax({
        type: "POST",
        url: './php/sendMail.php',
        dataType: 'JSON',
        data: { functionname: 'sendMail', arguments: mail},
        success: function (obj, textstatus) {
          if (!('error' in obj)) {
            yourVariable = obj.result;
          }
          else {
            console.log("Error" + obj.error);
          }
        }
      });
      console.log("dome!");
}
