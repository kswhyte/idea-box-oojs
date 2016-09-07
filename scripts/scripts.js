function createSiteLink(urlInput) {
  var titleInput = $('#title-input').val();
  var siteLink = '<li><a class="new-url-link" target="_blank" href="http://' + urlInput + '">' + titleInput + '</a><button class="mark-as-read-button">Mark as Read</button><button class="remove-link-button""mark-as-read-button">X</li>'
  addToLinkList(siteLink);
  $('#title-input').focus();
}

$('.linked-list').on('click', '.new-url-link', markAsRead);

function addToLinkList(siteLink) {
  $('.linked-list').append(siteLink);
  clearFields();
  countTotals();
}
