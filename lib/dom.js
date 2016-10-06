const $ = require('jquery')

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
  ideaBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
  controller.saveButtonClick()
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    ideaBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
    controller.saveButtonClick()
  }
});

$('.idea-list').on('focusout', '.idea-title', function(e){
  let ideaId = parseInt(e.target.parentElement.id)
  let newTitle =  $(this).text();
  Idea.prototype.ideaTitleFocusOut(ideaId, newTitle)
  controller.ideaTitleFocusOut()
});

$('.idea-list').on('keypress', '.idea-title', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('.idea-list').on('focusout', '.body-input', function(e){
  let ideaId = parseInt(e.target.parentElement.id)
  let newBody =  $(this).text();
  Idea.prototype.ideaBodyFocusOut(ideaId, newBody)
  controller.ideaBodyFocusOut()
});

$('.idea-list').on('keypress', '.body-input', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('.idea-list').on('click', '.remove-idea', function(e){
  let ideaId = parseInt(e.target.parentElement.id)
  ideaBox.removeIdeaButtonClick(ideaId)
  controller.removeIdeaButtonClick()
});

$('.idea-list').on('click', '.upvote', function(e) {
  let ideaId = parseInt(e.target.parentElement.parentElement.id)
  Idea.prototype.upvoteIdeaButtonClick(ideaId)
  controller.upvoteIdeaButtonClick()
});

$('.idea-list').on('click', '.downvote', function(e) {
  let ideaId = parseInt(e.target.parentElement.parentElement.id)
  Idea.prototype.downvoteIdeaButtonClick(ideaId)
  controller.downvoteIdeaButtonClick()
});

$( "#search-bar" ).keyup(function() {
  // var filterWord = $(this).val();
  // var notTheIdeasIWant = $( 'li:not(:contains(' + filterWord + '))' );
  // var theIdeaIWant = $('li:contains(' + filterWord + ')'
  // );
  // theIdeaIWant.show();
  // notTheIdeasIWant.hide();
});

module.exports = dom

const controller = require('./controller')
const Idea = require('./idea')
const ideaBox = require('./idea-box')
