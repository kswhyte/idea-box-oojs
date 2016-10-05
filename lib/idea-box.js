const ideaBox = {
  ideasList: [],
  generateNewIdea: function(titleInput, bodyInput) {
    var idea = new Idea(titleInput, bodyInput);
    ideasList.push(idea);
    storeIdea();
    renderIdeaToHTML(idea);
    clearFields();
  },

  findIdea: function(id) {
    return ideasList.find(function(idea) {
      return idea.id === parseInt(id);
    });
  },

  addIdea: function() {

  },

  removeIdea: function() {

  }
}

module.exports = ideaBox
