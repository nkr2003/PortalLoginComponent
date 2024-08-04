$(document).ready(function () { //signin.html//
    $("#abcde").keypress(function (event) {
        if (event.which === 13) {
            $("#qw5").click();
        }
    });

    $("#qw5").click(function () {
    });
});



function f1() { //personalpage1.html//
    let temp = $("#abcd").val();
    let messageBox = $("#messageBox");
    let regEx = /^[A-Za-z\s]+$/;
    if (temp.length <= 2 || temp.length === 0) {
        messageBox.text("Enter a valid Name").show();
        return false;
    }
    if (!regEx.test(temp)) {
        messageBox.text("A name should not contain any numerics or any special characters").show();
        return false;
    }
    else {
        messageBox.hide();
        return true;
    }
}
$(document).ready(function () {
    $("#qw1").click(function () {
        if (f1()) {
            window.location.href = "personalpage2.html";
        }
    });
});



function f2() { //personalpage3.html    &   business.html//
    let temp = $("#abcd");
    let messageBox = $("#messageBox");
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailPattern.test(temp.val())) {
        messageBox.text("Enter a valid Address").show();
        return false;
    }
    else {
        messageBox.hide();
        return true;
    }
}
$(document).ready(function () {
    $("#qw2").click(function () {
        if (f2()) {
            window.location.href = "personalpage4.html";
        }
    });
});

$(document).ready(function () {
    $("#qw3").click(function () {
        if (f1()) {
            window.location.href = "";
        }
    });
});


function f4() { //personalpage2.html
    var month = $("#poi1").val();
    var day = $("#poi2").val();
    var year = $("#poi3").val();
    var gender = $("#poi4").val();
    var messageBox = $("#messageBox");

    if (month === "") {
        messageBox.text("Select Month").show();
        return false;
    }
    if (month === "February") {
        messageBox.text("Date should be on or before 29").show();
        return false;
    }
    if (day === "") {
        messageBox.text("Enter Day").show();
        return false;
    }
    if (day.length !== 2 || (day < 1 || day > 31)) {
        messageBox.text("Enter a valid Day").show();
        return false;
    }
    if (year === "") {
        messageBox.text("Enter Year").show();
        return false;
    }
    if (year.length !== 4 || (year < 1924 || year > 2024)) {
        messageBox.text("Enter a valid Year").show();
        return false;
    }
    if (gender === "") {
        messageBox.text("Select Gender").show();
        return false;
    }
    else {
        messageBox.hide();
        return true;
    }
}

$(document).ready(function () {
    $("#nn1").click(function () {
        if (f4()) {
            window.location.href = "personalpage3.html";
        }
    });
});

function f5() { //personalpage4.html   &  forgotpass.html   &   signin.html//
    let temp = $("#abcd");
    if (temp.attr("type") === "password") {
        temp.attr("type", "text");
    } else {
        temp.attr("type", "password");
    }
    let temp1 = $("#abcde");
    if (temp1.attr("type") === "password") {
        temp1.attr("type", "text");
    } else {
        temp1.attr("type", "password");
    }
}

function f6() { //personalpage4.html>//
    let temp = $("#abcd").val();
    let temp1 = $("#abcde").val();
    let regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;
    let messageBox = $("#messageBox");

    if (temp === "") {
        messageBox.text("Enter the Password").show();
        return false;
    }

    if (!regEx.test(temp)) {
        messageBox.text("Should contain 8 Characters, at least one Upper case, one Lower Case, one digit, and one special character").show();
        return false;
    }

    if (temp1 === "") {
        messageBox.text("Enter the Confirm Password").show();
        return false;
    }

    if (temp !== temp1) {
        messageBox.text("Passwords don't match").show();
        return false;
    } else {
        messageBox.hide();
        return true;
    }
}
$(document).ready(function () {
    $("#qw4").click(function () {
        if (f6()) {
            window.location.href = "useraccount.html";
        }
    });
});

function f7() { //signin.html//
    let temp = $("#abc");
    let temp1 = $("#abcde");
    let messageBox = $("#messageBox");
    let regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let regEx1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;
    if (temp.val().length == "") {
        messageBox.text("Email should not be empty").show();
        return false;
    }
    if (!regEx.test(temp.val())) {
        messageBox.text("Enter a valid address").show();
        return false;
    }
    if (!regEx1.test(temp1.val())) {
        messageBox.text("Password must contains a Upper case, Lower case, a numeric and a special character and must be 8 characters").show();
        return false;
    }
    if (temp1.val() == "") {
        messageBox.text("Password must not be empty").show();
        return false;
    }
    else {
        messageBox.hide();
        return true;
    }
}
$(document).ready(function () {
    $("#qw5").click(function () {
        if (f7()) {
            window.location.href = "useraccount.html";
        }
    });

});

function f10() { //forgotpass.html//
    let temp = $("#abc").val();
    let temp1 = $("#abcd").val();
    let temp2 = $("#abcde").val();
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;
    let messageBox = $("#messageBox");
    if (temp.length === 0 && temp === "") {
        messageBox.text("Enter Phone number or Recovery Email").show();
        return false;
    }
    if (!isNaN(temp)) {
        if (temp.length !== 10) {
            messageBox.text("Enter a valid Phone Number").show();
            return false;
        }
    } else {
        if (!emailPattern.test(temp)) {
            messageBox.text("Enter a valid Email Address").show();
            return false;
        }
    }
    if (temp1 === "") {
        messageBox.text("Enter the Password").show();
        return false;
    }

    if (!regEx.test(temp1)) {
        messageBox.text("Should contain 8 Characters, at least one Upper case, one Lower Case, one digit, and one special character").show();
        return false;
    }
    if (temp2 === "") {
        messageBox.text("Enter the Confirm Password").show();
        return false;
    }

    if (temp1 !== temp2) {
        messageBox.text("Passwords don't match").show();
        return false;
    }
    messageBox.hide();
    return true;
}

$(document).ready(function () {
    $("#qw6").click(function () {
        if (f10()) {
            alert("A reset password link has been sent to you successfully!");
            window.location.href = "signin.html";
        }
    });
});



function f13() { //forgotpass.html//
    let temp = confirm("You are cancelling the process, you will be redirected to the previous page");
    if (temp === true) {
        window.location.href = "signin.html";
    }
}