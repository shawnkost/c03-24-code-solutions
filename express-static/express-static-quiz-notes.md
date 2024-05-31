# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?

  - The purpose of static middleware is to serve all static content directly from the server, rather than loading them on the client side and embedding them into the source code. This can severely speed up load times, and increase the overall performance of a web application

- What does `express.static()` return?

  - `express.static()` returns a middleware function that will serve static files from a specified directory.

- What are several examples of static files?

  - Some examples of static files include images, stylesheets, HTML files, and JavaScript files.

- What is a good way to serve application images using Express?

  - Create a public/images directory inside of your server directory
  - Use the express static middleware in your server code to serve all static content from the public directory
  - Update your HTML/JS to utilize the static content being served by the server

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
