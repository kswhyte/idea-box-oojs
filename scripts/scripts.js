var ideasList = [];

$(document).ready (function () {
ideasList = JSON.parse(localStorage.getItem('ideasList')) || [];
writeIdeas(ideasList);
});
// this is not writing the ideasList back to the DOM

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

function generateNewIdea(titleInput, bodyInput) {
  var idea = new Idea(titleInput, bodyInput);
  ideasList.unshift(idea);
  storeIdea();
  renderIdeaToPage(idea);
  clearFields();
}

function storeIdea() {
  localStorage.setItem('ideasList',JSON.stringify(ideasList));
}

function retrieveIdeas() {
  localStorage.getItem('ideasList', JSON.parse(ideasList));
}

function writeIdeas() {
  ideasList.forEach( function(idea) {
    renderIdeaToPage(idea);
  });
}

function renderIdeaToPage(idea) {
  $('.idea-list').prepend('<li><h3 class="idea-title" data="' + idea.id + '">' + idea.title + '</h3>' + '<button class="delete-idea"> x </button><p class="body-input">' + idea.body + '</p><section class="vote"><button type="button" class="upvote"></button><button type="button" class="downvote"></button><p class="quality-control">quality: ' + idea.quality + '</p></section>');
}

function clearFields() {
  $('#title-input').val('');
  $('#body-input').val('');
  $('#search-bar').val('');
}

$('.idea-list').on('click', '.delete-idea', function() {
  debugger;
  deleteIdea($(this).siblings(localStorage.getItem('id'))); //need to access value of id and remove it from array
  $(this).parent().remove();
});

function deleteIdea(ideaId) {
  localStorage.removeItem(ideaId);
}


$('.idea-list').on('click', '.upvote', function() {
  if ($('.quality-control').text('quality: swill')) {
    $(this).siblings('.quality-control').text('quality: plausible');
  } else if ($('.quality-control').text('quality: plausible')) {
    $(this).siblings('.quality-control').text('quality: genius');
  } //will not change to genius from plausible
});

$('.idea-list').on('click', '.downvote', function() {
  if ($('.quality-control').text('quality: genius')) {
    $(this).siblings('.quality-control').text('quality: plausible');
  } else if ($('.quality-control').text('quality: plausible')) {
    $(this).siblings('.quality-control').text('quality: swill');
  } //will not change to swill from plausible
});




// $('.linked-list').on('click', '.mark-as-read-button', markAsRead);
//
// function markAsRead() {
//   $(this).parent().toggleClass('read');
//   countTotals();
//   clearReadButtonToggle();
// }




//To DO:
// get the array out of local storage on page load
// write any ideas in the array to page on load

// $( window ).load(function() { ... })
