# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is Express middleware?

  - Express middleware are functions that have access to the request object, the response object, and the next middleware function. When Express receives an HTTP request, it passes the request into each middleware function.

- What is Express middleware useful for?

  - Express middleware is useful managing your applications functionality in a clean and organized way. You can have a variety of middleware perform various different actions, like an authentication middleware, an error handling middleware, etc..

- How do you mount a middleware with an Express application?

  - You mount a middleware function by using the `app.use()` or `app.method()` functions.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

  - Express passes the `req` and `res` objects into middleware to manage the lifecycle.

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
