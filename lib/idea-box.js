
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
    let ideas = this.ideasList.filter(function(currentIdea) {
      return currentIdea.id === ideaId;
    })
    return ideas[0]
  }
}

module.exports = ideaBox

const Idea = require('./idea')
