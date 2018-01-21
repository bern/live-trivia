function askQuestion() {

    var question = {
        "timer": $('#question-timer').val(),
        "question": $('#question-text').val(),
        "answers": [
            $('#answer1-text').val(),
            $('#answer2-text').val(),
            $('#answer3-text').val()
        ],
        "correct": $('input[name=correct]:checked').val()
    }

    console.log(question)

//this works, you just need to send the question json

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