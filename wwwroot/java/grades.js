$("#btnsend").click(function () {
    //Assign Variables to create the calculator
    var assign = $("#assignments").val();
    var assignmentpercent = .55;
    var assignmentgrade = assignmentpercent * assign;
    var group = $("#gp").val();
    var grouppercent = .05;
    var groupgrade = grouppercent * group;
    var quiz = $("#quiz").val();
    var quizpercent = .1;
    var quizgrade = quiz * quizpercent;
    var exam = $("#exam").val();
    var exampercent = .2;
    var examgrade = exam * exampercent;
    var intex = $("#intex").val();
    var intexpercent = .1;
    var intexgrade = intex * intexpercent;
    var totalgrade = assignmentgrade + groupgrade + quizgrade + examgrade + intexgrade;
    var lettergrade = "A";
    if (totalgrade >= 94) {
        lettergrade = "A";
    }
    else if (totalgrade >= 90) {
        lettergrade = "A-";
    }
    else if (totalgrade >= 87) {
        lettergrade = "B+";
    }
    else if (totalgrade >= 84) {
        lettergrade = "B";
    }
    else if (totalgrade >= 80) {
        lettergrade = "B-";
    }
    else if (totalgrade >= 77) {
        lettergrade = "C+";
    }
    else if (totalgrade >= 74) {
        lettergrade = "C";
    }
    else if (totalgrade >= 70) {
        lettergrade = "C-";
    }
    else if (totalgrade >= 67) {
        lettergrade = "D+";
    }
    else if (totalgrade >= 64) {
        lettergrade = "D";
    }
    else if (totalgrade >= 60) {
        lettergrade = "D-";
    }
    else {
        lettergrade = "E";
    }
    //Output the grade
    alert("Percentage in the Class: " + totalgrade + "% " + " Letter Grade: " + lettergrade);
});