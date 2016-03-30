
var myDataRef = new Firebase('https://cmsc128-fernando.firebaseio.com/');
      
   $('#submit-button').on('click', function(){
          var fullName = $('#full-name').val();
          var organization = $('#organization').val();
          var contact = $('#contact').val();
          myDataRef.push({ 'Full Name' : fullName, 'organization': organization, 'contact' : contact});
          $('#full-name').val("");
          $('#organization').val("");
          $('#contact').val("");
    });