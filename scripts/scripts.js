$('#save-button').on('click', function() {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  saveIdea(titleInput, bodyInput);
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    var titleInput = $('#title-input').val();
    var bodyInput = $('#body-input').val();
    saveIdea(titleInput, bodyInput);
  }
});

function saveIdea(titleInput, bodyInput) {
  var newIdea = '<li><h3> class="idea-title"' + titleInput + '</h3>' + '<button class="remove-idea">x</button><break><p class="body-input">' + bodyInput + '</p><break>';
  addIdeaToList(newIdea);
  $('#title-input').focus();
}

function addIdeaToList(newIdea) {
  $('.idea-list').prepend(newIdea);
}

//
// $('.linked-list').on('click', '.new-url-link', markAsRead);
//
// function addToLinkList(siteLink) {
//   $('.linked-list').append(siteLink);
//   clearFields();
//   countTotals();
// }
