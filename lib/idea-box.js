const Idea = require('./idea')

const ideaBox = {
  ideasList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addIdea(titleText, bodyText)
  },
  removeIdeaButtonClick: function(ideaId) {
    this.removeIdea(ideaId)
  },
  addIdea: function(titleInput, bodyInput) {
    let idea = new Idea(titleInput, bodyInput)
    this.ideasList.push(idea)
  },
  removeIdea: function(ideaId) {
    this.ideasList = this.ideasList.filter(function(currentIdea) {
      return currentIdea.id != ideaId;
    })
  }
}

module.exports = ideaBox
