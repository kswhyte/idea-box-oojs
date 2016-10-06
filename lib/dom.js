const $ = require('jquery')
const controller = require('./controller')
const Idea = require('./idea')
const ideaBox = require('./idea-box')

const dom = {
  $saveButton: $('#save-button'),
  $titleInput: $('#title-input'),
  $bodyInput: $('#body-input'),
  $ideaList: $('.idea-list'),
  $searchBar: $('#search-bar')
}

$(document).ready(function() {
  controller.documentReady()
});

$('#save-button').on('click', function() {
  ideaBox.addIdeaToList(dom.$titleInput.val(), dom.$bodyInput.val())
  controller.saveButtonClick()
  $('#title-input').focus()
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    ideaBox.addIdeaToList(idea.id, dom.$titleInput.val(), dom.$bodyInput.val());
    controller.saveButtonClick()
    $('#title-input').focus()
  }
});

$('.idea-list').on('focusout', '.idea-title', function(){
  var $id = $(this).parent().attr('id');
  var $newTitle =  $(this).text();
  Idea.updateTitle($id, $newTitle);
});

$('.idea-list').on('keypress', '.idea-title', function(event) {
  var id = $(this).parent().attr('id');
  var newTitle = $(this).text();
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
    }
});

$('.idea-list').on('focusout', '.body-input', function(){
  var $id = $(this).parent().attr('id');
  var $newBody =  $(this).text();
  Idea.updateBody($id, $newBody);
});

$('.idea-list').on('keypress', '.body-input', function(event) {
  var id = $(this).parent().attr('id');
  var newBody = $(this).text();
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('.idea-list').on('click', '.delete-idea', function(){
  var id = $(this).parent().attr('id');
  var idea =  ideabox.findIdea(id);
  controller.deleteIdeaFromStorage(idea);
  $(this).parent().remove();
});

$('.idea-list').on('click', '.upvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  //conditionals taken out
  storeIdea();
});

$('.idea-list').on('click', '.downvote', function() {
  var idea = findIdea($(this).parent().parent().attr('id'));
  var $quality = $(this).siblings('p');

  //conditionals taken out
  storeIdea();
});

$( "#search-bar" ).keyup(function() {
  var filterWord = $(this).val();
  var notTheIdeasIWant = $( 'li:not(:contains(' + filterWord + '))' );
  var theIdeaIWant = $('li:contains(' + filterWord + ')'
  );
  theIdeaIWant.show();
  notTheIdeasIWant.hide();
});

module.exports = dom
