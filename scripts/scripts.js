var ideasList = [];

ideasList = JSON.parse(localStorage.getItem('ideasList')) || [];
console.log(ideasList); //remove this after testing

function Idea(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

$('#save-button').on('click', function() {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  generateNewIdea(titleInput, bodyInput);
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    var titleInput = $('#title-input').val();
    var bodyInput = $('#body-input').val();
    generateNewIdea(titleInput, bodyInput);
  }
});

// function getIdeaInput() {
//   var titleInput = $('#title-input').val();
//   var bodyInput = $('#body-input').val();
//   storeIdea();
// }

function storeIdea() {
  localStorage.setItem('ideasList', JSON.stringify(ideasList));
}

function generateNewIdea(titleInput, bodyInput) {
  var idea = new Idea(titleInput, bodyInput);
  ideasList.unshift(idea);
  renderIdeaToPage(idea);
  storeIdea();
}

function renderIdeaToPage(idea) {
  $('.idea-list').prepend('<li><h3 class="idea-title">' + idea.title + '</h3>' + '<button class="remove-idea"> x </button><break><p class="body-input">' + idea.body + '</p><break><section class="vote"><img id="upvote" src="./images/svg-images/upvote.svg" /><img id="down-vote" src="./images/svg-images/downvote.svg" /><p>quality:</p>' + idea.quality + '</section><break>');
}




//To DO:
// get the array out of local storage on page load
// write any ideas in the array to page on load

// $( window ).load(function() { ... })
