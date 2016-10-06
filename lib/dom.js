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
  ideaBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
  controller.saveButtonClick()
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    ideaBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
    controller.saveButtonClick()
  }
});

$('.idea-list').on('focusout', '.idea-title', function(){
  // var $id = $(this).parent().attr('id');
  // var $newTitle =  $(this).text();
  // Idea.updateTitle($id, $newTitle);
});

$('.idea-list').on('keypress', '.idea-title', function(event) {
  // var id = $(this).parent().attr('id');
  // var newTitle = $(this).text();
  // if (event.which == 13) {
  //     event.preventDefault();
  //     $(this).blur();
  //   }
});

$('.idea-list').on('focusout', '.body-input', function(){
  // var $id = $(this).parent().attr('id');
  // var $newBody =  $(this).text();
  // Idea.updateBody($id, $newBody);
});

$('.idea-list').on('keypress', '.body-input', function(event) {
  // var id = $(this).parent().attr('id');
  // var newBody = $(this).text();
  // if (event.which == 13) {
  //     event.preventDefault();
  //     $(this).blur();
  // }
});

$('.idea-list').on('click', '.remove-idea', function(e){
  console.log(e);
  ideaBox.removeIdeaButtonClick(e.target.parentElement.id)
  controller.removeIdeaButtonClick()
});

$('.idea-list').on('click', '.upvote', function() {
  ideaBox.upvoteIdeaButtonClick(e.target.parentElement.id)
  controller.upvoteIdeaButtonClick()
});

$('.idea-list').on('click', '.downvote', function() {
  ideaBox.downvoteIdeaButtonClick(e.target.parentElement.id)
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
