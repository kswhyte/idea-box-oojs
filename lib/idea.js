
function Idea(title, body, quality = 'swill', id = Date.now()) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}
Idea.prototype = {
  upvoteIdeaButtonClick: function(ideaId) {
    this.updateQuality(ideaId, 'upvote')
  },
  downvoteIdeaButtonClick: function(ideaId) {
    this.updateQuality(ideaId, 'downvote')
  },
  ideaTitleFocusOut(ideaId, newTitle) {
    this.updateTitle(ideaId, newTitle)
  },
  ideaBodyFocusOut(ideaId, newBody) {
    this.updateBody(ideaId, newBody)
  },
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
  updateTitle: function(ideaId, newTitle) {
    let idea = ideaBox.findIdea(ideaId);
    idea.title = newTitle;
  },
  updateBody: function(ideaId, newBody) {
    let idea = ideaBox.findIdea(ideaId);
    idea.body = newBody;
  },
  updateQuality: function(ideaId, voteChoice) {
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

ideaBox = require('./idea-box')
