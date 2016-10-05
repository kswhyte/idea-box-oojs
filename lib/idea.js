

function Idea(title, body, id, quality) {
  this.id = id || Date.now() ;
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

Idea.prototype = {
  renderIdeaToHTML: function(idea) {
    return `
      <section id=${this.id}>
        <h3 contenteditable="true" class="idea-title">${this.title}</h3>
        <button class="delete-idea"></button>
        <p contenteditable="true" class="body-input"> ${this.body}</p>
        <div class="vote">
          <button class="upvote"></button>
          <article class="downvote"></article>
          <p class="quality-control">quality:${this.quality}</p>
        </div>
      </section>
    `;
  },

  updateTitle: function(id, newTitle) {
    var idea = findIdea(id);
    idea.title = newTitle;
    storeIdea();
  },

  updateBody: function(id, newBody) {
    var idea = findIdea(id);
    idea.body = newBody;
    storeIdea();
  },

  updateQuality: function() {
    if ($quality.text() === 'quality: genius') {
      $quality.text('quality: plausible');
      idea.quality = 'plausible';
    } else if ($quality.text() === 'quality: plausible') {
      $quality.text('quality: swill');
      idea.quality = 'swill';
    }
    if ($quality.text() === 'quality: swill') {
      $quality.text('quality: plausible');
      idea.quality = 'plausible';
    } else if ($quality.text() === 'quality: plausible') {
      $quality.text('quality: genius');
      idea.quality = 'genius';
    }
  }
}

module.exports = Idea
