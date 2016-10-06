ideaBox = require('./idea-box')

function Idea(title, body, quality = 'swill', id = Date.now()) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}
Idea.prototype = {
  renderIdeaToHTML: function(idea) {
    return `
      <section id=${this.id}>
        <h3 contenteditable="true" class="idea-title">${this.title}</h3>
        <button class="remove-idea"></button>
        <p contenteditable="true" class="body-input"> ${this.body}</p>
        <div class="vote">
          <button class="upvote"></button>
          <article class="downvote"></article>
          <p class="quality-control">quality: ${this.quality}</p>
        </div>
      </section>
    `;
  },
  updateTitle: function(id, newTitle) {
    var idea = ideaBox.findIdea(id);
    idea.title = newTitle;
    controller.updateLSFromModel()
  },
  updateBody: function(id, newBody) {
    var idea = ideaBox.findIdea(id);
    idea.body = newBody;
    controller.updateLSFromModel()
  },
  upvoteIdeaButtonClick: function(ideaId) {
    this.updateQuality(ideaId, 'upvote')
  },
  downvoteIdeaButtonClick: function(ideaId) {
    this.updateQuality(ideaId, 'downvote')
  },
  updateQuality(ideaId, voteChoice) {
    let votePath = { 'upvote': ['swill', 'plausible', 'genius'], 'downvote': ['genius', 'plausible', 'swill'] }
    idea = ideaBox.findIdea(ideaId);
    let index = votePath[voteChoice].indexOf(idea.quality)
    let qualityList = votePath[voteChoice]
    if (index < 2) {
      index++
      idea.quality = qualityList[index]
    }
  }
}

module.exports = Idea
