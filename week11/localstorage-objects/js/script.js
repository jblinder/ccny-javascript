 $(document).ready(function() {
     // updates the page content based on whether there is a current user in local storage
     updatePage();

     // listen to submit event for the form
     $('#name-form').on('submit', function(e) {
         // prevent the submit button from relaoding the page
         e.preventDefault();

         // get the values for each input
         var input = $('#username').val();
         var password = $('#password').val();
         var number = $('#number').val();

         // create a user object from the form data
         var user = {
             username: input,
             password: password,
             favNum: number
         };
         // convert the user to a string and save it to localStorage
         localStorage.setItem('user', JSON.stringify(user));
         // updates the page content based on whether there is a current user in local storage
         updatePage();
     });

     function updatePage() {
         // get the user key from local storage and convert it to a Javscript object
         var user = JSON.parse(localStorage.getItem('user'));
         // if there is no user for the "user" key, show the form, otherwiser welcome the user
         if (!user) {
             $('#name-form').show();
         } else {
             $('#name-form').hide();
             $('.content').text("Welcome back " + user.username + ". You're favorite number is " + user.favNum);
         }
     }
 });
