
var myDataRef = new Firebase('https://cmsc128-fernando.firebaseio.com/');
   
   $('#submit-button').on('click', function(){
   		  Materialize.toast('Guest Added!', 4000) // 4000 is the duration of the toast
          var fullName = $('#full-name').val();
          var organization = $('#organization').val();
          var contact = $('#contact').val();
          myDataRef.push({ 'Full Name' : fullName, 'organization': organization, 'contact' : contact});
          $('#full-name').val("");
          $('#organization').val("");
          $('#contact').val("");
    });

   	myDataRef.on('child_added', function(snapshot) {
       var message = snapshot.val();
       displayChatMessage(message.name, message.text);
    });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };