
function post () {
    var data = getDataFromForm();

    jQuery.ajax({
        type: "POST",
        headers: "",
        url: 'http://193.23.127.5:3099/sendMail',
        dataType: 'JSON',
        data: {
            "name": data[0],
            "mail": data[1],
            "subject": data[2],
            "message": data[3]
        }
    })
    .then(() => {
        console.log("Success!" + createEmail(data))
    })
    .catch((err) => {
        console.error(err)
    })
}





function getDataFromForm() {
    var values = [];

    for (var i = 0; i < 4; i++) {
        values.push(document.getElementById('contactForm').elements[i].value);
    }

    return values;
}


