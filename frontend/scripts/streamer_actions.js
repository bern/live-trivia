function askQuestion() {
    var obj = $('#ask-question').serializeJSON();
    var jsonString = JSON.stringify(obj);
    console.log(jsonString)
    /*$.ajax({
        type: 'POST',
        url: 'http://791fabb9.ngrok.io/users',
        data: JSON.stringify(obj),
        success: function(data) {
            console.log("success submitting lunchmate")
        },
        error: function(data) {
            console.log("error submitting lunchmate")
            // alert("ERROR")
        }
    });*/

    // alert("Added "+obj["first_name"]+" "+obj["last_name"]+" to the system!");
}