const $ = require('jquery')


const controller = {
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDom()
  },
  saveButtonClick: function() {
    this.updateLSFromModel()
    this.renderModelToDom()
    this.clearFields()
  },
  ideaSearchInputKeyup: function() {
    this.renderModelToDom()
  },
  removeIdeaButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  upvoteIdeaButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  downvoteIdeaButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  ideaTitleFocusOut: function() {
    this.updateLSFromModel()
  },
  ideaBodyFocusOut: function() {
    this.updateLSFromModel()
  },
  searchFilterKeyup: function() {
    this.renderModelToDom()
  },
  updateLSFromModel: function() {
    localStorage.setItem("ideasList", JSON.stringify(ideaBox.ideasList));
  },
  updateModelFromLS: function() {
    retrievedIdeasList = JSON.parse(localStorage.getItem('ideasList'))
    if (retrievedIdeasList) {
      ideaBox.ideasList = retrievedIdeasList.map(function(idea) {
        return new Idea(idea.title, idea.body, idea.quality, idea.id)
      })
    }
  },
  renderModelToDom: function () {
    $('.idea-list').html('')
    ideaBox.ideasList.forEach(function(idea) {
      $('.idea-list').prepend(idea.renderIdeaToHTML())
    })
    ideaBox.filterIdeas($('#search-bar').val())
  },
  clearFields: function() {
    $('#title-input').val('')
    $('#body-input').val('')
    $('#search-bar').val('')
    $('#title-input').focus()
  }
}

module.exports = controller

const Idea = require('./idea')
const ideaBox = require('./idea-box')
const dom = require('./dom')
