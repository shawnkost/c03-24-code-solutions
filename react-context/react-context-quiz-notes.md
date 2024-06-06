# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

  - The purpose of React "context" is to provide a way to share data between components without passing props through every component.

- What values can be stored in context?

  - The values that can be stored in context are any JavaScript value, including objects, arrays, functions, and even other contexts.

- How do you create context and make it available to the components?

  - You create context by using the `createContext` function from the `react` package. You can then use the `Provider` component to make the context available to the components.

- How do you access the context values?

  - You access the context values by using the `useContext` hook from the `react` package.

- When would you use context? (in addition to the best answer: "rarely")

  - You would use context in situations where you need to share data between components that are not directly related to each other.

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

Trivial change for pull request to be accepted
