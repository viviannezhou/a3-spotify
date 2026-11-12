--Readme document for Vivianne Zhou, zhouvj@uci.edu--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Communicating with the webserver
- 1/1 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 1.5/1.5 Album page
- 0.5/0.5 Track page


2. How long, in hours, did it take you to complete this assignment?

About 7-8 hours, including setup.


3. What online resources did you consult when completing this assignment? (list specific URLs)

- Lecture 10 and 11 slides (Angular components, binding, services, routing)
- Angular binding reference: https://angular.dev/guide/templates/binding
- Angular two-way binding: https://angular.dev/guide/templates/two-way-binding
- Angular @if and @for: https://angular.dev/api/core/@if, https://angular.dev/api/core/@for
- Angular HttpClient: https://angular.dev/api/common/http/HttpClient
- Claude (Anthropic): I used Claude as a tutor. For each part, it explained the Angular concepts and gave me skeleton code with some blanks, and I typed up the code myself, filled in the blanks (like field names, which service functions to call, and the bindings), then checked my work with it after. It also helped me debug errors, like a typo in a constructor, missing closing tags, wrong field names (imageUrl vs imageURL, duration vs durationStr), and the ng serve server stopping, which made the album page show up blank. It also helped with setup, like unzipping the dummy webserver and running both servers.
- GitHub Copilot: Copilot sometimes suggested code while I was typing. I only used suggestions after checking that they made sense and were correct, and I edited them when needed.


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

None. I worked alone.


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?

No.


6. Is there anything special we need to know in order to run your code?

Nothing special. I changed the max-width of the artist image to 100% in artist-page.component.css so the picture stays in its own column instead of overlapping the middle one.