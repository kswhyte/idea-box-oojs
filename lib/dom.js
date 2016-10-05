const $ = require('jquery')
const controller = require('./controller')
const idea = require('./idea')
const ideaBox = require('./idea-box')

const dom = {
  $saveButton: $('#save-button'),
  $titleInput: $('#title-input'),
  $bodyInput: $('#body-input'),
  $ideaList: $('.idea-list'),
  $searchBar: $('#search-bar'),
}

$(document).ready(function() {
  controller.documentReady()
  console.log(ideaBox.ideasList)
});

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

$('.idea-list').on('focusout', '.idea-title', function(){
  var id = $(this).parent().attr('id');
  var newTitle =  $(this).text();
  updateTitle(id, newTitle);
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
  var id = $(this).parent().attr('id');
  var newBody =  $(this).text();
  updateBody(id, newBody);
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
  var idea =  findIdea(id);
  deleteIdeaFromStorage(idea);
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
