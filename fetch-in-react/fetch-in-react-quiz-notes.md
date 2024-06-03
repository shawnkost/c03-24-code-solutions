# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?

  - `fetch`

- What two things need to be done to properly handle HTTP request errors? Why?

  - You need to wrap the `fetch` call in a `try/catch` block.
  - You need to check the HTTP status code of the response.

- How can `useEffect` be used to load data for a component?

  - By passing an empty array as the second argument to `useEffect`, we can have it execute a function when the component mounts, and update any state that is dependent on the data.

- How do you use `useEffect` to load component data just once when the component mounts?

  - By passing an empty array as the second argument to `useEffect`

- How do you use `useEffect` to load component data every time the data key changes?

  - By passing the data key as the second argument to `useEffect`

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

  - Using a package like `react-query` or `swr`

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
