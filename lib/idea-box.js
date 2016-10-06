const Idea = require('./idea')

const ideaBox = {
  ideasList: [],
  addIdeaToList: function(ideaId, titleInput, bodyInput) {
    let idea = new Idea(ideaId, titleInput, bodyInput);
    this.ideasList.find(function(idea) {
      return idea.id === parseInt(ideaId);
    })
    // storeIdea();
    // renderIdeaToHTML(idea);
    // clearFields();
  },

  findIdea: function(id) {
    return this.ideasList.find(function(idea) {
      return idea.id === parseInt(id);
    });
  },

  addIdea: function() {

  },

  removeIdea: function() {

  }
}

module.exports = ideaBox
