const Idea = require('./idea')

const ideaBox = {
  ideasList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addIdea(titleText, bodyText)
  },
  removeIdeaButtonClick: function(ideaId) {
    this.removeIdea(ideaId)
  },
  upvoteIdeaButtonClick: function(ideaId) {
    updateQuality(ideaId, 'upvote')
  },
  downvoteIdeaButtonClick: function(ideaId) {
    updateQuality(ideaId, 'downvote')
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
  updateQuality(ideaId, action) {
    let votePath = { 'upvote': ['s','p','g'], 'downvote': ['g', 'p', 's'] }
    let index = votePath[action].indexOf(idea.quality)
  }
}

module.exports = ideaBox
