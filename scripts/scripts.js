var ideaStore = [];

$('#save-button').on('click', function() {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  generateNewIdea(titleInput,bodyInput);
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    var titleInput = $('#title-input').val();
    var bodyInput = $('#body-input').val();
  }
});

function getIdeaInput () {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  sendIdeasToArray(titleInput,bodyInput);
}

function Idea(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

function generateNewIdea(titleInput, bodyInput) {
  var idea = new Idea(titleInput,bodyInput);
  ideaStore.unshift(idea);
  renderIdeaToPage(idea);
}

function renderIdeaToPage(idea) {
  $('.idea-list').prepend('<li><h3 class="idea-title">' + idea.title + '</h3>' + '<button class="remove-idea">x</button><break><p class="body-input">' + idea.body + 'quality' + idea.quality'</p><break>');
}

//TODO: Store the array in local storage
// get the array out of local storage on page load
// write any ideas in the array to page on page load




//
// $('.linked-list').on('click', '.new-url-link', markAsRead);
//
// function addToLinkList(siteLink) {
//   $('.linked-list').append(siteLink);
//   clearFields();
//   countTotals();
// }
