$(document).ready(function() {
    
    // check if the user exists and either hide or show username form
    if (localStorage.getItem("username")) {
        hideForm();
    } else {
        showForm();
    }

    // add submit event to form
    $('#name-form').on('submit', function(event) {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        // set the value in the input to the "username" key in localstorage
        localStorage.setItem("username", $('input:text').val());
        // hide the form
        hideForm();
    });

    // hides the form and adds welcome text to the page
    function hideForm() {
        $('#name-form').hide();
        $('.content p:first').text("Welcome back " + localStorage.getItem("username"));
        console.log("found user");
    }

    // shows the form and adds login text to the page
    function showForm() {
        $("#name-form").show();
        $('.content p:first').text("Please enter a username");
        console.log("couldn't find user");
    }
});
