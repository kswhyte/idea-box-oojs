const $ = require('jquery')
const Idea = require('./idea')
const ideaBox = require('./idea-box')
const dom = require('./dom')

const controller = {
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDom()
  },

  updateModelFromLS: function() {
    retrievedIdeasList = JSON.parse(localStorage.getItem('ideasList'))
    if (retrievedIdeasList) {
      ideaBox.ideasList = retrievedIdeasList.map(function(idea) {
        return new Idea(idea.id, idea.title, idea.body, idea.quality)
      })
    }
  },

  renderModelToDom: function () {
    ideaBox.ideasList.forEach(function(idea) {
      $('.idea-list').prepend(idea.renderIdeaToHTML())
    })
  },

  writeIdeas: function(ideasList) {
    ideaBox.ideasList.forEach(function(idea) {
      renderIdeaToHTML(idea);
    });
  },

  storeIdea: function() {
    localStorage.setItem("ideasList", JSON.stringify(ideasList));
  },

  clearFields: function() {
    $('#title-input').val('');
    $('#body-input').val('');
    $('#search-bar').val('');
  },

  deleteIdeaFromStorage: function(idea) {
    ideasList = ideasList.filter(function(ideasToKeep) {
      return ideasToKeep != idea;
    });
    localStorage.removeItem(idea);
    updateIdeasList(ideasList);
  },

  updateIdeasList: function(ideasList) {
    localStorage.setItem('ideasList', JSON.stringify(ideasList));
    storeIdea();
  }
}

module.exports = controller
