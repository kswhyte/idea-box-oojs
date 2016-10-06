const $ = require('jquery')
const Idea = require('./idea')
const ideaBox = require('./idea-box')
const dom = require('./dom')

const controller = {
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDom()
  },

  updateLSFromModel: function() {
    localStorage.setItem("ideasList", JSON.stringify(ideaBox.ideasList));
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

  clearFields: function() {
    $('#title-input').val('')
    $('#body-input').val('')
    $('#search-bar').val('')
  },

  saveButtonClick: function() {
    this.updateLSFromModel()
    this.renderModelToDom()
    this.clearFields()
  },

  ideaSearchInputKeyup: function() {
    this.renderModelToDom()
  },

  deleteIdeaFromStorage: function(idea) {
    ideasList = ideasList.filter(function(ideasToKeep) {
      return ideasToKeep != idea;
    });
    localStorage.removeItem(idea);
    updateLSFromModel();
  },

  removeIdeaButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },

  ideaPromoteButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },

  ideaDemoteButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },

  ideaTitleKeyup: function() {
    this.updateLSFromModel()
  },

  ideaBodyKeyup: function() {
    this.updateLSFromModel()
  },

}

module.exports = controller




// writeIdeas: function(ideasList) {
//   ideaBox.ideasList.forEach(function(idea) {
//     renderIdeaToHTML(idea);
//   });
// },

// storeIdea: function() {
//   localStorage.setItem("ideasList", JSON.stringify(ideasList));
// },

// updateIdeasList: function(ideasList) {
//   localStorage.setItem('ideasList', JSON.stringify(ideasList));
//   updateLSFromModel();
// }
