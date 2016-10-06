const Idea = require('./idea')

const ideaBox = {
  ideasList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addIdea(titleText, bodyText)
  },
  removeIdeaButtonClick: function(ideaId) {
    this.removeIdea(ideaId)
  },
  addIdea: function(titleText, bodyText) {
    let idea = new Idea(titleText, bodyText)
    this.ideasList.push(idea)
  },
  removeIdea: function(ideaId) {
    this.ideasList = this.ideasList.filter(function(currentIdea) {
      return currentIdea.id != ideaId;
    })
  },
  findIdea: function(ideaId) {
    let idea = this.ideasList.filter(function(currentIdea) {
      return currentIdea.id === ideaId;
    })
    return idea[0];
  }
}

module.exports = ideaBox
