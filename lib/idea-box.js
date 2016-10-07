const $ = require('jquery')

const ideaBox = {
  ideasList: [],
  filteredIdeasList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addIdea(titleText, bodyText)
  },
  removeIdeaButtonClick: function(ideaId) {
    this.removeIdea(ideaId)
  },
  searchFilterKeyup: function(filterWord) {
    this.filterIdeas(filterWord)
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
  },
  filterIdeas: function(filterWord) {
    // this.filteredIdeasList = []
    let ideasIDontWant = $('.idea-section:not(:contains(' + filterWord + '))' )
    let ideasIWant = $('.idea-section:contains(' + filterWord + ')' )
    ideasIDontWant.hide()
    ideasIWant.show()
  }
}

module.exports = ideaBox

const Idea = require('./idea')
