function script () {
    var data = getDataFromForm();

    console.log(validateInputs(data));

    if (validateInputs(data) != undefined) {
        var data = escapeHtml(data);


    }


}



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

        clearedInputs.push(text.replace(/[&<>"']/g, function (m) { return map[m]; }));
    }

    return clearedInputs;
}


function createEmail (inputs) {
    
}
