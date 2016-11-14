# IdeaBox - OOJS

In this project, I built a simple application for recording and archiving our ideas (good and bad alike). However, this rendition includes a much different, and perhaps more effective, approach to organizing the internal structure of the codebase. Throughout the original project, one of my focuses was on providing a fluid and responsive client-side interface. This version represents an attempt to refactor a one page script into multiple classes and components that could handle and know about only specific tasks related to their purpose.

We wanted to re-architect the codebase to be able to accomodate for higher levels of abstraction and organization. We decided to include a controller class to handle all of the function calls to store ideas and pull JSON objects from localStorage. It talks to the Model class where all of the logic for dealing with creating new ideas, saving them, and organizing them is located in one place. Then we had a view or DOM that handled all UX/UI, JQuery calls and anything to do with the app experience. This allowed for more efficient testing and navigation through the codebase as a developer.

---
You can start saving your brilliant ideas and saving them in the same great [ideaBox](https://kswhyte.github.io/idea-box-oojs/), but this time with different guts under the hood.

---
See the [Original ideaBox](https://github.com/kswhyte/idea-box/blob/master/README.md) and find information about original intentions and goals.


