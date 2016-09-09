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
  localStorage.getItem('ideasList');
}

function writeIdeas() {
  ideasList.forEach( function(idea) {
    renderIdeaToPage(idea);
  });
}

function renderIdeaToPage(idea) {
  $('.idea-list').prepend(`<li id=${idea.id}><h3 class="idea-title">${idea.title}</h3><button class="delete-idea"> x </button><p class="body-input"> ${idea.body}</p><section class="vote"><button type="button" class="upvote"></button><button type="button" class="downvote"></button><p class="quality-control">quality: ${idea.quality}</p></section></li>`);
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

function findIdea(id) {
  return ideasList.find(function(idea){
    return idea.id === parseInt(id)
  });
}

$('.idea-list').on('click', '.upvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  if ($quality.text() === 'quality: swill') {
     $quality.text('quality: plausible');
     idea.quality = 'plausible'
  } else if ($quality.text() === 'quality: plausible') {
     $quality.text('quality: genius');
     idea.quality = 'genius';
  };
  storeIdea()
});

$('.idea-list').on('click', '.downvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  if ($quality.text() === 'quality: genius') {
    $quality.text('quality: plausible');
    idea.quality = 'plausible'
  } else if ($quality.text() === 'quality: plausible') {
    $quality.text('quality: swill');
    idea.quality = 'swill';
  };
  storeIdea()
});




// $('.linked-list').on('click', '.mark-as-read-button', markAsRead);
//
// function markAsRead() {
//   $(this).parent().toggleClass('read');
//   countTotals();
//   clearReadButtonToggle();
// }


$( "#search-bar" ).keyup(function() {
  console.log()
  var filterWord = $(this).val();
  var notTheIdeasIWant = $( "li:not(:contains(" + filterWord + "))" );
  var theIdeaIWant = $("li:contains(" + filterWord + ")"
  );
  theIdeaIWant.show();
  notTheIdeasIWant.hide();
});


// theIdeaIWant.show().next("dd").show();
// notTheIdeasIWant.hide().next("dd").hide();
