// JavaScript source code
function checkAnswer() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;;
    if (question1 == "Nursultan") {
        correct++;
    }
    if (question2 == "Mogadishu") {
        correct++;
    }
    if (question3 == "Cape Town") {
        correct++;
    }
    if (question4 == "Canberra") {
        correct++;
    }
    if (question5 == "Kiev") {
        correct++;
    }
    document.getElementById("after_submit").style.display = "visible";
    document.getElementById("correct_answer").innerHTML = "you got" + " " + correct + " " + "correct. ";
}