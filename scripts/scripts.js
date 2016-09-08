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

function storeIdea() {
  localStorage.setItem('ideasList', JSON.stringify(ideasList));
}

function generateNewIdea(titleInput, bodyInput) {
  var idea = new Idea(titleInput, bodyInput);
  ideasList.unshift(idea);
  renderIdeaToPage(idea);
  storeIdea();
  clearFields();
}

// function renderIdeaToPage(idea) {
//   $('.idea-list').prepend('<li><h3 class="idea-title">' + idea.title + '</h3>' + '<button class="delete-idea"> x </button><break><p class="body-input">' + idea.body + '</p><break><section class="vote"><img id="upvote" src="./images/svg-images/upvote.svg" /><img id="down-vote" src="./images/svg-images/downvote.svg" /><p>quality:</p>' + idea.quality + '</section><break>');
// }

function renderIdeaToPage(idea) {
  $('.idea-list').prepend('<li><h3 class="idea-title">' + idea.title + '</h3>' + '<button class="delete-idea"> x </button><p class="body-input">' + idea.body + '</p><section class="vote"><button type="button" class="upvote"></button><button type="button" class="downvote"></button><p class="quality-control">quality: ' + idea.quality + '</p></section>');
}

function clearFields() {
  $('#title-input').val('');
  $('#body-input').val('');
  $('#search-bar').val('');
}

$('.idea-list').on('click', '.delete-idea', function() {
  $(this).parent().remove();
});


$('.idea-list').on('click', '.upvote', function() {
  if ($('.quality-control').text('quality: swill')) {
    $(this).siblings('.quality-control').text('quality: plausible');
  } else if ($('.quality-control').text('quality: plausible')) {
    $(this).siblings('.quality-control').text('quality: genius');
  }
});

// $('.idea-list').on('click', '#downvote', function() {
//   $(this).sibling('.vote').child(quality-control).innerText('quality: plausible');
//   $(this).sibling('.vote').child(quality-control).innerText('quality: swill');
// });





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
