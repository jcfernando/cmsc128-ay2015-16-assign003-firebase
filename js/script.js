
var myDataRef = new Firebase('https://cmsc128-fernando.firebaseio.com/');
   
   $('#submit-button').on('click', function(){
   		  Materialize.toast('Guest Added!', 4000) // 4000 is the duration of the toast
          var fullName = $('#full-name').val();
          var organization = $('#organization').val();
          var contact = $('#contact').val();
          myDataRef.push({ 'fullName' : fullName, 'organization': organization, 'contact' : contact});
          $('#full-name').val("");
          $('#organization').val("");
          $('#contact').val("");
          
          
          
          
    });

   	myDataRef.on('child_added', function(snapshot) {
       var message = snapshot.val();
       displayChatMessage(message.fullName, message.organization, message.contact);
    });
      function displayChatMessage(fullName, organization, contact) {
			var template = '<tr>' + 
              					'<td>' + fullName + '</td>' +
              					'<td>' + organization + '</td>' +
              					'<td>' + contact + '</td>' +
           				  '</tr>';
           				  
      	$('#table-body').append(template);
      };	
      
      