var ideasList = [];

$(document).ready(function() {
ideasList = JSON.parse(localStorage.getItem('ideasList')) || [];
// var sortedIdeasList = ideasList.sort(function(a, b) {return b-a});
writeIdeas(ideasList);
});


function Idea(title, body) {
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

$('#save-button').on('click', function() {
  var titleInput = $('#title-input').val();
  var bodyInput = $('#body-input').val();
  generateNewIdea(titleInput, bodyInput);
  $('#title-input').focus();
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    var titleInput = $('#title-input').val();
    var bodyInput = $('#body-input').val();
    generateNewIdea(titleInput, bodyInput);
    $('#title-input').focus();
  }
});

function generateNewIdea(titleInput, bodyInput) {
  var idea = new Idea(titleInput, bodyInput);
  ideasList.push(idea);
  storeIdea();
  renderIdeaToHTML(idea);
  clearFields();
}

function storeIdea() {
  localStorage.setItem("ideasList", JSON.stringify(ideasList));
}

function writeIdeas(ideasList) {
  ideasList.forEach(function(idea) {
    renderIdeaToHTML(idea);
  });
}

function renderIdeaToHTML(idea) {
  $('.idea-list').prepend(`<li id=${idea.id}><h3 contenteditable="true" class="idea-title">${idea.title}</h3><button class="delete-idea"></button><p contenteditable="true" class="body-input"> ${idea.body}</p><section class="vote"><button class="upvote"></button><article class="downvote"></article><p class="quality-control">quality: ${idea.quality}</p></section></li>`);
  // storeIdea();
}

function clearFields() {
  $('#title-input').val('');
  $('#body-input').val('');
  $('#search-bar').val('');
}

$('.idea-list').on('click', '.delete-idea', function(){
  var id = $(this).parent().attr('id');
  var idea =  findIdea(id);
  deleteIdeaFromStorage(idea);
  $(this).parent().remove();
});

function findIdea(id) {
  return ideasList.find(function(idea) {
    return idea.id === parseInt(id);
  });
}

function deleteIdeaFromStorage(idea) {
  ideasList = ideasList.filter(function(ideasToKeep) {
    return ideasToKeep != idea;
  });
  localStorage.removeItem(idea);
  updateIdeasList(ideasList);
}

function updateIdeasList(ideasList) {
  localStorage.setItem('ideasList', JSON.stringify(ideasList));
  writeIdeas(ideasList);
}

$('.idea-list').on('click', '.upvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  if ($quality.text() === 'quality: swill') {
     $quality.text('quality: plausible');
     idea.quality = 'plausible';
  } else if ($quality.text() === 'quality: plausible') {
     $quality.text('quality: genius');
     idea.quality = 'genius';
  }
  storeIdea();
});

$('.idea-list').on('click', '.downvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  if ($quality.text() === 'quality: genius') {
    $quality.text('quality: plausible');
    idea.quality = 'plausible';
  } else if ($quality.text() === 'quality: plausible') {
    $quality.text('quality: swill');
    idea.quality = 'swill';
  }
});

// $('.idea-list').on('click', 'idea-title', function (){
//   var idea = findIdea($(this).parent().parent().attr('id'));
//   var ideaHTML = $('this').html();
//   var editableIdeaHTML = ;
//   localStorage.newContent = editedContent;
//   // editableIdeaHTML.blur(editableIdeaHTMLBlurred);
// });


var theContent = $('#idea-title');

$('.idea-list').on('blur','idea-title', function(){
  var idea = findIdea($(this).parent().parent().attr('id'));
  var theContent = $('this').html();
  var editedContent = theContent.html();
  localStorage.newContent = editedContent;

  storeIdea();
});

// function editableIdeaHTMLBlurred () {
//   var html = $(this).val();
//   var viewableText = $('<h3>');
//   viewableText.html(html);
//   $(this).replaceWith(viewableText);
//   $(viewableText).click(viewableText)
//   $(viewableText).click(editIdeaTitle);
// }


$( "#search-bar" ).keyup(function() {
  console.log(); //do we want this console.log() function here?
  var filterWord = $(this).val();
  var notTheIdeasIWant = $( "li:not(:contains(" + filterWord + "))" );
  var theIdeaIWant = $("li:contains(" + filterWord + ")"
  );
  theIdeaIWant.show();
  notTheIdeasIWant.hide();
});
